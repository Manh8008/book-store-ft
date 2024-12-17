'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { useRouter, useSearchParams } from 'next/navigation'
import styles from './payment-result.module.scss'
import { Button } from '@/components/ui/button'
import { BsCheckCircleFill, BsXCircleFill } from 'react-icons/bs'

const cx = classNames.bind(styles)

const PaymentResult = ({ offlinePaymentData }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [paymentStatus, setPaymentStatus] = useState(null)
    const [transactionId, setTransactionId] = useState(null)
    const [orderRef, setOrderRef] = useState(null)

    useEffect(() => {
        const order_code = searchParams.get('order_code')
        const payment_status = searchParams.get('status')

        setPaymentStatus(payment_status)
        setOrderRef(order_code)
    }, [searchParams, offlinePaymentData])

    const handleGoHome = () => {
        router.push('/')
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <div className={cx('result-icon')}>
                    {paymentStatus === 'success' ? (
                        <BsCheckCircleFill className={cx('success-icon')} />
                    ) : (
                        <BsXCircleFill className={cx('failed-icon')} />
                    )}
                </div>
                {paymentStatus === 'success' ? (
                    <>
                        <h3 className={cx('title', 'success')}>Thanh toán thành công!</h3>
                        <div className={cx('message-container')}>
                            <p className={cx('message')}>
                                Đơn hàng của bạn đã được thanh toán thành công và đang chờ được xác
                                nhận!
                            </p>
                            <div className={cx('order-info')}>
                                <p>
                                    Mã đơn hàng: <strong>{orderRef}</strong>
                                </p>
                            </div>
                        </div>
                    </>
                ) : (
                    <>
                        <h3 className={cx('title', 'failed')}>Thanh toán thất bại</h3>
                        <div className={cx('message-container')}>
                            <p className={cx('message')}>
                                Đã có lỗi xảy ra trong quá trình xử lý giao dịch của bạn.
                                <br />
                                Vui lòng thử lại hoặc liên hệ bộ phận hỗ trợ.
                            </p>
                        </div>
                    </>
                )}
                <div className={cx('action-buttons')}>
                    <Button primary className={cx('home-button')} onClick={handleGoHome}>
                        Quay lại trang chủ
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PaymentResult
