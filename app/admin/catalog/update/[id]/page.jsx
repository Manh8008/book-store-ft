'use client'

import { z } from 'zod'
import React, { useEffect, useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { handleHttpError } from '@/lib/utils'

import { ToastError } from '@/components/ui/ToastError/ToastError'
import { catalogApiRequestAdmin } from '@/apiRequests/category'

const UpdateCatalog = ({ params }) => {
    const router = useRouter()
    const id = params.id
    const [error, setError] = useState('')
    const [selectedImage, setSelectedImage] = useState(null)
    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: { errors }
    } = useForm()
    const [catalog, setCatalog] = useState(null)

    useEffect(() => {
        if (!id) {
            console.error('Không có id danh mục nào.')
            return
        }

        const getCatalog = async () => {
            const result = await catalogApiRequestAdmin.getCatalogById(id)
            if (result?.payload?.data) {
                setCatalog(result.payload.data)
                setValue('name', result.payload.data.name)
                // Lưu URL ảnh cũ vào state
                const imageUrl = result.payload.data.image
                setSelectedImage(imageUrl)
                setValue('image', imageUrl)
            } else {
                console.error('Không thể lấy danh mục')
            }
        }
        getCatalog()
    }, [id, setValue])

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setSelectedImage(file)
        }
    }

    const onSubmit = async (data) => {
        try {
            const formData = new FormData()
            formData.append('_method', 'PUT')

            // Thêm các giá trị khác ngoài ảnh
            for (const key in data) {
                if (key !== 'image') {
                    formData.append(key, data[key])
                }
            }

            // Nếu có ảnh mới (chọn từ input), thêm vào FormData
            if (selectedImage instanceof File) {
                formData.append('image', selectedImage) // Gửi file ảnh thực tế lên server
            } else if (review?.image) {
                // Nếu không có ảnh mới, gửi lại URL của ảnh cũ
                formData.append('image', catalog.image)
            }

            const result = await catalogApiRequestAdmin.updateCatalog(id, formData)
            if (result.status === 200) {
                router.push('/admin/catalog')
            }
        } catch (error) {
            handleHttpError(error, setError)
        }
    }

    return (
        <div id="content-page" className="content-page">
            <ToastError errorMessage={error} />
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
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                {...register('image', {
                                                    required: 'Ảnh danh mục là bắt buộc'
                                                })}
                                                onChange={handleImageChange}
                                            />
                                            <label className="custom-file-label">Choose file</label>
                                        </div>
                                        {errors.image && (
                                            <div className="text-danger mt-4">
                                                {errors.image.message}
                                            </div>
                                        )}
                                        <div className="bg-secondary-subtle mb-3 mt-4 p-2">
                                            {selectedImage ? (
                                                <img
                                                    src={
                                                        selectedImage instanceof File
                                                            ? URL.createObjectURL(selectedImage)
                                                            : selectedImage
                                                    }
                                                    className="img-fluid"
                                                    style={{ maxWidth: '300px', height: 'auto' }}
                                                    alt="Product Image"
                                                />
                                            ) : catalog?.image ? (
                                                <img
                                                    src={catalog.image}
                                                    className="img-fluid"
                                                    style={{ maxWidth: '300px', height: 'auto' }}
                                                    alt="Product Image"
                                                />
                                            ) : (
                                                <p>Không có ảnh để hiển thị</p>
                                            )}
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
                                            <div className="text-danger mt-2">
                                                {errors.name.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="d-flex">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ marginRight: '10px' }}
                                        >
                                            Sửa
                                        </button>
                                        <button
                                            type="reset"
                                            className="btn btn-danger"
                                            onClick={() => reset()}
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

export default UpdateCatalog
