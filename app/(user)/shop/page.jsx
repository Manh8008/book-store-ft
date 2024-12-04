'use client'

import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import Image from 'next/image'

import { Beardcrumb } from '@/components/ui/breadcrumb'
import { Subcategory } from '@/components/ui/subcategory'
import { ProductList } from '@/components/product-list'
import { catalogApiRequest } from '@/apiRequests/category'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

import styles from './shop.module.scss'
import { FilterTop } from '@/components/ui/filter-top'
const cx = classNames.bind(styles)

const BookCollection = () => {
    const [books, setBooks] = useState([])
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10 // Số sản phẩm mỗi trang

    // Tính toán các sản phẩm hiển thị trên trang hiện tại
    const indexOfLastItem = currentPage * itemsPerPage
    const indexOfFirstItem = indexOfLastItem - itemsPerPage
    const currentItems = books.slice(indexOfFirstItem, indexOfLastItem)

    // Tạo danh sách các trang
    const totalPages = Math.ceil(books.length / itemsPerPage)
    const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }


    const fetchCategories = async () => {
        setLoading(true)
        setError(null)

        try {
            const result = await catalogApiRequest.getAllCatalog()
            setCategories(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    const fetchBooks = async () => {
        setLoading(true)
        setError(null)
        try {
            const result = await productApiRequest.getAllBooks()
            setBooks(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    const sortBooksByPrice = async (sortType) => {
        setLoading(true)
        setError(null)

        try {
            let result
            if (sortType === 'asc') {
                result = await productApiRequest.getBooksOrderPriceAsc()
            } else if (sortType === 'desc') {
                result = await productApiRequest.getBooksOrderPriceDesc()
            } else if (sortType === 'bestSeller') {
                result = await productApiRequest.getBooksBestSeller()
            } else if (sortType === 'newest') {
                result = await productApiRequest.getNewBook()
            } else {
                result = await productApiRequest.getAllBooks()
            }

            setBooks(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    const filterByPrice = async (minPrice, maxPrice) => {
        setLoading(true)
        setError(null)
        try {
            const validMinPrice = Number(minPrice)
            const validMaxPrice = Number(maxPrice)

            if (isNaN(validMinPrice) || isNaN(validMaxPrice)) {
                throw new Error('Giá phải là số hợp lệ')
            }

            const result = await productApiRequest.filterByPrice(validMinPrice, validMaxPrice)
            setBooks(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
        fetchBooks()
    }, [])

    if (loading) return <LoadingSkeleton />
    return (
        <div className={cx('wrapper')}>
            <ToastError errorMessage={error} />
            <div className={cx('wrapper-content')}>
                <Beardcrumb />
                <div className={cx('banner')}>
                    <Image
                        width={1349}
                        height={400}
                        src={'/img/sachkinhte-taichinh.png'}
                        alt="sách kinh tế"
                    />
                </div>

                <Subcategory data={categories} />
                <FilterTop onPriceChange={filterByPrice} onPriceSort={sortBooksByPrice} />

                <ProductList title="Tất cả sản phẩm" data={currentItems} />
            </div>

            {/* Phân trang */}
            <nav className={cx('pagination-container')}>
                <ul className={cx('pagination')}>
                    <li className={cx('page-item', { disabled: currentPage === 1 })}>
                        <button
                            className={cx('page-link')}
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                        >
                            &laquo;
                        </button>
                    </li>
                    {pageNumbers.map((page) => (
                        <li
                            key={page}
                            className={cx('page-item', { active: currentPage === page })}
                        >
                            <button
                                className={cx('page-link')}
                                onClick={() => handlePageChange(page)}
                            >
                                {page}
                            </button>
                        </li>
                    ))}
                    <li className={cx('page-item', { disabled: currentPage === totalPages })}>
                        <button
                            className={cx('page-link')}
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                        >
                            &raquo;
                        </button>
                    </li>
                </ul>
            </nav>


        </div>
    )
}

export default BookCollection
