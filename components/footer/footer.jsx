import classNames from 'classnames/bind'
import styles from './Footer.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faFacebook,
    faInstagramSquare,
    faLinkedin,
    faTwitter
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'

const cx = classNames.bind(styles)

export const Footer = () => {
    return (
        <div className={cx('wrapper')}>
            <footer className={cx('footer')}>
                <div className="container">
                    <div className={cx('footer-row')}>
                        <div className={cx('footer-col')}>
                            <h4>Về công ty</h4>
                            <ul>
                                <li>
                                    <Link href="#">Giới thiệu công ty</Link>
                                </li>
                                <li>
                                    <Link href="#">Tuyển dụng</Link>
                                </li>
                                <li>
                                    <Link href="#">Chương trình đại lý</Link>
                                </li>
                                <li>
                                    <Link href="#">Chính sách bảo mật</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('footer-col')}>
                            <h4>Trợ giúp</h4>
                            <ul>
                                <li>
                                    <Link href="#">Quy định sử dụng</Link>
                                </li>
                                <li>
                                    <Link href="#">Hướng dẫn mua hàng</Link>
                                </li>
                                <li>
                                    <Link href="#">Phương thức thanh toán</Link>
                                </li>
                                <li>
                                    <Link href="#">Phương thức vận chuyển</Link>
                                </li>
                                <li>
                                    <Link href="#">Ứng dụng đọc ebook</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('footer-col')}>
                            <h4>Tin tức sách</h4>
                            <ul>
                                <li>
                                    <Link href="#">Tin tức</Link>
                                </li>
                                <li>
                                    <Link href="#">Chân dung</Link>
                                </li>
                                <li>
                                    <Link href="#">Điểm sách</Link>
                                </li>
                                <li>
                                    <Link href="#">Phê bình</Link>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('footer-col')}>
                            <h4>Theo giõi chúng tôi</h4>
                            <div className={cx('social-links')}>
                                <Link className={cx('social-icon')} href="#">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </Link>
                                <Link className={cx('social-icon')} href="#">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </Link>
                                <Link className={cx('social-icon')} href="#">
                                    <FontAwesomeIcon icon={faInstagramSquare} />
                                </Link>
                                <Link className={cx('social-icon')} href="#">
                                    <FontAwesomeIcon icon={faLinkedin} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('coppy-right')}>
                    ©Bản quyền thuộc về Book Shop | Thiết kế bởi sách cho ai
                </div>
            </footer>
        </div>
    )
}
