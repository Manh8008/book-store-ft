'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { catalogApiRequestAdmin } from '@/apiRequests/category'
import { handleHttpError } from '@/lib/utils'
import { productApiRequestAdmin } from '@/apiRequests/product'
import { ToastError } from '@/components/ui/ToastError/ToastError'

export default function UpdateProduct({ params }) {
    const [error, setError] = useState('')
    const router = useRouter()
    const id = params.id
    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors }
    } = useForm()
    const [categories, setCategories] = useState([])
    const [product, setProduct] = useState(null)
    const [selectedImage, setSelectedImage] = useState(null)

    useEffect(() => {
        const getCategories = async () => {
            const result = await catalogApiRequestAdmin.getAllCatalog()
            setCategories(result.payload.data)
        }
        getCategories()

        const getProduct = async () => {
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getBookDetail/${id}`
            )
            const data = await res.json()
            setProduct(data.data)
            setValue('name', data.data.name)
            setValue('title', data.data.title)
            setValue('category_id', data.data.category_id)
            setValue('authorName', data.data.author.name)
            setValue('authorBio', data.data.author.bio)
            setValue('price', data.data.price)
            setValue('stock', data.data.stock)
            setValue('size', data.data.size)
            setValue('pages', data.data.pages)
            setValue('publisher', data.data.publisher)
            setValue('language', data.data.language)
            setValue('format', data.data.format)
            setValue('short_summary', data.data.short_summary)
            setValue('description', data.data.description)

            // Lưu URL ảnh cũ vào state
            setSelectedImage(data.data.images[0].url)
        }
        if (id) {
            getProduct()
        }
    }, [id, setValue])
    console.log(product)

    const handleImageChange = (event) => {
        const file = event.target.files[0]
        if (file) {
            setSelectedImage(file)
        }
    }

    const onSubmit = async (data) => {
        try {
            const formData = new FormData()
            formData.append('_method', 'PUT')

            // Thêm các giá trị khác ngoài ảnh
            for (const key in data) {
                if (key !== 'images') {
                    formData.append(key, data[key])
                }
            }

            // Nếu có ảnh mới (chọn từ input), thêm vào FormData
            if (selectedImage instanceof File) {
                formData.append('images', selectedImage) // Gửi file ảnh thực tế lên server
            } else if (product?.images) {
                // Nếu không có ảnh mới, gửi lại URL của ảnh cũ
                formData.append('images', product.images)
            }

            const result = await productApiRequestAdmin.updateBook(id, formData)
            if (result.status === 200) {
                router.push('/admin/product')
            }
        } catch (error) {
            handleHttpError(error, setError)
        }
    }

    return (
        <>
            <div id="content-page" className="content-page">
                <ToastError errorMessage={error} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="iq-card">
                                <div className="iq-card-header d-flex justify-content-between">
                                    <div className="iq-header-title">
                                        <h4 className="card-title">Sửa sách</h4>
                                    </div>
                                </div>
                                <div className="iq-card-body">
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                        <div className="form-group">
                                            <label>Tên sách:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                {...register('name', {
                                                    required: 'Tên sách là bắt buộc'
                                                })}
                                            />
                                            {errors.name && (
                                                <div className="text-danger mt-1">
                                                    {errors.name.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Danh mục sách:</label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect1"
                                                {...register('category_id', {
                                                    required: 'Tên danh mục là bắt buộc'
                                                })}
                                            >
                                                <option value="" disabled="">
                                                    Danh mục sách
                                                </option>
                                                {categories?.map((category) => (
                                                    <option key={category.id} value={category.id}>
                                                        {category.name}
                                                    </option>
                                                ))}
                                            </select>
                                            {errors.category_id && (
                                                <div className="text-danger mt-2">
                                                    {errors.category_id.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>tiêu đề:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="authorName"
                                                {...register('title', {
                                                    required: 'Tên tác giả là bắt buộc'
                                                })}
                                            />
                                            {errors.title && (
                                                <div className="text-danger mt-2">
                                                    {errors.title.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Tác giả sách:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="authorName"
                                                {...register('authorName', {
                                                    required: 'Tên tác giả là bắt buộc'
                                                })}
                                            />
                                            {errors.authorName && (
                                                <div className="text-danger mt-2">
                                                    {errors.authorName.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Tiểu sử tác giả:</label>
                                            <textarea
                                                type="text"
                                                className="form-control"
                                                name="authorBio"
                                                {...register('authorBio', {
                                                    required: 'Tiểu sử tác giả là bắt buộc'
                                                })}
                                            ></textarea>
                                            {errors.authorBio && (
                                                <div className="text-danger mt-2">
                                                    {errors.authorBio.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Hình ảnh:</label>
                                            <div className="custom-file">
                                                <input
                                                    type="file"
                                                    className="custom-file-input"
                                                    name="images"
                                                    {...register('images', {
                                                        required: 'Ảnh sản phẩm là bắt buộc'
                                                    })}
                                                    onChange={handleImageChange}
                                                />
                                                <label className="custom-file-label">
                                                    Choose file
                                                </label>
                                            </div>
                                            {errors.images && (
                                                <div className="text-danger mt-2">
                                                    {errors.images.message}
                                                </div>
                                            )}
                                            <div className="bg-secondary-subtle mb-3 mt-4 p-2">
                                                {selectedImage ? (
                                                    <img
                                                        src={
                                                            selectedImage instanceof File
                                                                ? URL.createObjectURL(selectedImage)
                                                                : selectedImage
                                                        }
                                                        className="img-fluid"
                                                        style={{
                                                            maxWidth: '300px',
                                                            height: 'auto'
                                                        }}
                                                        alt="Product Image"
                                                    />
                                                ) : product?.images[0].url ? (
                                                    <img
                                                        src={product.images[0].url}
                                                        className="img-fluid"
                                                        style={{
                                                            maxWidth: '300px',
                                                            height: 'auto'
                                                        }}
                                                        alt="Product Image"
                                                    />
                                                ) : (
                                                    <p>Không có ảnh để hiển thị</p>
                                                )}
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <label>Giá sách:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="price"
                                                {...register('price', {
                                                    required: 'Giá sách là bắt buộc'
                                                })}
                                            />
                                            {errors.price && (
                                                <div className="text-danger mt-2">
                                                    {errors.price.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Số lượng:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="stock"
                                                {...register('stock', {
                                                    required: 'Số lượng là bắt buộc'
                                                })}
                                            />
                                            {errors.stock && (
                                                <div className="text-danger mt-2">
                                                    {errors.stock.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Kích thước sách:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="size"
                                                {...register('size', {
                                                    required: 'Kích thước sách là bắt buộc'
                                                })}
                                            />
                                            {errors.size && (
                                                <div className="text-danger mt-2">
                                                    {errors.size.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Số trang:</label>
                                            <input
                                                type="number"
                                                className="form-control"
                                                name="pages"
                                                {...register('pages', {
                                                    required: 'Số trang là bắt buộc'
                                                })}
                                            />
                                            {errors.pages && (
                                                <div className="text-danger mt-2">
                                                    {errors.pages.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Nhà xuất bản:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="publisher"
                                                {...register('publisher', {
                                                    required: 'Nhà xuất bản là bắt buộc'
                                                })}
                                            />
                                            {errors.publisher && (
                                                <div className="text-danger mt-2">
                                                    {errors.publisher.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Ngôn ngữ:</label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect2"
                                                name="language"
                                                {...register('language', {
                                                    required: 'Ngôn ngữ là bắt buộc'
                                                })}
                                            >
                                                <option value="" disabled="">
                                                    Ngôn ngữ
                                                </option>
                                                <option>Tiếng Anh</option>
                                                <option>Tiếng Việt</option>
                                            </select>
                                            {errors.language && (
                                                <div className="text-danger mt-2">
                                                    {errors.language.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Loại bìa:</label>
                                            <select
                                                className="form-control"
                                                id="exampleFormControlSelect2"
                                                name="format"
                                                {...register('format', {
                                                    required: 'Loại bìa là bắt buộc'
                                                })}
                                            >
                                                <option value="" disabled="">
                                                    Loại bìa
                                                </option>
                                                <option>Mềm</option>
                                                <option>Cứng</option>
                                            </select>
                                            {errors.format && (
                                                <div className="text-danger mt-2">
                                                    {errors.format.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Mô tả ngắn:</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                name="short_summary"
                                                {...register('short_summary', {
                                                    required: 'Mô tả ngắn là bắt buộc'
                                                })}
                                            />
                                            {errors.short_summary && (
                                                <div className="text-danger mt-2">
                                                    {errors.short_summary.message}
                                                </div>
                                            )}
                                        </div>
                                        <div className="form-group">
                                            <label>Mô tả dài:</label>
                                            <textarea
                                                className="form-control"
                                                rows="4"
                                                name="description"
                                                {...register('description', {
                                                    required: 'Mô tả dài là bắt buộc'
                                                })}
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
                                            Sửa
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
