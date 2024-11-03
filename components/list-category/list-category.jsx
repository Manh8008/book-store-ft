import classNames from 'classnames/bind'
import styles from './list-category.module.scss'

const cx = classNames.bind(styles)

const ListCategory = () => {
    return (
        <ul className={cx('category-list')}>
            <li>
                <i className="fa-solid fa-brain"></i> Sách Tư Duy - Kỹ Năng
            </li>
            <li>
                <i className="fa-solid fa-dollar-sign"></i> Sách Kinh Tế - Tài Chính
            </li>
            <li>
                <i className="fa-solid fa-home"></i> Tủ Sách Gia Đình
            </li>
            <li>
                <i className="fa-solid fa-landmark"></i> Sách Lịch Sử - Chính Trị
            </li>
            <li>
                <i className="fa-solid fa-atom"></i> Sách Khoa Học - Giáo Dục
            </li>
            <li>
                <i className="fa-solid fa-palette"></i> Sách Văn Hóa - Nghệ Thuật
            </li>
            <li>
                <i className="fa-solid fa-language"></i> Sách Ngoại Ngữ
            </li>
            <li>
                <i className="fa-solid fa-book-open"></i> Tiểu Sử - Hồi Ký
            </li>
            <li>
                <i className="fa-solid fa-feather-alt"></i> Sách Văn Học
            </li>
            <li>
                <i className="fa-solid fa-heartbeat"></i> Sách Y Học - Sức Khỏe
            </li>
        </ul>
    )
}

export default ListCategory
