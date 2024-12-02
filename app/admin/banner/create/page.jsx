'use client'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { bannerApiRequestAdmin } from '@/apiRequests/banner'


export default function CreateBanner() {
    const bannerFormSchema = z.object({
        image: z
            .any()
            .refine((file) => file?.length > 0, { message: 'Hình ảnh banner là bắt buộc' })
            .refine((file) => file[0] instanceof File, {
                message: 'Hình ảnh phải là một file hợp lệ'
            }),
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
        resolver: zodResolver(bannerFormSchema),
    })

    const onSubmit = async (data) => {
        const formData = new FormData()
        if (data.image && data.image[0]) {
            formData.append('image', data.image[0])
        }

        const result = await bannerApiRequestAdmin.addBanner(formData)
        if (result.status === 200) {
            router.push('/admin/banner')
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
                                        <h4 className="card-title">Thêm banner</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label>Ảnh danh mục:</label>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input"
                                                    name="image"
                                                    {...register('image')}
                                                    onChange={handleImageChange}
                                                />
                                                <label className="custom-file-label">Choose file</label>
                                                {errors.image && (
                                                    <span className="error" style={{ marginTop: 16 }}>
                                                        {errors.image.message}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="bg-secondary-subtle mb-3 mt-4 p-2">
                                                {imagePreview && (
                                                    <img
                                                        src={imagePreview}
                                                        className="img-fluid"
                                                        style={{ maxWidth: '300px', height: 'auto' }}
                                                        alt="Product Image"
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <button
                                                type="submit"
                                                className="btn btn-primary"
                                                style={{ marginRight: '10px' }}
                                            >
                                                Thêm
                                            </button>
                                            <button
                                                type="reset"
                                                className="btn btn-danger"
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
        </>
    )
}