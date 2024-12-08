import classNames from 'classnames/bind'
import styles from './right-content.module.scss'

const cx = classNames.bind(styles)

const RightContent = () => {
    return (
        <div className={cx('main-right')}>
            <div className={cx('product-policy')}>
                <div className={cx('item')}>
                    <img src="/img/shipper.png.svg" alt="" />
                    <div className={cx('policy-info')}>
                        <p className={cx('title')}>Giao hàng nhanh chóng</p>
                        <p className={cx('sub-title')}>Chỉ trong vòng 24h</p>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src="/img/brand.png.svg" alt="" />
                    <div className={cx('policy-info')}>
                        <p className={cx('title')}>Sản phẩm chính hãng</p>
                        <p className={cx('sub-title')}>Sản phẩm nhập khẩu 100%</p>
                    </div>
                </div>
                <div className={cx('item')}>
                    <img src="/img/less.png.svg" alt="" />
                    <div className={cx('policy-info')}>
                        <p className={cx('title')}>Mua hàng tiết kiệm</p>
                        <p className={cx('sub-title')}>Rẻ hơn từ 10% đến 30%</p>
                    </div>
                </div>
            </div>

            <h2>Có thể bạn thích</h2>

            <div className={cx('product-list-item')}>
                <img src="/img/product-2.png" alt="Sản phẩm 1" />
                <div className={cx('product-list-info')}>
                    <p className={cx('product-list-name')}>
                        24 Bài Học Thần Kì Nhất Thế Giới - Bizbooks
                    </p>
                    <p className={cx('price-sale')}>143.200₫</p>
                    <p className={cx('price')}>160.000đ</p>
                </div>
            </div>

            <div className={cx('product-list-item')}>
                <img src="/img/product-3.png" alt="Sản phẩm 2" />
                <div className={cx('product-list-info')}>
                    <p className={cx('product-list-name')}>
                        30 tuổi - mọi thứ chỉ mới bắt đầu - Lý Thượng Long (Saigon Books)
                    </p>
                    <p className={cx('price-sale')}>108.000₫</p>
                    <p className={cx('price')}>130.000đ</p>
                </div>
            </div>

            <div className={cx('product-list-item')}>
                <img src="/img/product-4.png" alt="Sản phẩm 3" />
                <div className={cx('product-list-info')}>
                    <p className={cx('product-list-name')}>
                        45 Giây Tạo Nên Thay Đổi - Thấu Hiểu Tiếp Thị Mạng Lưới - NXB trẻ
                    </p>
                    <p className={cx('price-sale')}>150.000₫</p>
                    <p className={cx('price')}>186.000đ</p>
                </div>
            </div>

            <div className={cx('product-list-item')}>
                <img src="/img/product-5.png" alt="Sản phẩm 3" />
                <div className={cx('product-list-info')}>
                    <p className={cx('product-list-name')}>
                        365 Ngày Đầu Tiên Ở Xứ Sở Hoa Anh Đào - Hành Trình Du Học Ở Tuổi 15
                    </p>
                    <p className={cx('price-sale')}>201.000₫</p>
                    <p className={cx('price')}>250.000đ</p>
                </div>
            </div>
        </div>
    )
}

export default RightContent
