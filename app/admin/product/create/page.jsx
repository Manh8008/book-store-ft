"use client"

import { catalogApiRequestAdmin } from '@/apiRequests/category';
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { z } from 'zod'

export default function CreateProduct() {
    const productFormSchema = z.object({
        name: z.string().min(1, { message: "Tên sách là bắt buộc" }),
        category: z.string().min(1, { message: "Danh mục sách là bắt buộc" }),
        author: z.string().min(1, { message: "Tác giả sách là bắt buộc" }),
        images: z
            .custom((v) => v instanceof File, { message: "Hình ảnh phải là một file hợp lệ" })
            .refine((v) => v, { message: "Hình ảnh là bắt buộc" }),
        price: z.string().min(1, { message: "Giá sách là bắt buộc" }),
        stock: z.string().min(1, { message: "Số lượng là bắt buộc" }),
        size: z.string().min(1, { message: "Kích thước sách là bắt buộc" }),
        pages: z.string().min(1, { message: "Số trang là bắt buộc" }),
        publisher: z.string().min(1, { message: "Nhà xuất bản là bắt buộc" }),
        language: z.string().min(1, { message: "Ngôn ngữ là bắt buộc" }),
        format: z.string().min(1, { message: "Loại bìa là bắt buộc" }),
        short_summary: z.string().min(1, { message: "Mô tả ngắn là bắt buộc" }),
        description: z.string().min(1, { message: "Mô tả dài là bắt buộc" }),
    });

    const [categories, setCategories] = useState([]);
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
    });


    const onSubmit = (data) => {
        console.log("Form data submitted:", data);
    };




    return (
        <>
            <div id="content-page" class="content-page">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="iq-card">
                                <div class="iq-card-header d-flex justify-content-between">
                                    <div class="iq-header-title">
                                        <h4 class="card-title">Thêm sách</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <form onSubmit={handleSubmit(onSubmit)} >
                                        <div class="form-group">
                                            <label>Tên sách:</label>
                                            <input type="text" class="form-control" name="name"
                                                {...register("name")}
                                            />
                                            {errors.name && <div className="text-danger mt-2">{errors.name.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Danh mục sách:</label>
                                            <select class="form-control" id="exampleFormControlSelect1" name="category"
                                                {...register("category")}
                                            >
                                                <option selected="" disabled="">Danh mục sách</option>
                                                {categories.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.category && <div className="text-danger mt-2">{errors.category.message}</div>}
                                        </div>
                                        {/* <div class="form-group">
                                            <label>Tác giả sách:</label>
                                            <select class="form-control" id="exampleFormControlSelect2">
                                                <option selected="" disabled="">Tác giả sách</option>
                                                <option>Jhone Steben</option>
                                                <option>John Klok</option>
                                                <option>Ichae Semos</option>
                                                <option>Jules Boutin</option>
                                                <option>Kusti Franti</option>
                                                <option>David King</option>
                                                <option>Henry Jurk</option>
                                                <option>Attilio Marzi</option>
                                                <option>Argele Intili</option>
                                                <option>Attilio Marzi</option>
                                            </select>
                                        </div> */}
                                        <div class="form-group">
                                            <label>Tác giả sách:</label>
                                            <input type="text" class="form-control" name="author"
                                                {...register("author")}
                                            />
                                            {errors.author && <div className="text-danger mt-2">{errors.author.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Hình ảnh:</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" name="images"
                                                    {...register("images")}
                                                />
                                                <label class="custom-file-label">Choose file</label>
                                                {errors.images && <div className="text-danger mt-2">{errors.images.message}</div>}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Giá sách:</label>
                                            <input type="text" class="form-control" name="price"
                                                {...register("price")}
                                            />
                                            {errors.price && <div className="text-danger mt-2">{errors.price.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Số lượng:</label>
                                            <input type="text" class="form-control" name="stock"
                                                {...register("stock")}
                                            />
                                            {errors.stock && <div className="text-danger mt-2">{errors.stock.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Kích thước sách:</label>
                                            <input type="text" class="form-control" name="size"
                                                {...register("size")}
                                            />
                                            {errors.size && <div className="text-danger mt-2">{errors.size.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Số trang:</label>
                                            <input type="text" class="form-control" name="pages"
                                                {...register("pages")}
                                            />
                                            {errors.pages && <div className="text-danger mt-2">{errors.pages.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Nhà xuất bản:</label>
                                            <input type="text" class="form-control" name="publisher"
                                                {...register("publisher")}
                                            />
                                            {errors.publisher && <div className="text-danger mt-2">{errors.publisher.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Ngôn ngữ:</label>
                                            <select class="form-control" id="exampleFormControlSelect2" name="language" {...register("language")}>
                                                <option selected="" disabled="">Ngôn ngữ</option>
                                                <option>Tiếng Anh</option>
                                                <option>Tiếng Việt</option>
                                            </select>
                                            {errors.language && <div className="text-danger mt-2">{errors.language.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Loại bìa:</label>
                                            <select class="form-control" id="exampleFormControlSelect2" name="format" {...register("format")}>
                                                <option selected="" disabled="">Loại bìa</option>
                                                <option>Mềm</option>
                                                <option>Cứng</option>
                                            </select>
                                        </div>
                                        <div class="form-group">
                                            <label>Mô tả ngắn:</label>
                                            <input type="text" class="form-control" name="short_summary" {...register("short_summary")} />
                                        </div>
                                        <div class="form-group">
                                            <label>Mô tả dài:</label>
                                            <textarea class="form-control" rows="4" name="description" {...register("description")}></textarea>
                                        </div>
                                        <button type="submit" class="btn btn-primary" style={{ marginRight: '10px' }}>Thêm</button>
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