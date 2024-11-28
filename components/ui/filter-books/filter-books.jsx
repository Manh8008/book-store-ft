'use client'
import classNames from 'classnames/bind'
import styles from './filter-books.module.scss'
import { PriceRangeSlider } from '@/components/ui/PriceRangeSlider'
import { Button } from '@/components/ui/button'

const cx = classNames.bind(styles)

const brands = ['Kim Đồng', 'NXB Trẻ', 'Alpha Books', 'Nhà xuất bản Văn học']

const FilterBooks = ({ onPriceChange }) => {
    const handleApplyFilter = ({ min, max }) => {
        if (onPriceChange) {
            onPriceChange(min, max)
        }
    }

    return (
        <div className={cx('filter-list-container')}>
            <div className={cx('filter-content')}>
                <div className={cx('filter-section')}>
                    <h3>Khoảng giá</h3>
                    <div className={cx('filter-price')}>
                        <PriceRangeSlider onApplyFilter={handleApplyFilter} />
                    </div>

                    <div className={cx('select-input')}>
                        <span className={cx('select-input__label')}>Giá</span>
                        <i className={cx('select-input__icon', 'fa-solid', 'fa-angle-down')}></i>
                        <ul className={cx('select-input__list')}>
                            <li className={cx('select-input__item')}>
                                <button
                                    className={cx('select-input__link')}
                                    onClick={() => handleSort('default')}
                                >
                                    Mặc định
                                </button>
                            </li>
                            <li className={cx('select-input__item')}>
                                <button
                                    className={cx('select-input__link')}
                                    onClick={() => handleSort('asc')}
                                >
                                    Giá: Thấp đến cao
                                </button>
                            </li>
                            <li className={cx('select-input__item')}>
                                <button
                                    className={cx('select-input__link')}
                                    onClick={() => handleSort('desc')}
                                >
                                    Giá: Cao đến thấp
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className={cx('filter-section')}>
                    <h3>Thương hiệu</h3>
                    <div className={cx('brand-list')}>
                        {brands.map((brand, index) => (
                            <div key={index} className={cx('brand-item')}>
                                <Button className={cx('brand-item-btn')} text>
                                    {brand}
                                </Button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilterBooks
