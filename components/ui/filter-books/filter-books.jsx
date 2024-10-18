import classNames from 'classnames/bind'
import styles from './filter-books.module.scss'
const cx = classNames.bind(styles)

export const FilterBooks = () => {
    return (
        <div className={cx('home-filter')}>
            <span className={cx('home-filter__label')}>Sắp xếp theo</span>
            <button className={cx('btn--nav', 'home-filter__btn')}>Phổ biến</button>
            <button className={cx('btn--nav', 'home-filter__btn', 'btn--primary')}>Mới nhất</button>
            <button className={cx('btn--nav', 'home-filter__btn')}>Bán chạy</button>

            <div className={cx('select-input')}>
                <span className={cx('select-input__label')}>Giá</span>
                <i className={cx('select-input__icon', 'fa-solid', 'fa-angle-down')}></i>
                <ul className={cx('select-input__list')}>
                    <li className={cx('select-input__item')}>
                        <button className={cx('select-input__link')}>Mặc định</button>
                    </li>
                    <li className={cx('select-input__item')}>
                        <button className={cx('select-input__link')}>Giá: Thấp đến cao</button>
                    </li>
                    <li className={cx('select-input__item')}>
                        <button className={cx('select-input__link')}>Giá: Cao đến thấp</button>
                    </li>
                </ul>
            </div>

            <div className={cx('home-filter__page')}>
                <span className={cx('home-filter__page-num')}>
                    <span className={cx('home-filter__page-current')}>1</span>/10
                </span>

                <div className={cx('home-filter__page-control')}>
                    <button className={cx('home-filter__page-btn')} disabled>
                        <i
                            className={cx('home-filter__page-icon', 'fa-solid', 'fa-angle-left')}
                        ></i>
                    </button>
                    <button className={cx('home-filter__page-btn')}>
                        <i
                            className={cx('home-filter__page-icon', 'fa-solid', 'fa-angle-right')}
                        ></i>
                    </button>
                </div>
            </div>
        </div>
    )
}
