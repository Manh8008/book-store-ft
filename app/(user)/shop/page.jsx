'use client'

import { useEffect, useState, useMemo, useCallback } from 'react'
import classNames from 'classnames/bind'
import Image from 'next/image'
import debounce from 'lodash/debounce'

import { Beardcrumb } from '@/components/ui/breadcrumb'
import { Subcategory } from '@/components/ui/subcategory'
import { ProductList } from '@/components/product-list'
import { catalogApiRequest } from '@/apiRequests/category'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

import styles from './shop.module.scss'
import { FilterTop } from '@/components/ui/filter-top'
const cx = classNames.bind(styles)

const BookCollection = () => {
    const [books, setBooks] = useState([])
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)

    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 10

    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoadingAction, setIsLoadingAction] = useState(false)

    // Tính toán các sản phẩm hiển thị trên trang hiện tại
    const { currentItems, totalPages, pageNumbers } = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage
        const indexOfFirstItem = indexOfLastItem - itemsPerPage
        const currentItems = books.slice(indexOfFirstItem, indexOfLastItem)
        const totalPages = Math.ceil(books.length / itemsPerPage)
        const pageNumbers = [...Array(totalPages).keys()].map((num) => num + 1)

        return { currentItems, totalPages, pageNumbers }
    }, [books, currentPage, itemsPerPage])

    // Thêm useCallback cho các hàm xử lý
    const handlePageChange = useCallback((pageNumber) => {
        setCurrentPage(pageNumber)
    }, [])

    const sortBooksByPrice = useCallback(async (sortType) => {
        setIsLoadingAction(true)
        setError(null)
        try {
            const result = await (async () => {
                switch (sortType) {
                    case 'asc':
                        return productApiRequest.getBooksOrderPriceAsc()
                    case 'desc':
                        return productApiRequest.getBooksOrderPriceDesc()
                    case 'bestSeller':
                        return productApiRequest.getBooksBestSeller()
                    case 'newest':
                        return productApiRequest.getNewBook()
                    default:
                        return productApiRequest.getAllBooks()
                }
            })()
            setBooks(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setIsLoadingAction(false)
        }
    }, [])

    const debouncedFilterByPrice = useCallback(
        debounce(async (minPrice, maxPrice) => {
            setIsLoadingAction(true)
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
                setIsLoadingAction(false)
            }
        }, 500),
        []
    )

    useEffect(() => {
        const fetchData = async () => {
            setIsLoadingInitial(true)
            setError(null)
            try {
                const [categoriesResult, booksResult] = await Promise.all([
                    catalogApiRequest.getAllCatalog(),
                    productApiRequest.getAllBooks()
                ])
                setCategories(categoriesResult.payload.data)
                setBooks(booksResult.payload.data)
            } catch (error) {
                handleHttpError(error, setError)
            } finally {
                setIsLoadingInitial(false)
            }
        }
        fetchData()
    }, [])

    return (
        <div className={cx('wrapper')}>
            {error && (
                <div className={cx('error-message')}>
                    <p>{error}</p>
                    <button onClick={() => fetchData()}>Thử lại</button>
                </div>
            )}

            <div className={cx('wrapper-content')}>
                <Beardcrumb />
                {isLoadingInitial ? (
                    <LoadingSkeleton />
                ) : (
                    <>
                        <div className={cx('banner')}>
                            <Image
                                width={1280}
                                height={400}
                                src={'/img/banner-doc-sach-vi-tuong-lai-amo-vietnam-2018.jpg'}
                                alt="sách kinh tế"
                                priority
                            />
                        </div>
                        <Subcategory data={categories} />
                        <FilterTop
                            onPriceChange={debouncedFilterByPrice}
                            onPriceSort={sortBooksByPrice}
                            isLoading={isLoadingAction}
                        />
                        <ProductList
                            title="Tất cả sản phẩm"
                            seeMore={''}
                            data={currentItems}
                            isLoading={isLoadingAction}
                        />
                    </>
                )}
            </div>

            {!isLoadingInitial && !isLoadingAction && books.length > 0 && (
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
            )}
        </div>
    )
}

export default BookCollection
