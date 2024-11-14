"use client"

import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import * as Yup from "Yup";


export default function AddCategories() {
    const validationSchema = Yup.object({
        name: Yup.string().required("Nhập tên danh mục là bắt buộc"),
        image: Yup.string().required("Chọn ảnh danh mục là bắt buộc "),
    });

    const [formValue, setFormValue] = useState(null);
    const router = useRouter();

    const formik = useFormik({
        initialValues: {
            name: "",
            image: null,
        },
        validationSchema,
        onSubmit: async (value) => {
            setFormValue(value);
            // console.log(formValue);
            const formData = new FormData();
            formData.append('name', value.name);
            formData.append('image', value.image);
            const res = await fetch((`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/storeCatalog`), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: formData,
            });
            const result = await res.json();
            console.log(result);
            if (result.error) {
                console.error(result.error);
            } else {
                router.push('/admin/categories');
            }
        },
    });




    return (
        <>
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
                                    <form onSubmit={formik.handleSubmit} method="POST" encType="multipart/form-data">
                                        <div className="form-group">
                                            <label>Ảnh danh mục:</label>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" accept="image/png, image/jpeg" name="image"
                                                    onBlur={formik.handleBlur}
                                                    onChange={(e) => formik.setFieldValue("image", e.currentTarget.files[0])}
                                                />
                                                <label className="custom-file-label">Choose file</label>
                                            </div>
                                            {formik.touched.image && formik.errors.image ? (<div className="text-danger mt-2">{formik.errors.image}</div>) : null}
                                        </div>

                                        <div className="form-group">
                                            <label>Tên danh mục:</label>
                                            <input type="text" className="form-control" name="name"
                                                onChange={formik.handleChange}
                                                onBlur={formik.handleBlur}
                                                value={formik.values.name}
                                            />
                                            {formik.touched.name && formik.errors.name ? (<div className="text-danger mt-1">{formik.errors.name}</div>) : null}
                                        </div>
                                        <div className="d-flex">
                                            <button type="submit" className="btn btn-primary" style={{ marginRight: 10 + "px" }}>Thêm</button>
                                            <button type="reset" className="btn btn-danger">Trở lại</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}