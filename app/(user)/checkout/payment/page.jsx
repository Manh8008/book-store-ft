'use client'
import { useState } from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import classNames from 'classnames/bind'
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux'

import { Button } from '@/components/ui/button'
import { PackageItem } from '@/components/payment/package-item'
import { PaymentOptions } from '@/components/payment/payment-options'
import { BannerSlider } from '@/components/cart'
import { ShippingInfo } from '@/components/payment/shipping-info'
import { useUser } from '@/context/user-context'
import { checkoutRequest } from '@/apiRequests/checkout'
import styles from './payment.module.scss'
import { clearCart } from '@/redux/slices/cartslice'

const cx = classNames.bind(styles)

const Payment = () => {
    const dispatch = useDispatch()
    const router = useRouter()
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null)

    const { userData } = useUser()
    const cart = useSelector((state) => state.cart)

    const searchParams = new URLSearchParams(window.location.search)
    const selectedAddressId = searchParams.get('selected_address')

    const addressInfo = userData?.address || []
    const addressInfoDefault = Array.isArray(addressInfo)
        ? addressInfo.find((addressInfoItem) => addressInfoItem.default === 1)
        : null

    const currentAddress = selectedAddressId
        ? addressInfo.find((addr) => addr.id === parseInt(selectedAddressId))
        : addressInfoDefault

    const total = cart.reduce((sum, product) => {
        return sum + parseFloat(product.price) * product.quantity
    }, 0)

    const shippingFee = 32000
    const finalTotal = total + shippingFee

    const formattedTotal = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(finalTotal)

    const checkoutData = {
        items: cart.map((product) => ({
            book_id: product.id,
            quantity: product.quantity,
            price: product.price
        })),
        total_amount: finalTotal,
        ...(selectedAddressId && { selected_address_id: parseInt(selectedAddressId) })
    }

    const handlePaymentMethodChange = (paymentMethod) => {
        setSelectedPaymentMethod(paymentMethod)
    }

    const handleOrder = async () => {
        try {
            let result

            if (!currentAddress) {
                alert('Vui lòng thêm địa chỉ giao hàng trước khi đặt hàng.')
                router.push('/customer/address/create')
                return
            }

            if (selectedPaymentMethod == null) {
                alert('Vui lòng chọn phương thức thanh toán.')
                return
            } else if (selectedPaymentMethod === 'COD') {
                result = await checkoutRequest.checkoutCOD(checkoutData)

                if (result?.payload?.success == true) {
                    dispatch(clearCart())
                    router.push(
                        `/checkout/payment/payment-success?order_code=${result.payload.data.order_code}`
                    )
                }
            } else if (selectedPaymentMethod === 'VNPAY') {
                result = await checkoutRequest.checkoutVnPay(checkoutData)
                if (result?.payload?.success == true) {
                    dispatch(clearCart())
                }
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
                    <h2 className={cx('main-title')}>Thanh toán</h2>

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
                    <ShippingInfo addressInfoDefault={currentAddress} />

                    <div className={cx('order-summary')}>
                        <div className={cx('summary-header')}>
                            <h3 className={cx('summary-title')}>Đơn hàng</h3>
                            <Link href="/cart" className={cx('summary-title-nav')}>
                                Thay đổi
                            </Link>
                        </div>
                        <div className={cx('summary-discount')}>
                            <span>Tạm tính</span>
                            <span>
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                }).format(total)}
                            </span>
                        </div>
                        <div className={cx('summary-discount')}>
                            <span>Phí vận chuyển</span>
                            <span>
                                {new Intl.NumberFormat('vi-VN', {
                                    style: 'currency',
                                    currency: 'VND'
                                }).format(shippingFee)}
                            </span>
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
