import Link from 'next/link'
import '@/public/styles/profile.scss'

export default function Profile() {
    return (
        <main style={{ background: '#F5F5FA' }}>
            <div className="container">
                <div className="sidebar">
                    <img
                        alt="User profile picture"
                        height="100"
                        src="https://tse2.mm.bing.net/th?id=OIP.HHd8yrds00omoiO_XM1x2AHaHa&pid=Api&P=0&h=220"
                        width="100"
                    />
                    <div className="status">
                        <div className="badge">Thành viên Bạc</div>
                        <div className="points">F-Point tích lũy 0</div>
                        <div className="points">Thêm 30.000 để nâng hạng Vàng</div>
                    </div>
                    <div className="menu">
                        <a className="active" href="#">
                            <i className="fas fa-user"></i> Thông tin tài khoản
                        </a>
                        <a href="#">
                            <i className="fas fa-id-card"></i> Hồ sơ cá nhân
                        </a>
                        <a href="#">
                            <i className="fas fa-map-marker-alt"></i> Số địa chỉ
                        </a>
                        <a href="#">
                            <i className="fas fa-key"></i> Đổi mật khẩu
                        </a>
                        <a href="#">
                            <i className="fas fa-file-invoice"></i> Thông tin xuất hóa đơn GTGT
                        </a>
                        <a href="#">
                            <i className="fas fa-gift"></i> Ưu đãi thành viên
                        </a>
                        <a href="#">
                            <i className="fas fa-box"></i> Đơn hàng của tôi
                        </a>
                        <a href="#">
                            <i className="fas fa-wallet"></i> Ví voucher{' '}
                            <span style={{ color: 'red' }}>14</span>
                        </a>
                        <a href="#">
                            <i className="fas fa-coins"></i> Tài Khoản F-Point / Freeship
                        </a>
                    </div>
                </div>
                <div className="content-body">
                    <h2>Hồ sơ cá nhân</h2>
                    <form>
                        <div className="form-group">
                            <label htmlFor="fullname">Họ và tên*</label>
                            <input id="fullname" placeholder="Nhập họ và tên" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email*</label>
                            <input id="email" placeholder="Email" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">Số điện thoại*</label>
                            <input id="phone" placeholder="Số điện thoại" type="text" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Địa chỉ*</label>
                            <input id="address" placeholder="Địa chỉ giao hàng" type="text" />
                        </div>
                        <div className="form-group">
                            <label>Giới tính*</label>
                            <div className="radio-group">
                                <label>
                                    <input name="gender" type="radio" value="male" /> Nam
                                </label>
                                <label>
                                    <input name="gender" type="radio" value="female" /> Nữ
                                </label>
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Ngày sinh*</label>
                            <div className="date-group">
                                <input placeholder="DD" type="number" />
                                <input placeholder="MM" type="number" />
                                <input placeholder="YYYY" type="number" />
                            </div>
                        </div>
                        <div className="form-group">
                            <button className="btn" type="submit">
                                Lưu thay đổi
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
}
