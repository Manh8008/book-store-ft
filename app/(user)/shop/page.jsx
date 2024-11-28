'use client'

import classNames from 'classnames/bind'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Beardcrumb } from '@/components/ui/breadcrumb'
import { Subcategory } from '@/components/ui/subcategory'
import { FilterBooks } from '@/components/ui/filter-books'
import { ProductList } from '@/components/product-list'
import { Pagination } from '@/components/ui/pagination'
import { catalogApiRequest } from '@/apiRequests/category'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

import styles from './shop.module.scss'
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

    const filterByPrice = async (minPrice, maxPrice) => {
        setLoading(true)
        setError(null)
        try {
            // const validMinPrice = Number(minPrice)
            // const validMaxPrice = Number(maxPrice)

            // if (isNaN(validMinPrice) || isNaN(validMaxPrice)) {
            //     throw new Error('Giá phải là số hợp lệ')
            // }

            const result = await productApiRequest.filterByPrice(400000, 10000000)

            console.log(result)
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

    useEffect(() => {
        filterByPrice(400000, 10000000)
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

                {/* <FilterBooks onPriceChange={filterByPrice} /> */}

                <ProductList title="Tất cả sản phẩm" data={books} />
            </div>

            <div className={cx('pagination')}>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    )
}

export default BookCollection
