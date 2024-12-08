'use client'
import classNames from 'classnames/bind'
import { FaAngleDown } from 'react-icons/fa6'
import styles from './dropdown-menu.module.scss'

const cx = classNames.bind(styles)
const DropdownMenu = ({ onStatusSort }) => {
    const handleStatusChange = (status) => {
        if (onStatusSort) {
            onStatusSort(status)
        }
    }
    return (
        <div className={cx('select-input')}>
            <span className={cx('select-input__label')}>Đơn hàng</span>
            <FaAngleDown className={cx('select-input__icon')} />
            <ul className={cx('select-input__list')}>
                <li className={cx('select-input__item')}>
                    <button
                        className={cx('select-input__link')}
                        onClick={() => handleStatusChange('default')}
                    >
                        Mặc định
                    </button>
                </li>
                <li className={cx('select-input__item')}>
                    <button
                        className={cx('select-input__link')}
                        onClick={() => handleStatusChange('pending')}
                    >
                        Chờ xác nhận
                    </button>
                </li>
                <li className={cx('select-input__item')}>
                    <button
                        className={cx('select-input__link')}
                        onClick={() => handleStatusChange('confirmed')}
                    >
                        Đã xác nhận
                    </button>
                </li>
                <li className={cx('select-input__item')}>
                    <button
                        className={cx('select-input__link')}
                        onClick={() => handleStatusChange('canceled')}
                    >
                        Đã hủy
                    </button>
                </li>
                <li className={cx('select-input__item')}>
                    <button
                        className={cx('select-input__link')}
                        onClick={() => handleStatusChange('complete')}
                    >
                        Đã hoàn thành
                    </button>
                </li>
            </ul>
        </div>
    )
}

export default DropdownMenu
