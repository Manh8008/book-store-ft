'use client'
import classNames from 'classnames/bind'
import Image from 'next/image'
import { useState } from 'react'

import { Beardcrumb } from '@/components/ui/breadcrumb'
import { Subcategory } from '@/components/ui/subcategory'
import { FilterBooks } from '@/components/ui/filter-books'
import { ProductList } from '@/components/product-list'
import styles from './book-collection.scss'
import { Pagination } from '@/components/ui/pagination'
const cx = classNames.bind(styles)

const BookCollection = () => {
    const totalPages = 10
    const [currentPage, setCurrentPage] = useState(1)

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
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

                <Subcategory />

                <FilterBooks />

                <ProductList title={'Sách kinh tế - tài chính'} />
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
