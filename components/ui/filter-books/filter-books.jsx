'use client'
import classNames from 'classnames/bind'
import styles from './filter-books.module.scss'
import { PriceRangeSlider } from '@/components/ui/PriceRangeSlider'
import { Button } from '@/components/ui/button'

const cx = classNames.bind(styles)

const brands = ['Kim Đồng', 'NXB Trẻ', 'Alpha Books', 'Nhà xuất bản Văn học']

const FilterBooks = () => {
    return (
        <div className={cx('filter-list-container')}>
            <div className={cx('filter-content')}>
                <div className={cx('filter-section')}>
                    <h3>Khoảng giá</h3>
                    <div className={cx('filter-price')}>
                        <PriceRangeSlider />
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
