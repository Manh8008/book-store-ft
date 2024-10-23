'use client'
import Link from 'next/link'
import classNames from 'classnames/bind'
import { CiDeliveryTruck } from 'react-icons/ci'

import { Button } from '@/components/ui/button'
import styles from './payment.module.scss'
import { PackageItem } from '@/components/payment/package-item'
import { ShippingMethod } from '@/components/payment/shipping-method'
import { PaymentOptions } from '@/components/payment/payment-options'
import { BannerSlider } from '@/components/cart'
const cx = classNames.bind(styles)

const Payment = () => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('left')}>
                    <div className={cx('section-container')}>
                        <h3 className={cx('title')}>Chọn hình thức giao hàng</h3>

                        <ShippingMethod />

                        <div className={cx('shipping-package')}>
                            <div className={cx('package-time')}>
                                <div className={cx('package-title')}>
                                    <img
                                        width="24"
                                        height="24"
                                        alt="icon"
                                        src="https://salt.tikicdn.com/ts/upload/ad/b7/93/7094a85d0b6d299f30ed89b03511deb9.png"
                                    />
                                    Gói: giao siêu tốc trước 11h ngày mai
                                </div>
                            </div>

                            <div className={cx('left-content')}>
                                <div className={cx('package-summary')}>
                                    <div className={cx('align-center')}>
                                        <span
                                            className={cx('method-text')}
                                            style={{ textTransform: 'uppercase' }}
                                        >
                                            Giao tiết kiệm
                                        </span>
                                    </div>
                                    <div className={cx('shipping-fee')}>
                                        <span className={cx('current-fee text')}>21.000đ</span>
                                    </div>
                                </div>

                                <div className={cx('package-item-list')}>
                                    <PackageItem />
                                    <PackageItem />
                                </div>
                            </div>
                            <div className={cx('right-content')}>
                                <div className={cx('content-wrapper')}>
                                    <div className={cx('content-icon')}>
                                        <CiDeliveryTruck />
                                    </div>
                                    <div>
                                        <p className={cx('content-text')}>
                                            Được giao bởi TikiNOW Smart Logistics (giao từ Hồ Chí
                                            Minh)
                                        </p>
                                        <p className={cx('content-text')}></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('section-container')}>
                        <h3 className={cx('title')}>Chọn hình thức thanh toán</h3>
                        <PaymentOptions />
                    </div>
                </div>

                <div className={cx('right')}>
                    <div className={cx('shipping-info')}>
                        <div className={cx('block-header')}>
                            <h3 className={cx('block-header-title')}>Giao tới</h3>
                            <Link className={cx('block-header-nav')} href={'/checkout/shipping'}>
                                Thay đổi
                            </Link>
                        </div>
                        <div className={cx('customer_info')}>
                            <p className={cx('customer_info__name')}>Nguyễn Hữu Mạnh</p>
                            <i></i>
                            <p className={cx('customer_info__phone')}>0865587127</p>
                        </div>

                        <div className={cx('address')}>
                            <span className={cx('address__type', 'address__type--home')}>Nhà</span>
                            xóm 1 thanh tiên thanh chuong nghe an, Phường An Khánh, Thành phố Thủ
                            Đức, Hồ Chí Minh
                        </div>
                    </div>

                    <div className={cx('order-summary')}>
                        <div className={cx('summary-header')}>
                            <h3 className={cx('summary-title')}>Đơn hàng</h3>
                            <Link href="/cart" className={cx('summary-title-nav')}>
                                Thay đổi
                            </Link>
                        </div>
                        <div className={cx('summary-discount')}>
                            <span>Tạm tính</span>
                            <span>-55.000đ</span>
                        </div>
                        <div className={cx('summary-discount')}>
                            <span>Phí vận chuyển</span>
                            <span>-55.000đ</span>
                        </div>
                        <div className={cx('summary-discount')}>
                            <span>Giảm giá từ Deal</span>
                            <span>-55.000đ</span>
                        </div>
                        <div className={cx('summary-total')}>
                            <span>Tổng tiền</span>
                            <span className={cx('total-amount')}>330.000đ</span>
                        </div>
                        <Button primary className={cx('checkout-button')}>
                            Đặt hàng
                        </Button>
                    </div>

                    <div style={{ marginTop: 16 }}>
                        <BannerSlider />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
