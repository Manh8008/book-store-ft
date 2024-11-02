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
const cx = classNames.bind(styles)

const BookCollection = () => {
    // const totalPages = 10
    // const [currentPage, setCurrentPage] = useState(1)
    // const handlePageChange = (pageNumber) => {
    //     setCurrentPage(pageNumber)
    //     console.log(`Chuyển sang trang: ${pageNumber}`)
    // }

    const [categories, setCategories] = useState([])
    useEffect(() => {
        const fetchCategories = async () => {
            const listCategories = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getAllCategories`, { cache: 'no-store' })
                .then(res => res.json())
            setCategories(listCategories.data)
        }

        fetchCategories();
    }, [])
    // console.log(categories)

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

                <ProductList title={'Tất cả sản phẩm'} />
            </div>

            {/* <div className={cx('pagination')}>
                <Pagination
                    totalPages={totalPages}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                />
            </div> */}
        </div>
    )
}

export default BookCollection
