'use client'

import { authAdminApiRequest } from '@/apiRequests/auth'
import { useFormik } from 'formik'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import * as Yup from 'Yup'

export default function AddCategories() {
    const validationSchema = Yup.object({
        name: Yup.string().required('Nhập tên danh mục là bắt buộc'),
        image: Yup.mixed().required('Chọn ảnh danh mục là bắt buộc ')
    })
    const [formValue, setFormValue] = useState(null)
    const router = useRouter()

    const formik = useFormik({
        initialValues: {
            name: '',
            image: null
        },
        validationSchema,
        onSubmit: async (values) => {
            setFormValue(values);
            const formData = new FormData();
            formData.append('name', values.name);
            formData.append('image', values.image);

            const res = await authAdminApiRequest.storeCatalog(formData);

            if (!res.ok) {
                const errorText = await res.text();
                console.error(`Error ${res.status}: ${errorText}`);
                throw new Error('Failed to create category');
            }

            const result = await res.json();
            console.log('Success:', result);

            if (result.error) {
                console.error(result.error);
            } else {
                router.push('/admin/categories');
            }
        }
    });


    return (
        <div id="content-page" className="content-page">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="iq-card">
                            <div className="iq-card-header d-flex justify-content-between">
                                <div className="iq-header-title">
                                    <h4 className="card-title">Thêm danh mục</h4>
                                </div>
                            </div>
                            <div className="iq-card-body">
                                <form
                                    onSubmit={formik.handleSubmit}
                                    method="POST"
                                    encType="multipart/form-data"
                                >
                                    <div className="form-group">
                                        <label>Ảnh danh mục:</label>
                                        <div className="custom-file">
                                            <input
                                                type="file"
                                                className="custom-file-input"
                                                name="image"
                                                onBlur={formik.handleBlur}
                                                onChange={(e) => {
                                                    const file = e.currentTarget.files[0]
                                                    formik.setFieldValue('image', file)
                                                    // Cập nhật label để hiển thị tên file
                                                    const label = e.currentTarget.nextElementSibling
                                                    label.textContent = file.name
                                                }}
                                            />
                                            <label className="custom-file-label">Choose file</label>
                                        </div>
                                        {formik.touched.image && formik.errors.image ? (
                                            <div className="text-danger mt-2">
                                                {formik.errors.image}
                                            </div>
                                        ) : null}
                                    </div>

                                    <div className="form-group">
                                        <label>Tên danh mục:</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="name"
                                            onChange={formik.handleChange}
                                            onBlur={formik.handleBlur}
                                            value={formik.values.name}
                                        />
                                        {formik.touched.name && formik.errors.name ? (
                                            <div className="text-danger mt-1">
                                                {formik.errors.name}
                                            </div>
                                        ) : null}
                                    </div>
                                    <div className="d-flex">
                                        <button
                                            type="submit"
                                            className="btn btn-primary"
                                            style={{ marginRight: 10 + 'px' }}
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
