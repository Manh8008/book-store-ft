'use client'
import { useEffect, useState, useMemo, useCallback } from 'react'
import classNames from 'classnames/bind'
import Image from 'next/image'

import { Subcategory } from '@/components/ui/subcategory'
import { Pagination } from '@/components/ui/pagination'
import { ProductCard } from '@/components/product-card'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { catalogApiRequest } from '@/apiRequests/category'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import styles from '../shop.module.scss'
import { FilterTop } from '@/components/ui/filter-top'
const cx = classNames.bind(styles)

export default function ProductByCategories({ params }) {
    const idCate = params.id
    const [isLoadingInitial, setIsLoadingInitial] = useState(true)
    const [isLoadingAction, setIsLoadingAction] = useState(false)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [productByCate, setProductByCate] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const itemsPerPage = 20
    const { currentItems, totalPages } = useMemo(() => {
        const indexOfLastItem = currentPage * itemsPerPage
        const indexOfFirstItem = indexOfLastItem - itemsPerPage
        const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem)
        const totalPages = Math.ceil(filteredProducts.length / itemsPerPage)

        return { currentItems, totalPages }
    }, [filteredProducts, currentPage, itemsPerPage])

    const handlePageChange = useCallback((pageNumber) => {
        setCurrentPage(pageNumber)
    }, [])

    const fetchData = useCallback(async () => {
        setIsLoadingInitial(true)
        setError(null)
        try {
            const [categoriesResult, productsResult] = await Promise.all([
                catalogApiRequest.getAllCatalog(),
                productApiRequest.getBookByCatalog(idCate)
            ])
            setCategories(categoriesResult.payload.data)
            setProductByCate(productsResult.payload.data)
            setFilteredProducts(productsResult.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setIsLoadingInitial(false)
        }
    }, [idCate])

    const filterByPrice = useCallback(
        (minPrice, maxPrice) => {
            setIsLoadingAction(true)
            try {
                if (!minPrice || !maxPrice) {
                    setFilteredProducts(productByCate)
                    return
                }
                const filtered = productByCate.filter(
                    (product) => product.price >= minPrice && product.price <= maxPrice
                )
                setFilteredProducts(filtered)
            } catch (error) {
                handleHttpError(error, setError)
            } finally {
                setIsLoadingAction(false)
            }
        },
        [productByCate]
    )

    const sortBooksByPrice = useCallback(
        (order) => {
            setIsLoadingAction(true)
            try {
                let sortedProducts = [...filteredProducts]
                switch (order) {
                    case 'asc':
                        sortedProducts.sort((a, b) => a.price - b.price)
                        break
                    case 'desc':
                        sortedProducts.sort((a, b) => b.price - a.price)
                        break
                    case 'newest':
                        sortedProducts.sort(
                            (a, b) => new Date(b.created_at) - new Date(a.created_at)
                        )
                        break
                    case 'bestSeller':
                        sortedProducts.sort((a, b) => b.sales_count - a.sales_count)
                        break
                    default:
                        // Trả về thứ tự mặc định
                        sortedProducts = [...productByCate]
                }
                setFilteredProducts(sortedProducts)
            } catch (error) {
                handleHttpError(error, setError)
            } finally {
                setIsLoadingAction(false)
            }
        },
        [filteredProducts, productByCate]
    )

    useEffect(() => {
        fetchData()
    }, [fetchData])

    if (isLoadingInitial) return <LoadingSkeleton />

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-content')}>
                <Beardcrumb />
                <div className={cx('banner')}>
                    <Image
                        width={1280}
                        height={400}
                        src={'/img/sachkinhte-taichinh.png'}
                        alt="sách kinh tế"
                        priority
                    />
                </div>
                <Subcategory data={categories} />
                <FilterTop
                    onPriceChange={filterByPrice}
                    onPriceSort={sortBooksByPrice}
                    isLoading={isLoadingAction}
                />
                <div className={cx('productByCate')}>
                    <ProductCard data={currentItems} />
                </div>
            </div>

            {!isLoadingInitial && !isLoadingAction && filteredProducts.length > itemsPerPage && (
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
