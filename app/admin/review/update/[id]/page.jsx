"use client"

import { reviewApiRequestAdmin } from "@/apiRequests/review"
import { useRouter } from "next/navigation"
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'

export default function UpdateReview({ params }) {

    const router = useRouter()
    const id = params.id
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm()
    const [review, setReview] = useState(null)

    useEffect(() => {
        // Lấy dữ liệu chi tiết bài viết cần sửa
        const getPost = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getPostById/${id}`
            )
            const data = await res.json()
            setReview(data.data)
            // Dữ liệu chi tiết bài viết show ra form
            // Đặt giá trị ban đầu cho form
            // console.log(data.data)
            setValue('title', data.data.title)
            setValue('description', data.data.description)
        }
        if (id) {
            getPost()
        }
    }, [id, setValue])

    useEffect(() => {
        if (review) {
            console.log("Ảnh bài viết:", review.image_url); // Kiểm tra ảnh
        }
    }, [review]);

    const onSubmit = async (data) => {
        const formData = new FormData()
        for (const key in data) {
            formData.append(key, data[key])
        }
        if (data.image[0]) {
            formData.append('image', data.image[0])
        }

        const res = await reviewApiRequestAdmin.updateReview(id, formData)
        const result = await res.json()
        if (result.error) {
            console.error(result.error)
        } else {
            router.push('/admin/review')
        }
    }



    return (
        <>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Sửa bài viết</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-group">
                                            <label>Ảnh bài viết:</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input"
                                                    {...register('image', {
                                                        required: 'Ảnh bài viết là bắt buộc'
                                                    })} />
                                                <label class="custom-file-label">Choose file</label>
                                            </div>
                                            {errors.image && (
                                                <div className="text-danger mt-2">
                                                    {errors.image.message}
                                                </div>
                                            )}
                                            <div className="bg-secondary-subtle mb-3 p-2 text-center">
                                                {review &&
                                                    review.image_url &&
                                                    review.image_url.length > 0 ? (
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
                                        <div class="form-group">
                                            <label>Tiêu đề bài viết:</label>
                                            <input type="text" class="form-control" {...register('title', {
                                                required: 'Tiêu đề bài viết là bắt buộc'
                                            })} />
                                            {errors.title && (
                                                <div className="text-danger mt-2">
                                                    {errors.title.message}
                                                </div>
                                            )}
                                        </div>
                                        <div class="form-group">
                                            <label>Nội dung bài viết:</label>
                                            <textarea class="form-control" rows="4" {...register('description', {
                                                required: 'Nội dung bài viết là bắt buộc'
                                            })}></textarea>
                                            {errors.description && (
                                                <div className="text-danger mt-2">
                                                    {errors.description.message}
                                                </div>
                                            )}
                                        </div>
                                        <button type="submit" class="btn btn-primary" style={{ marginRight: '10px' }}>Sửa</button>
                                        <button type="reset" class="btn btn-danger">Trở lại</button>
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