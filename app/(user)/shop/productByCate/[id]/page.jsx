'use client'

import classNames from 'classnames/bind'
import { FilterBooks } from '@/components/ui/filter-books'
import { Subcategory } from '@/components/ui/subcategory'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Pagination } from '@/components/ui/pagination'
import { ProductCard } from '@/components/product-card'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError'
import { catalogApiRequest } from '@/apiRequests/category'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import styles from '../../shop.module.scss'
const cx = classNames.bind(styles)

export default function ProductByCategories({ params }) {
    const totalPages = 10
    const idCate = params.id
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])
    const [productByCate, setProductByCate] = useState([])

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
        }
    }

    useEffect(() => {
        fetchCategories()
    }, [])

    useEffect(() => {
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

                    <FilterBooks />

                    <div className={cx('productByCate')}>
                        <ProductCard data={productByCate} />
                    </div>
                </div>

                <div className={cx('pagination')}>
                    <Pagination
                        totalPages={totalPages}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div>
        </>
    )
}
