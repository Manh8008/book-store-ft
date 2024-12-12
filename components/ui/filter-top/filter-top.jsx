'use client'
import React, { useState } from 'react'
import classNames from 'classnames/bind'
import styles from './filter.module.scss'
import { PriceRangeSlider } from '../PriceRangeSlider'

const cx = classNames.bind(styles)

const FilterTop = ({ onPriceChange, onPriceSort, isLoading }) => {
    const [activeSort, setActiveSort] = useState('default')

    const handleApplyFilter = ({ min, max }) => {
        if (onPriceChange) {
            onPriceChange(min, max)
        }
    }

    const handlePriceSortChange = (type) => {
        if (onPriceSort) {
            setActiveSort(type)
            onPriceSort(type)
        }
    }

    return (
        <>
            {/* Desktop Filter */}
            <div className={cx('home-filter', 'desktop-filter')}>
                <span className={cx('home-filter__label')}>Sắp xếp theo</span>
                <button
                    className={cx('btn--nav', 'home-filter__btn', {
                        'btn--primary': activeSort === 'newest'
                    })}
                    onClick={() => handlePriceSortChange('newest')}
                >
                    Mới nhất
                </button>
                <button
                    className={cx('btn--nav', 'home-filter__btn', {
                        'btn--primary': activeSort === 'bestSeller'
                    })}
                    onClick={() => handlePriceSortChange('bestSeller')}
                >
                    Bán chạy
                </button>

                <div className={cx('select-input')}>
                    <span className={cx('select-input__label')}>Giá</span>
                    <i className={cx('select-input__icon', 'fa-solid', 'ri-arrow-down-s-line')}></i>
                    <ul className={cx('select-input__list')}>
                        <li className={cx('select-input__item')}>
                            <button
                                className={cx('select-input__link', {
                                    active: activeSort === 'default'
                                })}
                                onClick={() => handlePriceSortChange('default')}
                            >
                                Mặc định
                            </button>
                        </li>
                        <li className={cx('select-input__item')}>
                            <button
                                className={cx('select-input__link', {
                                    active: activeSort === 'asc'
                                })}
                                onClick={() => handlePriceSortChange('asc')}
                            >
                                Giá: Thấp đến cao
                            </button>
                        </li>
                        <li className={cx('select-input__item')}>
                            <button
                                className={cx('select-input__link', {
                                    active: activeSort === 'desc'
                                })}
                                onClick={() => handlePriceSortChange('desc')}
                            >
                                Giá: Cao đến thấp
                            </button>
                        </li>
                    </ul>
                </div>

                <div className={cx('home-filter__page')}>
                    <PriceRangeSlider onApplyFilter={handleApplyFilter} />
                </div>
            </div>

            {/* Mobile/Tablet Filter */}
            <div className={cx('mobile-filter')}>
                <div className={cx('mobile-filter__header')}>
                    <span>Bộ lọc</span>
                    {isLoading && <span className={cx('loading-indicator')}>Đang tải...</span>}
                </div>

                <div className={cx('mobile-filter__content')}>
                    <div className={cx('mobile-filter__section')}>
                        <h3>Sắp xếp</h3>
                        <div className={cx('mobile-filter__buttons')}>
                            <button
                                className={cx('mobile-btn', {
                                    'mobile-btn--primary': activeSort === 'newest'
                                })}
                                onClick={() => handlePriceSortChange('newest')}
                            >
                                Mới nhất
                            </button>
                            <button
                                className={cx('mobile-btn', {
                                    'mobile-btn--primary': activeSort === 'bestSeller'
                                })}
                                onClick={() => handlePriceSortChange('bestSeller')}
                            >
                                Bán chạy
                            </button>
                        </div>
                    </div>

                    <div className={cx('mobile-filter__section')}>
                        <h3>Giá</h3>
                        <div className={cx('mobile-filter__price')}>
                            <button
                                className={cx('mobile-btn', {
                                    'mobile-btn--primary': activeSort === 'asc'
                                })}
                                onClick={() => handlePriceSortChange('asc')}
                            >
                                Giá thấp đến cao
                            </button>
                            <button
                                className={cx('mobile-btn', {
                                    'mobile-btn--primary': activeSort === 'desc'
                                })}
                                onClick={() => handlePriceSortChange('desc')}
                            >
                                Giá cao đến thấp
                            </button>
                        </div>
                        <div className={cx('mobile-filter__range')}>
                            <PriceRangeSlider onApplyFilter={handleApplyFilter} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default FilterTop
