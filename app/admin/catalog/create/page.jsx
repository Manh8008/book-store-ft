'use client'

import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { handleHttpError } from '@/lib/utils'
import { catalogApiRequestAdmin } from '@/apiRequests/category'

import Cookies from 'js-cookie'

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

const CreateCatalog = ({ categories }) => {
    const token = Cookies.get('sessionTokenAdmin')
    const [error, setError] = useState('')
    const router = useRouter()
    const [imagePreview, setImagePreview] = useState(null)

    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors, isSubmitting, isDirty }
    } = useForm({
        resolver: zodResolver(categoryForm1Schema),
        defaultValues: categories
            ? {
                  name: categories.name,
                  image: undefined
              }
            : {
                  name: '',
                  image: undefined
              }
    })

    useEffect(() => {
        if (categories?.image) {
            getFileFromUrl(categories.image).then((file) => {
                reset({ name: categories.name, image: file })
                setImagePreview(URL.createObjectURL(file))
            })
        }
    }, [categories, reset])

    const onSubmit = async (data) => {
        try {
            const formData = new FormData()
            formData.append('name', data.name)
            formData.append('image', data.image)

            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/storeCatalog`,
                {
                    method: 'POST',
                    headers: {
                        Accept: 'multipart/form-data',
                        Authorization: `Bearer ${token}`
                    },
                    body: formData
                }
            )
            const resData = await res.json()

            console.log(resData)

            // const result = await catalogApiRequestAdmin.addCatalog(data)

            if (resData.success == true) {
                router.push('/admin/catalog')
            }
        } catch (error) {
            handleHttpError(error, setError)
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
                                    <div className="form-group">
                                        <label>Ảnh danh mục:</label>
                                        <div className="custom-file">
                                            <Controller
                                                style={{ width: 70, height: 100 }}
                                                name="image"
                                                control={control}
                                                render={({
                                                    field: { ref, name, onBlur, onChange }
                                                }) => (
                                                    <input
                                                        type="file"
                                                        className="custom-file-input"
                                                        ref={ref}
                                                        name={name}
                                                        onBlur={onBlur}
                                                        onChange={(e) => {
                                                            onChange(e.target.files?.[0])
                                                            if (e.target.files?.[0]) {
                                                                setImagePreview(
                                                                    URL.createObjectURL(
                                                                        e.target.files[0]
                                                                    )
                                                                )
                                                            }
                                                        }}
                                                    />
                                                )}
                                            />
                                            {imagePreview && (
                                                <img
                                                    src={imagePreview}
                                                    alt="Preview"
                                                    style={{
                                                        maxWidth: '300px',
                                                        marginTop: '20px',
                                                        marginBottom: '20px'
                                                    }}
                                                />
                                            )}
                                            {errors.image && (
                                                <span style={{ color: 'red' }}>
                                                    {errors.image.message}
                                                </span>
                                            )}
                                            <label className="custom-file-label">Choose file</label>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Tên danh mục:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register('name', {
                                                required: 'Tên danh mục là bắt buộc'
                                            })}
                                        />
                                        {errors.name && (
                                            <span style={{ color: 'red' }}>
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>
                                    <div className="d-flex">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ marginRight: '10px' }}
                                            disabled={isSubmitting}
                                        >
                                            {isSubmitting ? 'Đang xử lý...' : 'Thêm'}
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-danger"
                                            onClick={() => reset({ name: '', image: undefined })}
                                        >
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
    )
}

export default CreateCatalog
