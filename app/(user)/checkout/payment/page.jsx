'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import classNames from 'classnames/bind'

import { Button } from '@/components/ui/button'
import { PackageItem } from '@/components/payment/package-item'
import { PaymentOptions } from '@/components/payment/payment-options'
import { BannerSlider } from '@/components/cart'
import { ShippingInfo } from '@/components/payment/shipping-info'
import { useUser } from '@/context/user-context'
import { checkoutRequest } from '@/apiRequests/checkout'
import styles from './payment.module.scss'
import { useRouter } from 'next/navigation'

const cx = classNames.bind(styles)

const Payment = () => {
    const router = useRouter()
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)

    const { userData } = useUser()
    const cart = useSelector((state) => state.cart)

    const total = cart.reduce((sum, product) => {
        return sum + parseFloat(product.price) * product.quantity
    }, 0)

    const formattedTotal = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(total)

    const checkoutData = {
        items: cart.map((product) => ({
            book_id: product.id,
            quantity: product.quantity,
            price: product.price
        })),
        total_amount: total
    }
    const addressInfo = userData?.address || []
    const addressInfoDefault = Array.isArray(addressInfo)
        ? addressInfo.find((addressInfoItem) => addressInfoItem.default === 1)
        : null

    const handlePaymentMethodChange = (paymentMethod) => {
        setSelectedPaymentMethod(paymentMethod)
    }

    const handleOrder = async () => {
        try {
            let result

            if (selectedPaymentMethod == null) {
                alert('Vui lòng chọn phương thức thanh toán.')
                return
            } else if (selectedPaymentMethod === 'COD') {
                result = await checkoutRequest.checkoutCOD(checkoutData)
                if (result?.payload?.success == true)
                    router.push('/checkout/payment/payment-success')
            } else if (selectedPaymentMethod === 'MoMo') {
                result = await checkoutRequest.checkoutVnPay(checkoutData)
            } else if (selectedPaymentMethod === 'VNPAY') {
                result = await checkoutRequest.checkoutVnPay(checkoutData)
            }

            if (result?.payload?.data?.payment_url) {
                window.location.href = result.payload.data.payment_url
            }
        } catch (error) {
            console.error('Error placing order:', error)
        }
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('left')}>
                    <div className={cx('section-container')}>
                        <h3 className={cx('title')}>Các sản phẩm bạn đã thêm</h3>
                        <div className={cx('shipping-package')}>
                            <div className={cx('package-time')}>
                                <div className={cx('package-title')}>
                                    <img
                                        width="24"
                                        height="24"
                                        alt="icon"
                                        src="https://salt.tikicdn.com/ts/upload/ad/b7/93/7094a85d0b6d299f30ed89b03511deb9.png"
                                    />
                                    Các sản phẩm của bạn
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
                                    <PackageItem cart={cart} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={cx('section-container')}>
                        <h3 className={cx('title')}>Chọn hình thức thanh toán</h3>
                        <PaymentOptions onPaymentMethodChange={handlePaymentMethodChange} />
                    </div>
                </div>

                <div className={cx('right')}>
                    <ShippingInfo addressInfoDefault={addressInfoDefault} />

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
                            <span className={cx('total-amount')}>{formattedTotal}</span>
                        </div>
                        <Button onClick={handleOrder} primary className={cx('checkout-button')}>
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
