"use client"

import { catalogApiRequestAdmin } from '@/apiRequests/category';
import { productApiRequestAdmin } from '@/apiRequests/product';
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod'
import { useRouter } from 'next/navigation'


export default function CreateProduct() {
    const productFormSchema = z.object({
        name: z.string().min(1, { message: "Tên sách là bắt buộc" }),
        category_id: z.string().min(1, { message: "Danh mục sách là bắt buộc" }),
        authorName: z.string().min(1, { message: "Tác giả sách là bắt buộc" }),
        authorBio: z.string().min(1, { message: "Tiểu sử tác giả là bắt buộc" }),
        images: z
            .any()
            .refine((file) => file?.length > 0, { message: "Hình ảnh là bắt buộc" })
            .refine((file) => file[0] instanceof File, { message: "Hình ảnh phải là một file hợp lệ" }),
        price: z.string().min(1, { message: "Giá sách là bắt buộc" }),
        stock: z.string().min(1, { message: "Số lượng là bắt buộc" }),
        size: z.string().min(1, { message: "Kích thước sách là bắt buộc" }),
        pages: z.string().min(1, { message: "Số trang là bắt buộc" }),
        publisher: z.string().min(1, { message: "Nhà xuất bản là bắt buộc" }),
        language: z.string().min(1, { message: "Ngôn ngữ sách là bắt buộc" }),
        format: z.string().min(1, { message: "Loại bìa sách là bắt buộc" }),
        short_summary: z.string().min(1, { message: "Mô tả ngắn là bắt buộc" }),
        description: z.string().min(1, { message: "Mô tả dài là bắt buộc" }),
    });

    const [categories, setCategories] = useState([]);
    const router = useRouter()

    const fetchCategories = async () => {
        const result = await catalogApiRequestAdmin.getAllCatalog()
        // console.log(result)
        setCategories(result.payload.data)
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(productFormSchema),
        defaultValues: {
            name: "",
            category_id: "",
            authorName: "",
            authorBio: "",
            price: "",
            stock: "",
            size: "",
            pages: "",
            publisher: "",
            language: "",
            format: "",
            short_summary: "",
            description: "",
        },
    });


    const onSubmit = async (data) => {
        const formData = new FormData()
        formData.append("name", data.name);
        formData.append("category_id", data.category_id);
        formData.append("authorName", data.authorName);
        formData.append("authorBio", data.authorBio);
        formData.append("price", data.price);
        formData.append("stock", data.stock);
        formData.append("size", data.size);
        formData.append("pages", data.pages);
        formData.append("publisher", data.publisher);
        formData.append("language", data.language);
        formData.append("format", data.format);
        formData.append("short_summary", data.short_summary);
        formData.append("description", data.description);
        if (data.images && data.images[0]) {
            formData.append("images", data.images[0]);
        }
        const result = await productApiRequestAdmin.addProduct(formData)

        if (result.status === 200) {
            router.push('/admin/product')
        }
    };




    return (
        <>
            <div id="content-page" className="content-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Thêm sách</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div className="form-group">
                                            <label>Tên sách:</label>
                                            <input type="text" className="form-control" name="name"
                                                {...register("name")}
                                            />
                                            {errors.name && <div className="text-danger mt-2">{errors.name.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Danh mục sách:</label>
                                            <select className="form-control" id="exampleFormControlSelect1" name="category_id"
                                                {...register("category_id")}
                                            >
                                                <option value="" disabled>Danh mục sách</option>
                                                {categories?.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.category_id && <div className="text-danger mt-2">{errors.category_id.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Tác giả sách:</label>
                                            <input type="text" className="form-control" name="authorName"
                                                {...register("authorName")}
                                            />
                                            {errors.authorName && <div className="text-danger mt-2">{errors.authorName.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Tiểu sử tác giả:</label>
                                            <textarea type="text" className="form-control" name="authorBio"
                                                {...register("authorBio")}
                                            ></textarea>
                                            {errors.authorBio && <div className="text-danger mt-2">{errors.authorBio.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Hình ảnh:</label>
                                            <div className="custom-file">
                                                <input type="file" className="custom-file-input" name="images"
                                                    {...register("images")}
                                                />
                                                <label className="custom-file-label">Choose file</label>
                                                {errors.images && <div className="text-danger mt-2">{errors.images.message}</div>}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Giá sách:</label>
                                            <input type="text" className="form-control" name="price"
                                                {...register("price")}
                                            />
                                            {errors.price && <div className="text-danger mt-2">{errors.price.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Số lượng:</label>
                                            <input type="text" className="form-control" name="stock"
                                                {...register("stock")}
                                            />
                                            {errors.stock && <div className="text-danger mt-2">{errors.stock.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Kích thước sách:</label>
                                            <input type="text" className="form-control" name="size"
                                                {...register("size")}
                                            />
                                            {errors.size && <div className="text-danger mt-2">{errors.size.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Số trang:</label>
                                            <input type="text" className="form-control" name="pages"
                                                {...register("pages")}
                                            />
                                            {errors.pages && <div className="text-danger mt-2">{errors.pages.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Nhà xuất bản:</label>
                                            <input type="text" className="form-control" name="publisher"
                                                {...register("publisher")}
                                            />
                                            {errors.publisher && <div className="text-danger mt-2">{errors.publisher.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Ngôn ngữ:</label>
                                            <select className="form-control" id="exampleFormControlSelect2" name="language"
                                                {...register("language")}>
                                                <option value="" disabled="">Ngôn ngữ</option>
                                                <option>Tiếng Anh</option>
                                                <option>Tiếng Việt</option>
                                            </select>
                                            {errors.language && <div className="text-danger mt-2">{errors.language.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Loại bìa:</label>
                                            <select className="form-control" id="exampleFormControlSelect2" name="format"
                                                {...register("format")}>
                                                <option value="" disabled="">Loại bìa</option>
                                                <option>Mềm</option>
                                                <option>Cứng</option>
                                            </select>
                                            {errors.format && <div className="text-danger mt-2">{errors.format.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Mô tả ngắn:</label>
                                            <input type="text" className="form-control" name="short_summary" {...register("short_summary")} />
                                            {errors.short_summary && <div className="text-danger mt-2">{errors.short_summary.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Mô tả dài:</label>
                                            <textarea className="form-control" rows="4" name="description" {...register("description")}></textarea>
                                            {errors.description && <div className="text-danger mt-2">{errors.description.message}</div>}
                                        </div>
                                        <button type="submit" className="btn btn-primary" style={{ marginRight: '10px' }}>Thêm</button>
                                        <button type="reset" className="btn btn-danger">Trở lại</button>
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