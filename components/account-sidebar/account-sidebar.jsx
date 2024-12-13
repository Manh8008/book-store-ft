'use client'
import classNames from 'classnames/bind'
import Link from 'next/link'
import styles from './account-sidebar.module.scss'
import { useUser } from '@/context/user-context'
import { usePathname } from 'next/navigation'

const cx = classNames.bind(styles)

const AccountSidebar = () => {
    const { userData } = useUser()
    const pathname = usePathname()

    const menuItems = [
        {
            href: '/customer/profile',
            icon: 'fas fa-user',
            label: 'Thông tin tài khoản'
        },
        {
            href: '/customer/address',
            icon: 'fas fa-map-marker-alt',
            label: 'Số địa chỉ'
        },
        {
            href: '/customer/change-password',
            icon: 'fas fa-key',
            label: 'Đổi mật khẩu'
        },
        {
            href: '/customer/order-history',
            icon: 'fas fa-box',
            label: 'Quản lý đơn hàng'
        }
    ]

    return (
        <div className={cx('sidebar')}>
            <img
                alt="User avatar"
                src={
                    userData?.avatar ||
                    'https://tse2.mm.bing.net/th?id=OIP.HHd8yrds00omoiO_XM1x2AHaHa&pid=Api&P=0&h=220'
                }
                width="80"
                height="80"
            />
            <div className={cx('status')}>
                <div className={cx('user-name')}>{userData?.name || 'Người dùng'}</div>
                <div className={cx('user-email')}>{userData?.email}</div>
            </div>
            <div className={cx('menu')}>
                {menuItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cx({ active: pathname === item.href })}
                    >
                        <i className={item.icon}></i> {item.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default AccountSidebar
