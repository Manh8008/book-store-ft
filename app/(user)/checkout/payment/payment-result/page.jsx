'use client'
import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import classNames from 'classnames/bind'
import styles from './payment-result.module.scss'
import { Button } from '@/components/ui/button'

const cx = classNames.bind(styles)

const PaymentResult = ({ offlinePaymentData }) => {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [paymentStatus, setPaymentStatus] = useState(null)
    const [transactionId, setTransactionId] = useState(null)
    const [orderRef, setOrderRef] = useState(null)

    useEffect(() => {
        // Nếu có offlinePaymentData, ưu tiên dùng dữ liệu này
        if (offlinePaymentData) {
            const { order_code, payment_status } = offlinePaymentData
            setPaymentStatus(payment_status === 'Đã thanh toán' ? 'success' : 'failed')
            setTransactionId(offlinePaymentData.id)
            setOrderRef(order_code)
            return
        }

        // Nếu không có offlinePaymentData, xử lý thanh toán online
        const vnp_ResponseCode = searchParams.get('vnp_ResponseCode')
        const vnp_TransactionNo = searchParams.get('vnp_TransactionNo')
        const vnp_TxnRef = searchParams.get('vnp_TxnRef')

        if (vnp_ResponseCode === '00') {
            setPaymentStatus('success')
            setTransactionId(vnp_TransactionNo)
            setOrderRef(vnp_TxnRef)
        } else {
            setPaymentStatus('failed')
        }
    }, [searchParams, offlinePaymentData])

    const handleGoHome = () => {
        router.push('/')
    }

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                {paymentStatus === 'success' ? (
                    <>
                        <h3 className={cx('title', 'success')}>Thanh toán thành công!</h3>
                        <p className={cx('message')}>
                            Đơn hàng của bạn đã được xử lý thành công.
                            <br />
                            Mã giao dịch: <strong>{transactionId}</strong>
                            <br />
                            Mã đơn hàng: <strong>{orderRef}</strong>
                        </p>
                    </>
                ) : (
                    <>
                        <h3 className={cx('title', 'failed')}>Thanh toán thất bại</h3>
                        <p className={cx('message')}>
                            Đã có lỗi xảy ra trong quá trình xử lý giao dịch của bạn.
                            <br />
                            Vui lòng thử lại hoặc liên hệ bộ phận hỗ trợ.
                        </p>
                    </>
                )}
                <Button primary onClick={handleGoHome}>
                    Quay lại trang chủ
                </Button>
            </div>
        </div>
    )
}

export default PaymentResult
