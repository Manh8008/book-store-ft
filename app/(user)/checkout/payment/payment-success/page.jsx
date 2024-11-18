'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import classNames from 'classnames/bind'
import styles from './payment-success.module.scss'
import { Button } from '@/components/ui/button'

const cx = classNames.bind(styles)

const PaymentSuccess = () => {
    // s
    // useEffect(() => {
    //     const { vnp_ResponseCode, vnp_TransactionNo, vnp_TxnRef } = router.query

    //     if (vnp_ResponseCode === '00') {
    //         setPaymentStatus('Success')
    //         setTransactionId(vnp_TransactionNo)
    //     } else {
    //         setPaymentStatus('Failed')
    //     }
    // }, [router.query])

    return (
        <div className={cx('wrapper')}>
            <div className={cx('content')}>
                <h3 className={cx('title')}>Thanh toán thành công!</h3>
                <p className={cx('message')}>
                    Đơn hàng của bạn đã được xử lý thành công. Mã giao dịch:121212
                </p>
                <Button primary onClick={() => router.push('/')}>
                    Quay lại trang chủ
                </Button>
            </div>
        </div>
    )
}

export default PaymentSuccess
