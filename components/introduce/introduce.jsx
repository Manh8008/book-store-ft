import classNames from 'classnames/bind'
import { FaArrowRightLong } from 'react-icons/fa6'
import styles from './introduce.module.scss'
import Link from 'next/link'

const cx = classNames.bind(styles)

const Introduce = () => {
    return (
        <div className={cx('section-about')}>
            <div className={cx('container')}>
                <div className={cx('section-left')}>
                    <img src="/img/about_image.webp" alt="" />
                </div>

                <div className={cx('section-right')}>
                    <h3 className={cx('section-title')}>
                        <img src="/img/about_title.webp" alt="" />
                    </h3>
                    <p className={cx('section-sub-title')}>
                        Công ty Cổ phần Sách Cho Ai (Book Shop Online)
                    </p>
                    <p className={cx('section-desc')}>
                        Sách Cho Ai được biết đến là một trong những thương hiệu hàng đầu về dòng
                        sách quản trị kinh doanh, phát triển kỹ năng, tài chính, đầu tư… với các
                        cuốn sách hướng dẫn khởi nghiệp, các bài học, phương pháp và kinh nghiệm
                        quản trị của các chuyên gia, và các tập đoàn nổi tiếng trên thế giới. Sau 18
                        năm hình thành và phát triển, Sách Cho Ai đã từng bước khẳng định tên tuổi
                        của mình, đặc biệt đối với các thế hệ doanh nhân, nhà quản lý và những người
                        trẻ luôn khát khao xây dựng sự nghiệp thành công.
                    </p>
                    <Link href="/" primary className={cx('section-btn')}>
                        Xem thêm
                        <FaArrowRightLong />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Introduce
