"use client"

import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import Cookies from 'js-cookie';

const getFileFromUrl = async (url) => {
    const res = await fetch(url)
    const blob = await res.blob()
    return new File([blob], 'image', { type: blob.type })
}

const categoryForm1Schema = z.object({
    name: z.string().min(1, { message: 'Nhập tên danh mục là bắt buộc' }),
    image: z
        .custom((v) => v instanceof File, {
            message: 'Image must be a valid file'
        })
        .refine((v) => v, { message: 'Nhập ảnh danh mục là bắt buộc' })
})

const CreateCatalog = ({ categories, sessionTokenAdmin }) => {
    const router = useRouter();
    const {
        register,
        handleSubmit,
        control,
        watch,
        formState: { errors, isSubmitting, isDirty }
    } = useForm({
        resolver: zodResolver(categoryForm1Schema),
        defaultValues: categories
            ? async () => ({
                name: categories.name,
                image: await getFileFromUrl(categories.image)
            })
            : {
                name: '',
                image: undefined
            }
    })

    const image = watch('image')
    const imagePreview = image ? URL.createObjectURL(image) : null

    // Revoke object URL to prevent memory leaks
    useEffect(() => {
        return () => {
            if (imagePreview) URL.revokeObjectURL(imagePreview)
        }
    }, [imagePreview])

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('name', data.name)
        formData.append('image', data.image)

        const res = await fetch('http://127.0.0.1:8000/api/admin/storeCatalog', {
            method: 'POST',
            headers: {
                Authorization: `Bearer 142|15ljjS6w9x1Nu82BykKQHkvd4IMlP9OWya6EI2u7b4b9cea6`
            },
            body: formData
        })

        if (!res.ok) {
            throw new Error('Failed to create catalog')
        }

        const result = await res.json()
        if (result.error) {
            console.error(result.error);
        } else {
            alert('Thêm danh mục thành công!')
            router.push('/admin/categories');
        }
    }

    return (
        <div id="content-page" className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Sửa danh mục</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div class="form-group">
                                        <label>Ảnh danh mục:</label>
                                        <div class="custom-file">
                                            <Controller
                                                name="image"
                                                control={control}
                                                render={({ field: { ref, name, onBlur, onChange } }) => (
                                                    <input type="file" class="custom-file-input" ref={ref}
                                                        name={name}
                                                        onBlur={onBlur}
                                                        onChange={(e) => onChange(e.target.files?.[0])} />
                                                )}
                                            />
                                            {imagePreview && (
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    style={{ maxWidth: "300px", marginTop: "20px", marginBottom: "180px" }}
                                                />
                                            )}
                                            {errors.image && (
                                                <span style={{ color: "red" }}>
                                                    {errors.image.message}
                                                </span>
                                            )}
                                            <label class="custom-file-label">Choose file</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Tên danh mục:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register("name", { required: "Tên danh mục là bắt buộc" })}
                                        />
                                        {errors.name && (
                                            <span style={{ color: "red" }}>
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="d-flex">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ marginRight: "10px" }}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? "Đang xử lý..." : "Thêm"}
                                        </button>
                                        <button type="reset" className="btn btn-danger">
                                            Trở lại
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateCatalog
