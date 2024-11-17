'use client'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { createCatalogSchema } from '@/schemas'
import { categoryApiRequestAdmin } from '@/apiRequests/category'

const AddAddressForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm({
        resolver: zodResolver(createCatalogSchema),
        defaultValues: {
            name: '',
            image: null
        }
    })

    const onSubmit = async (values) => {
        console.log('Dữ liệu form: ', values)
        try {
            const formData = new FormData()
            formData.append('name', values.name)

            if (values.image && values.image[0]) {
                formData.append('file', values.image[0])
            } else {
                console.error('Ảnh không được chọn!')
                return
            }

            const result = await categoryApiRequestAdmin.addCatalog(formData)
            console.log('Thêm danh mục thành công:', result)
        } catch (error) {
            console.error('Có lỗi xảy ra khi gửi yêu cầu:', error)
        }
    }

    const handleImageChange = (e) => {
        setValue('image', e.target.files[0])
    }

    return (
        <div id="content-page" className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Thêm danh mục mới</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className="form-group">
                                        <label style={{ marginRight: '15px' }}>Ảnh danh mục:</label>
                                        <input
                                            type="file"
                                            {...register('image')}
                                            name="image"
                                            className="form-control"
                                            onChange={handleImageChange}
                                        />
                                        {errors.image && (
                                            <span className="text-danger">
                                                {errors.image.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="form-group">
                                        <label>Tên danh mục:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            {...register('name')}
                                        />
                                        {errors.name && (
                                            <span className="text-danger">
                                                {errors.name.message}
                                            </span>
                                        )}
                                    </div>

                                    <div className="d-flex">
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

export default AddAddressForm
