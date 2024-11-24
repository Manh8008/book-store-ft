'use client'
import classNames from 'classnames/bind'
import styles from './payment-success.module.scss'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'

const cx = classNames.bind(styles)

const PaymentSuccess = () => {
    const searchParams = useSearchParams()
    const [orderCode, setOrderCode] = useState('')

    useEffect(() => {
        const order_code = searchParams.get('order_code')
        setOrderCode(order_code)
    }, [searchParams])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h3 className={cx('title', 'success')}>Thanh toán thành công!</h3>
                <p className={cx('message')}>
                    Đơn hàng của bạn đã được xử lý thành công.
                    <br />
                    {/* Mã giao dịch: <strong>123456789</strong> */}
                    <br />
                    Mã đơn hàng: <strong>{orderCode}</strong>
                </p>
                <Button primary onClick={() => (window.location.href = '/')}>
                    Quay lại trang chủ
                </Button>
            </div>
        </div>
    )
}

export default PaymentSuccess
