import '@/public/styles/product-detail.scss'

export default function ProductDetail() {
    return (
        <>
            <main style={{ background: '#EEEEEE', height: 6000 + "px" }}>
                <div className="product-detail">
                    <div className="content">
                        {/* Breadcrumb */}
                        <div className="breadcrumb">
                            <ul className="navigation">
                                <li>
                                    <a href="#!">Trang chủ</a>
                                    <span className="chevron-right"><i className="fa-solid fa-chevron-right"></i></span>
                                </li>
                                <li>
                                    <a href="#!">Sách Tư Duy - Kỹ Năng</a>
                                    <span className="chevron-right"><i className="fa-solid fa-chevron-right"></i></span>
                                </li>
                                <li>
                                    <a href="#!">Kỹ Năng - Phát Triển Bản Thân</a>
                                </li>
                            </ul>
                        </div>

                        <div class="product-detail-container">
                            <div class="main-left">
                                <div class="main-detail">
                                    <div class="product-image">
                                        <img src="/img/product-1.png" alt="Hình ảnh sản phẩm" />
                                    </div>

                                    <div class="product-info">
                                        <h1 class="product-title">Sức Mạnh Của Thói Quen - The Power of Habit</h1>
                                        <hr />
                                        <p class="product-price">Giá bán: <span class="price-sale">135.200₫</span> <span class="price-retail">169.000đ</span></p>
                                        <p class="product-description">
                                            Đây là mô tả ngắn về sản phẩm, bao gồm những tính năng nổi bật và các thông số kỹ thuật quan trọng.
                                        </p>
                                        <button class="btn">Thêm vào giỏ hàng</button>
                                    </div>
                                </div>

                                <div>sdfsdfdsf</div>
                            </div>


                            {/* <!-- Cột bên phải: Danh sách sản phẩm liên quan --> */}
                            <div class="main-right">
                                <div class="product-policy">
                                    <div class="item">
                                        <img src="/img/shipper.png.svg" alt="" />
                                        <div class="policy-info">
                                            <p class="title">Giao hàng nhanh chóng</p>
                                            <p class="sub-title">Chỉ trong vòng 24h</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="/img/brand.png.svg" alt="" />
                                        <div class="policy-info">
                                            <p class="title">Sản phẩm chính hãng</p>
                                            <p class="sub-title">Sản phẩm nhập khẩu 100%</p>
                                        </div>
                                    </div>
                                    <div class="item">
                                        <img src="/img/less.png.svg" alt="" />
                                        <div class="policy-info">
                                            <p class="title">Mua hàng tiết kiệm</p>
                                            <p class="sub-title">Rẻ hơn từ 10% đến 30%</p>
                                        </div>
                                    </div>
                                </div>

                                <h2>Có thể bạn thích</h2>

                                <div class="product-list-item">
                                    <img src="/img/product-2.png" alt="Sản phẩm 1" />
                                    <div class="product-list-info">
                                        <p class="product-list-name">24 Bài Học Thần Kì Nhất Thế Giới - Bizbooks</p>
                                        <p class="price-sale">143.200₫</p>
                                        <p class="price">160.000đ</p>
                                    </div>
                                </div>

                                <div class="product-list-item">
                                    <img src="/img/product-3.png" alt="Sản phẩm 2" />
                                    <div class="product-list-info">
                                        <p class="product-list-name">30 tuổi - mọi thứ chỉ mới bắt đầu - Lý Thượng Long (Saigon Books)</p>
                                        <p class="price-sale">108.000₫</p>
                                        <p class="price">130.000đ</p>
                                    </div>
                                </div>

                                <div class="product-list-item">
                                    <img src="/img/product-4.png" alt="Sản phẩm 3" />
                                    <div class="product-list-info">
                                        <p class="product-list-name">45 Giây Tạo Nên Thay Đổi - Thấu Hiểu Tiếp Thị Mạng Lưới - NXB trẻ</p>
                                        <p class="price-sale">150.000₫</p>
                                        <p class="price">186.000đ</p>
                                    </div>
                                </div>

                                <div class="product-list-item">
                                    <img src="/img/product-5.png" alt="Sản phẩm 3" />
                                    <div class="product-list-info">
                                        <p class="product-list-name">365 Ngày Đầu Tiên Ở Xứ Sở Hoa Anh Đào - Hành Trình Du Học Ở Tuổi 15</p>
                                        <p class="price-sale">201.000₫</p>
                                        <p class="price">250.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </main>

        </>
    );
}