'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { reviewApiRequestAdmin } from '@/apiRequests/post'
import { useState } from 'react'
export default function CreateReview() {
    const reviewFormSchema = z.object({
        title: z.string().min(1, { message: 'Tiêu đề bài viết là bắt buộc' }),
        image: z
            .any()
            .refine((file) => file?.length > 0, { message: 'Hình ảnh là bắt buộc' })
            .refine((file) => file[0] instanceof File, {
                message: 'Hình ảnh phải là một file hợp lệ'
            }),
        description: z.string().min(1, { message: 'Nội dung là bắt buộc' })
    })

    const router = useRouter()
    const [imagePreview, setImagePreview] = useState(null)

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setImagePreview(URL.createObjectURL(file))
        }
    }

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        resolver: zodResolver(reviewFormSchema),
        defaultValues: {
            title: '',
            description: ''
        }
    })

    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append('title', data.title)
        formData.append('description', data.description)
        if (data.image && data.image[0]) {
            formData.append('image', data.image[0])
        }

        const result = await reviewApiRequestAdmin.addReview(formData)
        if (result.status === 200) {
            router.push('/admin/review')
        }
    }

    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Thêm bài viết</h4>
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
                                                    name="image"
                                                    {...register('image')}
                                                    onChange={handleImageChange}
                                                />
                                                <label className="custom-file-label">
                                                    Choose file
                                                </label>
                                                {errors.image && (
                                                    <div className="text-danger mt-2">
                                                        {errors.image.message}
                                                    </div>
                                                )}
                                            </div>
                                            <div className="bg-secondary-subtle mb-3 mt-4 p-2">
                                                {imagePreview && (
                                                    <img
                                                        src={imagePreview}
                                                        className="img-fluid"
                                                        style={{
                                                            maxWidth: '300px',
                                                            height: 'auto'
                                                        }}
                                                        alt="Product Image"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Tiêu đề bài viết:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="title"
                                                {...register('title')}
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
                                                name="description"
                                                {...register('description')}
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
                                            Thêm
                                        </button>
                                        <button type="reset" className="btn btn-danger">
                                            Trở lại
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
