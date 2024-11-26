"use client"

import { catalogApiRequestAdmin } from "@/apiRequests/category";
import { productApiRequest, productApiRequestAdmin } from "@/apiRequests/product";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export default function UpdateProduct({ params }) {
    const router = useRouter();
    const id = params.id;
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState(null);

    useEffect(() => {
        // Khai báo hàm lấy danh mục
        const getCategories = async () => {
            const result = await catalogApiRequestAdmin.getAllCatalog()
            // console.log(result)
            setCategories(result.payload.data)
        };
        getCategories();

        // Lấy dữ liệu chi tiết sản phẩm cần sửa
        const getProduct = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getBookDetail/${id}`);
            const data = await res.json();
            setProduct(data.data);
            // Dữ liệu chi tiết sản phẩm show ra form
            // Đặt giá trị ban đầu cho form
            // console.log(data.data)
            setValue("name", data.data.name);
            setValue("category_id", data.data.category_id);
            setValue("authorName", data.data.author.name);
            setValue("authorBio", data.data.author.bio);
            setValue("price", data.data.price);
            setValue("stock", data.data.stock);
            setValue("size", data.data.size);
            setValue("pages", data.data.pages);
            setValue("publisher", data.data.publisher);
            setValue("language", data.data.language);
            setValue("format", data.data.format);
            setValue("short_summary", data.data.short_summary);
            setValue("description", data.data.description);

        };
        if (id) {
            getProduct();
        }
    }, [id, setValue]);

    const onSubmit = async (data) => {
        const formData = new FormData();
        for (const key in data) {
            formData.append(key, data[key]);
        }
        if (data.images[0]) {
            formData.append('images', data.images[0]);
        }

        const res = await productApiRequestAdmin.updateProduct(id, formData)
        const result = await res.json();
        if (result.error) {
            console.error(result.error);
        } else {
            router.push('/admin/product');
        }
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
                                        <h4 class="card-title">Sửa sách</h4>
                                    </div>
                                </div>
                                <div class="iq-card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div class="form-group">
                                            <label>Tên sách:</label>
                                            <input type="text" class="form-control"
                                                {...register('name', { required: 'Tên sách là bắt buộc' })}
                                            />
                                            {errors.name && <div className="text-danger mt-1">{errors.name.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Danh mục sách:</label>
                                            <select class="form-control" id="exampleFormControlSelect1" {...register('category_id', { required: 'Tên danh mục là bắt buộc' })}>
                                                <option value="" disabled="">Danh mục sách</option>
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
                                                {...register('authorName', { required: 'Tên tác giả là bắt buộc' })}
                                            />
                                            {errors.authorName && <div className="text-danger mt-2">{errors.authorName.message}</div>}
                                        </div>
                                        <div className="form-group">
                                            <label>Tiểu sử tác giả:</label>
                                            <textarea type="text" className="form-control" name="authorBio"
                                                {...register('authorBio', { required: 'Tiểu sử tác giả là bắt buộc' })}
                                            ></textarea>
                                            {errors.authorBio && <div className="text-danger mt-2">{errors.authorBio.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Hình ảnh:</label>
                                            <div class="custom-file">
                                                <input type="file" class="custom-file-input" name="images"
                                                    {...register('images', { required: 'Ảnh sản phẩm là bắt buộc' })}
                                                />
                                                <label class="custom-file-label">Choose file</label>
                                                {errors.images && <div className="text-danger mt-2">{errors.images.message}</div>}
                                                <div className="bg-secondary-subtle mb-3 p-2 text-center">
                                                    {product && product.images && product.images.length > 0 ? (
                                                        <img
                                                            src={`${process.env.NEXT_PUBLIC_API_ENDPOINT}/storage/${product.images[0]?.url}`}
                                                            className="w-50"
                                                            alt="Product Image"
                                                        />
                                                    ) : (
                                                        <p>Không có ảnh để hiển thị</p>
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label>Giá sách:</label>
                                            <input type="number" class="form-control" name="price"
                                                {...register('price', { required: 'Giá sách là bắt buộc' })}
                                            />
                                            {errors.price && <div className="text-danger mt-2">{errors.price.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Số lượng:</label>
                                            <input type="number" class="form-control" name="stock"
                                                {...register('stock', { required: 'Số lượng là bắt buộc' })}
                                            />
                                            {errors.stock && <div className="text-danger mt-2">{errors.stock.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Kích thước sách:</label>
                                            <input type="text" class="form-control" name="size"
                                                {...register('size', { required: 'Kích thước sách là bắt buộc' })}
                                            />
                                            {errors.size && <div className="text-danger mt-2">{errors.size.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Số trang:</label>
                                            <input type="number" class="form-control" name="pages"
                                                {...register('pages', { required: 'Số trang là bắt buộc' })}
                                            />
                                            {errors.pages && <div className="text-danger mt-2">{errors.pages.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Nhà xuất bản:</label>
                                            <input type="text" class="form-control" name="publisher"
                                                {...register('publisher', { required: 'Nhà xuất bản là bắt buộc' })}
                                            />
                                            {errors.publisher && <div className="text-danger mt-2">{errors.publisher.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Ngôn ngữ:</label>
                                            <select class="form-control" id="exampleFormControlSelect2" name="language"
                                                {...register('language', { required: 'Ngôn ngữ là bắt buộc' })}
                                            >
                                                <option value="" disabled="">Ngôn ngữ</option>
                                                <option>Tiếng Anh</option>
                                                <option>Tiếng Việt</option>
                                            </select>
                                            {errors.language && <div className="text-danger mt-2">{errors.language.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Loại bìa:</label>
                                            <select class="form-control" id="exampleFormControlSelect2" name="format"
                                                {...register('format', { required: 'Loại bìa là bắt buộc' })}
                                            >
                                                <option value="" disabled="">Loại bìa</option>
                                                <option>Mềm</option>
                                                <option>Cứng</option>
                                            </select>
                                            {errors.format && <div className="text-danger mt-2">{errors.format.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Mô tả ngắn:</label>
                                            <input type="text" class="form-control" name="short_summary"
                                                {...register('short_summary', { required: 'Mô tả ngắn là bắt buộc' })}
                                            />
                                            {errors.short_summary && <div className="text-danger mt-2">{errors.short_summary.message}</div>}
                                        </div>
                                        <div class="form-group">
                                            <label>Mô tả dài:</label>
                                            <textarea class="form-control" rows="4" name="description"
                                                {...register('description', { required: 'Mô tả dài là bắt buộc' })}
                                            >
                                            </textarea>
                                            {errors.description && <div className="text-danger mt-2">{errors.description.message}</div>}
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