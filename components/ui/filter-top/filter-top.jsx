'use client'
import React from 'react'
import classNames from 'classnames/bind'
import styles from './Filter.module.scss'
import { PriceRangeSlider } from '../PriceRangeSlider'

const cx = classNames.bind(styles)

const FilterTop = ({ onPriceChange, onPriceSort }) => {
    const handleApplyFilter = ({ min, max }) => {
        if (onPriceChange) {
            onPriceChange(min, max)
        }
    }

    const handlePriceSortChange = (type) => {
        if (onPriceSort) {
            onPriceSort(type)
        }
    }

    return (
        <div className={cx('home-filter')}>
            <span className={cx('home-filter__label')}>Sắp xếp theo</span>
            <button
                className={cx('btn--nav', 'home-filter__btn', 'btn--primary')}
                onClick={() => handlePriceSortChange('newest')}
            >
                Mới nhất
            </button>
            <button
                className={cx('btn--nav', 'home-filter__btn')}
                onClick={() => handlePriceSortChange('bestSeller')}
            >
                Bán chạy
            </button>

            <div className={cx('select-input')}>
                <span className={cx('select-input__label')}>Giá</span>
                <i className={cx('select-input__icon', 'fa-solid', 'fa-angle-down')}></i>
                <ul className={cx('select-input__list')}>
                    <li className={cx('select-input__item')}>
                        <button
                            className={cx('select-input__link')}
                            onClick={() => handlePriceSortChange('default')}
                        >
                            Mặc định
                        </button>
                    </li>
                    <li className={cx('select-input__item')}>
                        <button
                            className={cx('select-input__link')}
                            onClick={() => handlePriceSortChange('asc')}
                        >
                            Giá: Thấp đến cao
                        </button>
                    </li>
                    <li className={cx('select-input__item')}>
                        <button
                            className={cx('select-input__link')}
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
    )
}

export default FilterTop
