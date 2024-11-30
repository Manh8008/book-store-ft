'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { reviewApiRequestAdmin } from '@/apiRequests/post'
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
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Thêm bài viết</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-group">
                                            <label>Ảnh bài viết:</label>
                                            <div class="custom-file">
                                                <input
                                                    type="file"
                                                    class="custom-file-input"
                                                    name="image"
                                                    {...register('image')}
                                                />
                                                <label class="custom-file-label">Choose file</label>
                                            </div>
                                            {errors.image && (
                                                <div className="text-danger mt-2">
                                                    {errors.image.message}
                                                </div>
                                            )}
                                        </div>
                                        <div class="form-group">
                                            <label>Tiêu đề bài viết:</label>
                                            <input
                                                type="text"
                                                class="form-control"
                                                name="title"
                                                {...register('title')}
                                            />
                                            {errors.title && (
                                                <div className="text-danger mt-2">
                                                    {errors.title.message}
                                                </div>
                                            )}
                                        </div>
                                        <div class="form-group">
                                            <label>Nội dung bài viết:</label>
                                            <textarea
                                                class="form-control"
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
                                            class="btn btn-primary"
                                            style={{ marginRight: '10px' }}
                                        >
                                            Thêm
                                        </button>
                                        <button type="reset" class="btn btn-danger">
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
