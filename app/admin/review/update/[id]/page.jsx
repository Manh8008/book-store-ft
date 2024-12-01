'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { reviewApiRequestAdmin } from '@/apiRequests/post'
import { handleHttpError } from '@/lib/utils'
import { set } from 'zod'

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

                // Lưu URL ảnh cũ vào state
                const imageUrl = result.payload.data.image_url;
                setSelectedImage(imageUrl)
                setValue('image_url', imageUrl)
            } else {
                console.error('Không thể lấy bài viết')
            }
        }
        getPost()
    }, [id, setValue])

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(file);
        }
    };

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append('_method', 'PUT');

            // Thêm các giá trị khác ngoài ảnh
            for (const key in data) {
                if (key !== 'image') {
                    formData.append(key, data[key]);
                }
            }

            // Nếu có ảnh mới (chọn từ input), thêm vào FormData
            if (selectedImage instanceof File) {
                formData.append('image', selectedImage); // Gửi file ảnh thực tế lên server
            } else if (review?.image_url) {
                // Nếu không có ảnh mới, gửi lại URL của ảnh cũ
                formData.append('image', review.image_url);
            }

            const result = await reviewApiRequestAdmin.updatePost(id, formData);
            if (result.status === 200) {
                router.push('/admin/review');
            }
        } catch (error) {
            handleHttpError(error, setError);
        }
    };

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
                                                {...register('image', {
                                                    required: 'Ảnh bài viết là bắt buộc'
                                                })}
                                                onChange={handleImageChange}
                                            />
                                            <label className="custom-file-label">Choose file</label>
                                            {errors.image && (
                                                <div className="text-danger mt-2">
                                                    {errors.image.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="bg-secondary-subtle mb-3 mt-4 p-2">
                                            {selectedImage ? (
                                                <img
                                                    src={selectedImage instanceof File ? URL.createObjectURL(selectedImage) : selectedImage}
                                                    className="img-fluid"
                                                    style={{ maxWidth: '300px', height: 'auto' }}
                                                    alt="Product Image"
                                                />
                                            ) : review?.image_url ? (
                                                <img
                                                    src={review.image_url}
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
