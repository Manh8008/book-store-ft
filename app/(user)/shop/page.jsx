'use client'

import classNames from 'classnames/bind'
import Image from 'next/image'
import { useEffect, useState } from 'react'

import { Beardcrumb } from '@/components/ui/breadcrumb'
import { Subcategory } from '@/components/ui/subcategory'
import { FilterBooks } from '@/components/ui/filter-books'
import { ProductList } from '@/components/product-list'
import styles from './book-collection.scss'
import { Pagination } from '@/components/ui/pagination'
import { catalogApiRequest } from '@/apiRequests/category'
import { productApiRequest } from '@/apiRequests/product'
const cx = classNames.bind(styles)

const BookCollection = () => {
    const totalPages = 10
    const [books, setBooks] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [categories, setCategories] = useState([])

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(`Chuyển sang trang: ${pageNumber}`)
    }

    useEffect(() => {
        const fetchCategories = async () => {
            const result = await catalogApiRequest.getAllCatalog()
            setCategories(result.payload.data)
        }

        fetchCategories()
    }, [])

    useEffect(() => {
        const fetchBooks = async () => {
            const result = await productApiRequest.getAllBooks()
            setBooks(result.payload.data)
        }

        fetchBooks()
    }, [])

    return (
        <div className={cx('wrapper')}>
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
