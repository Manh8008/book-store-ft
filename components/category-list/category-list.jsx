'use client'

import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import styles from './category-list.module.scss'
import { catalogApiRequest } from '@/apiRequests/category'
import { HiMenu } from 'react-icons/hi'
import { FiChevronRight } from 'react-icons/fi'

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
                <HiMenu className={cx('menu-icon')} />
                <span>TẤT CẢ DANH MỤC</span>
            </div>

            <div className={cx('category-list-wrap')}>
                <ul className={cx('category-list')}>
                    {categories &&
                        categories.map((category, index) => (
                            <li key={index}>
                                <span className={cx('category-name')}>{category.name}</span>
                                <FiChevronRight className={cx('arrow-icon')} />
                            </li>
                        ))}
                </ul>
            </div>
        </div>
    )
}

export default CategoryList
