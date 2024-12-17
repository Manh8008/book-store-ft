'use client'
import classNames from 'classnames/bind'
import styles from './payment-success.module.scss'
import { Button } from '@/components/ui/button'
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react'
import { BsCheckCircleFill } from 'react-icons/bs'

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
                <div className={cx('icon-success')}>
                    <BsCheckCircleFill size={60} />
                </div>
                <h3 className={cx('title')}>Đặt hàng thành công!</h3>
                <div className={cx('message')}>
                    <p>Đơn hàng của bạn đang chờ được xác nhận.</p>
                    <p className={cx('order-code')}>
                        Mã đơn hàng: <span>{orderCode}</span>
                    </p>
                </div>
                <div className={cx('actions')}>
                    <Button primary onClick={() => (window.location.href = '/')}>
                        Về trang chủ
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess
