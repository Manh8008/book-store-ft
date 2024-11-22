'use client'

import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './category-list.module.scss'
import { catalogApiRequest } from '@/apiRequests/category'

const cx = classNames.bind(styles)

const CategoryList = () => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetch = async () => {
            try {
                const categoriesResponse = await catalogApiRequest.getAllCatalog()
                setCategories(categoriesResponse.payload.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetch()
    }, [])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrap-title')}>
                <i className="fa-solid fa-bars"></i>
                <span>TẤT CẢ DANH MỤC</span>
            </div>

            <div className={cx('category-list-wrap')}>
                <ul className={cx('category-list')}>
                    {categories &&
                        categories.map((category, index) => (
                            <li key={index}>
                                <i className="fa-solid fa-brain"></i> {category.name}
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default CategoryList
