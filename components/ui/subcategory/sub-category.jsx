import classNames from 'classnames/bind'
import Image from 'next/image'
import Link from 'next/link'
import styles from './sub-category.module.scss'
const cx = classNames.bind(styles)

export const Subcategory = () => {
    return (
        <div className={cx('list-category')}>
            <Link className={cx('category-link')} href="#">
                <Image
                    width={96}
                    height={90}
                    quality={100}
                    src="/img/product-1.png"
                    className={cx('category-image')}
                    alt="Marketing - Bán hàng"
                />
                <p>Marketing - Bán hàng</p>
            </Link>

            <Link className={cx('category-link')} href="#">
                <Image
                    width={96}
                    height={90}
                    quality={100}
                    src="/img/product-2.png"
                    className={cx('category-image')}
                    alt="Marketing - Bán hàng"
                />
                <p>Tài chính - Đầu Tư</p>
            </Link>

            <Link className={cx('category-link')} href="#">
                <Image
                    width={96}
                    height={90}
                    quality={100}
                    src="/img/product-1.png"
                    className={cx('category-image')}
                    alt="Marketing - Bán hàng"
                />
                <p>Marketing - Bán hàng</p>
            </Link>

            <Link className={cx('category-link')} href="#">
                <Image
                    width={96}
                    height={90}
                    quality={100}
                    src="/img/product-2.png"
                    className={cx('category-image')}
                    alt="Marketing - Bán hàng"
                />
                <p>Tài chính - Đầu Tư</p>
            </Link>

            <Link className={cx('category-link')} href="#">
                <Image
                    width={96}
                    height={90}
                    quality={100}
                    src="/img/product-1.png"
                    className={cx('category-image')}
                    alt="Marketing - Bán hàng"
                />
                <p>Marketing - Bán hàng</p>
            </Link>

            <Link className={cx('category-link')} href="#">
                <Image
                    width={96}
                    height={90}
                    quality={100}
                    src="/img/product-2.png"
                    className={cx('category-image')}
                    alt="Marketing - Bán hàng"
                />
                <p>Tài chính - Đầu Tư</p>
            </Link>

            <Link className={cx('category-link')} href="#">
                <Image
                    width={96}
                    height={90}
                    quality={100}
                    src="/img/product-3.png"
                    className={cx('category-image')}
                    alt="Marketing - Bán hàng"
                />
                <p>Lãnh Đạo - Khởi nghiệp</p>
            </Link>

            <Link className={cx('category-link')} href="#">
                <Image
                    width={96}
                    height={90}
                    quality={100}
                    src="/img/product-4.png"
                    className={cx('category-image')}
                    alt="Marketing - Bán hàng"
                />
                <p>Chiến Lược - Quản Trị</p>
            </Link>
        </div>
    )
}
