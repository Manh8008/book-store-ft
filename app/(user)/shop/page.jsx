'use client'

import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import Image from 'next/image'

import { Beardcrumb } from '@/components/ui/breadcrumb'
import { Subcategory } from '@/components/ui/subcategory'
import { ProductList } from '@/components/product-list'
import { Pagination } from '@/components/ui/pagination'
import { catalogApiRequest } from '@/apiRequests/category'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

import styles from './shop.module.scss'
import { FilterTop } from '@/components/ui/filter-top'
const cx = classNames.bind(styles)

const BookCollection = () => {
    const totalPages = 10
    const [books, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(`Chuyển sang trang: ${pageNumber}`)
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
                result = await productApiRequest.getBooksBestSeller()
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

                <ProductList title="Tất cả sản phẩm" data={books} />
            </div>

            {books.length > 20 && (
                <div className={cx('pagination')}>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </div>
    )
}

export default BookCollection
