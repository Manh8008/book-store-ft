'use client'
import classNames from 'classnames/bind'
import styles from './account-sidebar.module.scss'
import Link from 'next/link'

const cx = classNames.bind(styles)

const AccountSidebar = ({ idUser }) => {
    return (
        <div className={cx('sidebar')}>
            <img
                alt="User profile picture"
                height="100"
                src="https://tse2.mm.bing.net/th?id=OIP.HHd8yrds00omoiO_XM1x2AHaHa&pid=Api&P=0&h=220"
                width="100"
            />
            <div className={cx('status')}>
                <div className={cx('badge')}>Thành viên Bạc</div>
                <div className={cx('points')}>F-Point tích lũy 0</div>
                <div className={cx('points')}>Thêm 30.000 để nâng hạng Vàng</div>
            </div>
            <div className={cx('menu')}>
                <Link className={cx('active')} href="/customer/profile">
                    <i className="fas fa-user"></i> Thông tin tài khoản
                </Link>
                <Link href="#">
                    <i className="fas fa-id-card"></i> Hồ sơ cá nhân
                </Link>
                <Link href={`/customer/address`}>
                    <i className="fas fa-map-marker-alt"></i> Số địa chỉ
                </Link>
                <Link href="/auth/change-password">
                    <i className="fas fa-key"></i> Đổi mật khẩu
                </Link>
                <Link href="#">
                    <i className="fas fa-file-invoice"></i> Thông tin xuất hóa đơn GTGT
                </Link>
                <Link href="#">
                    <i className="fas fa-gift"></i> Ưu đãi thành viên
                </Link>
                <Link href="#">
                    <i className="fas fa-box"></i> Đơn hàng của tôi
                </Link>
                <Link href="#">
                    <i className="fas fa-wallet"></i> Ví voucher{' '}
                    <span style={{ color: 'red' }}>14</span>
                </Link>
                <Link href="#">
                    <i className="fas fa-coins"></i> Tài Khoản F-Point / Freeship
                </Link>
            </div>
        </div>
    )
}

export default AccountSidebar
