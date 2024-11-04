"use client"

import classNames from 'classnames/bind'
import { FilterBooks } from "@/components/ui/filter-books";
import { Subcategory } from "@/components/ui/subcategory";
import Image from "next/image";
import styles from '../../book-collection.scss'
import { Pagination } from '@/components/ui/pagination'
import { useEffect, useState } from 'react';
import { ProductCard } from '@/components/product-card';
import { Beardcrumb } from '@/components/ui/breadcrumb';
const cx = classNames.bind(styles)

export default function ProductByCategories({ params }) {
    const totalPages = 10
    const [currentPage, setCurrentPage] = useState(1)
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
        console.log(`Chuyển sang trang: ${pageNumber}`)
    }

    const idCate = params.id
    const [categories, setCategories] = useState([])
    const [productByCate, setProductByCate] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            const listCategories = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getAllCategories`, { cache: 'no-store' })
                .then(res => res.json())
            setCategories(listCategories.data)
        }

        fetchCategories();
    }, [])

    useEffect(() => {
        const fetchProductByCate = async () => {
            const listProductByCate = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/getBookByCategory/${idCate}`, { cache: 'no-store' })
                .then(res => res.json())
            setProductByCate(listProductByCate.data)
        }

        fetchProductByCate();
    }, [])

    return (
        <>
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

                    <div className="productByCate">
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
    );
}