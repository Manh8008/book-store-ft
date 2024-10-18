'use client'
import classNames from 'classnames/bind'
import Link from 'next/link'
import styles from './breadcrumb.module.scss'
const cx = classNames.bind(styles)

export const Beardcrumb = () => {
    return (
        <div className={cx('breadcrumb')}>
            <ul className={cx('navigation')}>
                <li>
                    <Link href="#!">Trang chủ</Link>
                    <span className={cx('chevron-right')}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                </li>
                <li>
                    <Link href="#!">Sách Tư Duy - Kỹ Năng</Link>
                    <span className={cx('chevron-right')}>
                        <i className="fa-solid fa-chevron-right"></i>
                    </span>
                </li>
                <li>
                    <Link href="#!">Kỹ Năng - Phát Triển Bản Thân</Link>
                </li>
            </ul>
        </div>
    )
}
