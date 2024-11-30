'use client'

import classNames from 'classnames/bind'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Subcategory } from '@/components/ui/subcategory'
import { Pagination } from '@/components/ui/pagination'
import { ProductCard } from '@/components/product-card'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError'
import { catalogApiRequest } from '@/apiRequests/category'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import styles from '../shop.module.scss'
import { FilterTop } from '@/components/ui/filter-top'
const cx = classNames.bind(styles)

export default function ProductByCategories({ params }) {
    const totalPages = 10
    const idCate = params.id
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [productByCate, setProductByCate] = useState([])
    const [filteredProducts, setFilteredProducts] = useState([])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(`Chuyển sang trang: ${pageNumber}`)
    }

    const fetchProductByCate = async () => {
        setLoading(true)
        setError(null)
        try {
            const result = await productApiRequest.getBookByCatalog(idCate)
            setProductByCate(result.payload.data)
            setFilteredProducts(result.payload.data)
        } catch (err) {
            handleHttpError(err, setError)
        } finally {
            setLoading(false)
        }
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

    const filterByPrice = (minPrice, maxPrice) => {
        if (!minPrice || !maxPrice) return setFilteredProducts(productByCate)
        const filtered = productByCate.filter((product) => {
            console.log(product)
            return product.price >= minPrice && product.price <= maxPrice
        })

        setFilteredProducts(filtered)
    }

    const sortBooksByPrice = (order) => {
        let sortedProducts = [...filteredProducts]

        if (order === 'asc') {
            sortedProducts.sort((a, b) => a.price - b.price)
        } else if (order === 'desc') {
            sortedProducts.sort((a, b) => b.price - a.price)
        } else if (order === 'newest') {
            sortedProducts.sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        } else if (order === 'bestSeller') {
            sortedProducts.sort((a, b) => b.sales_count - a.sales_count)
        }

        setFilteredProducts(sortedProducts)
    }

    useEffect(() => {
        fetchCategories()
        fetchProductByCate()
    }, [])

    if (loading) return <LoadingSkeleton />

    return (
        <>
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
                    <div className={cx('productByCate')}>
                        <ProductCard data={filteredProducts} />
                    </div>
                </div>

                {filteredProducts && filteredProducts.length > 20 && (
                    <div className={cx('pagination')}>
                        <Pagination
                            totalPages={totalPages}
                            currentPage={currentPage}
                            onPageChange={handlePageChange}
                        />
                    </div>
                )}
            </div>
        </>
    )
}
