'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { reviewApiRequestAdmin } from '@/apiRequests/post'
import { handleHttpError } from '@/lib/utils'

export default function UpdateReview({ params }) {
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
    const [review, setReview] = useState(null)

    useEffect(() => {
        if (!id) {
            console.error('Không có id bài viết.')
            return
        }

        const getPost = async () => {
            const result = await reviewApiRequestAdmin.getPostById(id)
            if (result?.payload?.data) {
                setReview(result.payload.data)
                setValue('title', result.payload.data.title)
                setValue('description', result.payload.data.description)

                setSelectedImage(result.payload.data.image_url)
            } else {
                console.error('Không thể lấy bài viết')
            }
        }
        getPost()
    }, [id, setValue])

    useEffect(() => {
        if (review) {
            console.log('Ảnh bài viết:', review.image_url)
        }
    }, [review])

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setSelectedImage(URL.createObjectURL(file))
        }
    }

    // Cái phần này nó đang bị không thay được ảnh mới lên, nó cú để ảnh cũ như vậy
    const onSubmit = async (data) => {
        console.log(data)
        try {
            const formData = new FormData()
            formData.append('_method', 'PUT')

            for (const key in data) {
                formData.append(key, data[key])
            }

            if (selectedImage && selectedImage instanceof File) {
                formData.append('image_url', selectedImage)
            } else if (selectedImage && typeof selectedImage === 'string') {
                formData.append('image_url', selectedImage)
            }

            const result = await reviewApiRequestAdmin.updatePost(id, formData)
            if (result.status === 200) {
                // router.push('/admin/review')
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
                                    <h4 className="card-title">Sửa bài viết</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label>Ảnh bài viết:</label>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                {...register('image_url', {
                                                    required: 'Ảnh bài viết là bắt buộc'
                                                })}
                                                onChange={handleImageChange}
                                            />
                                            <label className="custom-file-label">Choose file</label>
                                        </div>
                                        {errors.image_url && (
                                            <div className="text-danger mt-2">
                                                {errors.image_url.message}
                                            </div>
                                        )}
                                        <div className="bg-secondary-subtle mb-3 p-2 text-center">
                                            {/* Hiển thị ảnh đã chọn hoặc ảnh cũ */}
                                            {selectedImage ? (
                                                <img
                                                    src={selectedImage}
                                                    className="w-20"
                                                    alt="Product Image"
                                                />
                                            ) : review?.image_url ? (
                                                <img
                                                    src={review.image_url}
                                                    className="w-20"
                                                    alt="Product Image"
                                                />
                                            ) : (
                                                <p>Không có ảnh để hiển thị</p>
                                            )}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Tiêu đề bài viết:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            {...register('title', {
                                                required: 'Tiêu đề bài viết là bắt buộc'
                                            })}
                                        />
                                        {errors.title && (
                                            <div className="text-danger mt-2">
                                                {errors.title.message}
                                            </div>
                                        )}
                                    </div>
                                    <div className="form-group">
                                        <label>Nội dung bài viết:</label>
                                        <textarea
                                            className="form-control"
                                            rows="4"
                                            {...register('description', {
                                                required: 'Nội dung bài viết là bắt buộc'
                                            })}
                                        ></textarea>
                                        {errors.description && (
                                            <div className="text-danger mt-2">
                                                {errors.description.message}
                                            </div>
                                        )}
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                        style={{ marginRight: '10px' }}
                                    >
                                        Sửa
                                    </button>
                                    <button
                                        type="button"
                                        className="btn btn-danger"
                                        onClick={() => reset()}
                                    >
                                        Trở lại
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
