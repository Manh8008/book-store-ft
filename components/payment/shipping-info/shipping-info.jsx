'use client'
import classNames from 'classnames/bind'
import Link from 'next/link'
import styles from './shipping-info.module.scss'

const cx = classNames.bind(styles)

const ShippingInfo = ({ addressInfoDefault }) => {
    return (
        <div className={cx('shipping-info')}>
            <div className={cx('block-header')}>
                <h3 className={cx('block-header-title')}>Giao tới</h3>
                <Link className={cx('block-header-nav')} href={'/checkout/shipping'}>
                    Thay đổi
                </Link>
            </div>
            <div className={cx('customer_info')}>
                <p className={cx('customer_info__name')}>{addressInfoDefault?.name}</p>
                <i></i>
                <p className={cx('customer_info__phone')}>{addressInfoDefault?.phone}</p>
            </div>

            <div className={cx('address')}>
                {addressInfoDefault?.address_line && addressInfoDefault?.town
                    ? `${addressInfoDefault?.address_line}, ${addressInfoDefault?.town}, ${addressInfoDefault?.district}, ${addressInfoDefault?.province}`
                    : 'Bạn chưa chọn địa chỉ mặc định'}
            </div>
        </div>
    )
}

export default ShippingInfo
