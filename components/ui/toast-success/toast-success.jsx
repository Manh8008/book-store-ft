'use client'
import { useEffect, useState } from 'react'
import classNames from 'classnames/bind'
import { IoMdCheckmarkCircle } from 'react-icons/io'
import { IoClose } from 'react-icons/io5'
import styles from './toast-success.module.scss'

const cx = classNames.bind(styles)

export const ToastSuccess = ({ message, duration = 3000, onClose }) => {
    const [isVisible, setIsVisible] = useState(true)

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsVisible(false)
            if (onClose) onClose()
        }, duration)

        return () => clearTimeout(timer)
    }, [duration, onClose])

    if (!isVisible) return null

    return (
        <div className={cx('toast-success', { show: isVisible })}>
            <div className={cx('toast-icon')}>
                <IoMdCheckmarkCircle />
            </div>
            <div className={cx('toast-message')}>{message}</div>
            <button className={cx('toast-close')} onClick={() => setIsVisible(false)}>
                <IoClose />
            </button>
            <div className={cx('toast-progress')} style={{ animationDuration: `${duration}ms` }} />
        </div>
    )
}

export const ToastContainer = ({ toasts }) => {
    return (
        <div className={cx('toast-container')}>
            {toasts.map((toast, index) => (
                <ToastSuccess key={toast.id} {...toast} />
            ))}
        </div>
    )
}
