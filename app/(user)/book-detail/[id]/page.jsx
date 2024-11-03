'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'

import productApiRequest from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import MainLayout from '@/layouts/main-layout'
import '@/public/styles/product-detail.scss'

export default function ProductDetail({ params }) {
    const [book, setBook] = useState(null)
    const [error, setError] = useState(null)
    useEffect(() => {
        const fetchRequest = async () => {
            try {
                const result = await productApiRequest.bookDetail(params.id)
                setBook(result.payload.data)
            } catch (error) {
                handleHttpError(error, setError)
            }
        }

        fetchRequest()
    }, [params.id])

    return (
        <MainLayout>
            <main style={{ background: '#F5F5FA' }}>
                <div className="product-detail">
                    <div className="content">
                        <Beardcrumb />

                        <div className="product-detail-container">
                            <div className="main-left">
                                <div className="main-detail">
                                    <div className="product-image">
                                        <img src={book?.images[0]?.url.trim()} alt={book?.name} />
                                    </div>

                                    <div className="product-info">
                                        <h1 className="product-title">{book?.name}</h1>
                                        <hr />
                                        <p className="product-price">
                                            Giá bán:{' '}
                                            <span className="price-sale">
                                                {parseFloat(book?.price).toLocaleString('vi-VN')}đ
                                            </span>{' '}
                                            <span className="price-retail">169.000đ</span>
                                        </p>
                                        <p className="product-description">{book?.short_summary}</p>
                                        <Button primary>Thêm vào giỏ hàng</Button>
                                    </div>
                                </div>

                                <div className="tab-container">
                                    <div className="tabs">
                                        <div className="desc">Mô tả</div>
                                        <div className="comment">Đánh giá</div>
                                    </div>

                                    <div className="tab-content">
                                        <div className="body">
                                            <h2 className="title">Học tập qua dự án</h2>
                                            <p className="text-desc">{book?.description}</p>
                                        </div>
                                    </div>

                                    <div className="table-desc">
                                        <div className="text">Thông tin chi tiết</div>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>Công ty phát hành</td>
                                                    <td>NXB Giáo Dục Việt Nam</td>
                                                </tr>
                                                <tr>
                                                    <td>Ngày xuất bản</td>
                                                    <td>2019-03-15 11:47:36</td>
                                                </tr>
                                                <tr>
                                                    <td>Kích thước</td>
                                                    <td>19 x 27 cm</td>
                                                </tr>
                                                <tr>
                                                    <td>Loại bìa</td>
                                                    <td>Bìa gập</td>
                                                </tr>
                                                <tr>
                                                    <td>Số trang</td>
                                                    <td>168</td>
                                                </tr>
                                                <tr>
                                                    <td>SKU</td>
                                                    <td>4119626029817</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="tab-comment">
                                        <div className="text">Bình luận sản phẩm</div>

                                        <div className="comment-form">
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="name">Tên của bạn</label>
                                                    <input
                                                        type="text"
                                                        id="name"
                                                        placeholder="Nhập tên của bạn"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email">Email</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        placeholder="Nhập email của bạn"
                                                        required
                                                    />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="comment">Bình luận</label>
                                                    <textarea
                                                        id="comment"
                                                        placeholder="Nhập nội dung bình luận"
                                                        required
                                                    ></textarea>
                                                </div>
                                                <div className="form-group">
                                                    <Button primary>Gửi</Button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>

                                    <div className="user-comment">
                                        <div className="item">
                                            <div className="info">
                                                <img
                                                    className="img-user"
                                                    src="/img/user-1.png"
                                                    alt="User"
                                                />
                                                <div className="username">Nguyễn Minh Thịnh</div>
                                            </div>
                                            <div className="date">
                                                2021-08-17
                                                <span>20:40:10</span>
                                            </div>
                                            <div className="content-comment">
                                                <p>
                                                    Sách được bọc nilong kỹ càng, sạch, mới. Giao
                                                    hàng nhanh. Nội dung chưa đọc nhưng nhìn sơ có
                                                    vẻ hấp dẫn và rất nhiều kiến thức bổ ích. Mình ở
                                                    nước ngoài nhờ người mua rồi gửi qua nên khâu
                                                    đóng gói của người bán quan trọng lắm, giúp cho
                                                    sách vận chuyển đi xa cũng không bị hư tổn gì.
                                                    Sẽ tiếp tục ủng hộ. Love book shop .From Hust
                                                    with LOve
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="info">
                                                <img
                                                    className="img-user"
                                                    src="/img/user-1.png"
                                                    alt="User"
                                                />
                                                <div className="username">Nguyễn Minh Thịnh</div>
                                            </div>
                                            <div className="date">
                                                2021-08-17
                                                <span>20:40:10</span>
                                            </div>
                                            <div className="content-comment">
                                                <p>
                                                    Sách được bọc nilong kỹ càng, sạch, mới. Giao
                                                    hàng nhanh. Nội dung chưa đọc nhưng nhìn sơ có
                                                    vẻ hấp dẫn và rất nhiều kiến thức bổ ích. Mình ở
                                                    nước ngoài nhờ người mua rồi gửi qua nên khâu
                                                    đóng gói của người bán quan trọng lắm, giúp cho
                                                    sách vận chuyển đi xa cũng không bị hư tổn gì.
                                                    Sẽ tiếp tục ủng hộ. Love book shop .From Hust
                                                    with LOve
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="info">
                                                <img
                                                    className="img-user"
                                                    src="/img/user-1.png"
                                                    alt="User"
                                                />
                                                <div className="username">Nguyễn Minh Thịnh</div>
                                            </div>
                                            <div className="date">
                                                2021-08-17
                                                <span>20:40:10</span>
                                            </div>
                                            <div className="content-comment">
                                                <p>
                                                    Sách được bọc nilong kỹ càng, sạch, mới. Giao
                                                    hàng nhanh. Nội dung chưa đọc nhưng nhìn sơ có
                                                    vẻ hấp dẫn và rất nhiều kiến thức bổ ích. Mình ở
                                                    nước ngoài nhờ người mua rồi gửi qua nên khâu
                                                    đóng gói của người bán quan trọng lắm, giúp cho
                                                    sách vận chuyển đi xa cũng không bị hư tổn gì.
                                                    Sẽ tiếp tục ủng hộ. Love book shop .From Hust
                                                    with LOve
                                                </p>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="info">
                                                <img
                                                    className="img-user"
                                                    src="/img/user-1.png"
                                                    alt="User"
                                                />
                                                <div className="username">Nguyễn Minh Thịnh</div>
                                            </div>
                                            <div className="date">
                                                2021-08-17
                                                <span>20:40:10</span>
                                            </div>
                                            <div className="content-comment">
                                                <p>
                                                    Sách được bọc nilong kỹ càng, sạch, mới. Giao
                                                    hàng nhanh. Nội dung chưa đọc nhưng nhìn sơ có
                                                    vẻ hấp dẫn và rất nhiều kiến thức bổ ích. Mình ở
                                                    nước ngoài nhờ người mua rồi gửi qua nên khâu
                                                    đóng gói của người bán quan trọng lắm, giúp cho
                                                    sách vận chuyển đi xa cũng không bị hư tổn gì.
                                                    Sẽ tiếp tục ủng hộ. Love book shop .From Hust
                                                    with LOve
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* <!-- Cột bên phải: Danh sách sản phẩm liên quan --> */}
                            <div className="main-right">
                                <div className="product-policy">
                                    <div className="item">
                                        <img src="/img/shipper.png.svg" alt="" />
                                        <div className="policy-info">
                                            <p className="title">Giao hàng nhanh chóng</p>
                                            <p className="sub-title">Chỉ trong vòng 24h</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src="/img/brand.png.svg" alt="" />
                                        <div className="policy-info">
                                            <p className="title">Sản phẩm chính hãng</p>
                                            <p className="sub-title">Sản phẩm nhập khẩu 100%</p>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <img src="/img/less.png.svg" alt="" />
                                        <div className="policy-info">
                                            <p className="title">Mua hàng tiết kiệm</p>
                                            <p className="sub-title">Rẻ hơn từ 10% đến 30%</p>
                                        </div>
                                    </div>
                                </div>

                                <h2>Có thể bạn thích</h2>

                                <div className="product-list-item">
                                    <img src="/img/product-2.png" alt="Sản phẩm 1" />
                                    <div className="product-list-info">
                                        <p className="product-list-name">
                                            24 Bài Học Thần Kì Nhất Thế Giới - Bizbooks
                                        </p>
                                        <p className="price-sale">143.200₫</p>
                                        <p className="price">160.000đ</p>
                                    </div>
                                </div>

                                <div className="product-list-item">
                                    <img src="/img/product-3.png" alt="Sản phẩm 2" />
                                    <div className="product-list-info">
                                        <p className="product-list-name">
                                            30 tuổi - mọi thứ chỉ mới bắt đầu - Lý Thượng Long
                                            (Saigon Books)
                                        </p>
                                        <p className="price-sale">108.000₫</p>
                                        <p className="price">130.000đ</p>
                                    </div>
                                </div>

                                <div className="product-list-item">
                                    <img src="/img/product-4.png" alt="Sản phẩm 3" />
                                    <div className="product-list-info">
                                        <p className="product-list-name">
                                            45 Giây Tạo Nên Thay Đổi - Thấu Hiểu Tiếp Thị Mạng Lưới
                                            - NXB trẻ
                                        </p>
                                        <p className="price-sale">150.000₫</p>
                                        <p className="price">186.000đ</p>
                                    </div>
                                </div>

                                <div className="product-list-item">
                                    <img src="/img/product-5.png" alt="Sản phẩm 3" />
                                    <div className="product-list-info">
                                        <p className="product-list-name">
                                            365 Ngày Đầu Tiên Ở Xứ Sở Hoa Anh Đào - Hành Trình Du
                                            Học Ở Tuổi 15
                                        </p>
                                        <p className="price-sale">201.000₫</p>
                                        <p className="price">250.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-similar">
                        <div className="content">
                            <div className="title-product">Sản phẩm tương tự</div>
                            <div className="list-product">
                                <div className="item">
                                    <Link href="#!">
                                        <img
                                            src="/img/product-1.png"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">
                                                My Hero Academia - Tập 27: One’s Justice
                                            </Link>
                                        </h3>
                                        <div className="stars">
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                        </div>
                                        <div className="price">20.000đ</div>
                                        <div className="price-sale">15.000đ</div>
                                        <Button primary large className="buy-now">
                                            Mua ngay
                                        </Button>
                                    </div>
                                </div>
                                <div className="item">
                                    <Link href="#!">
                                        <img
                                            src="/img/product-1.png"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">
                                                My Hero Academia - Tập 27: One’s Justice
                                            </Link>
                                        </h3>
                                        <div className="stars">
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                        </div>
                                        <div className="price">20.000đ</div>
                                        <div className="price-sale">15.000đ</div>
                                        <Button primary large className="buy-now">
                                            Mua ngay
                                        </Button>
                                    </div>
                                </div>
                                <div className="item">
                                    <Link href="#!">
                                        <img
                                            src="/img/product-1.png"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">
                                                My Hero Academia - Tập 27: One’s Justice
                                            </Link>
                                        </h3>
                                        <div className="stars">
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                        </div>
                                        <div className="price">20.000đ</div>
                                        <div className="price-sale">15.000đ</div>
                                        <Button primary large className="buy-now">
                                            Mua ngay
                                        </Button>
                                    </div>
                                </div>
                                <div className="item">
                                    <Link href="#!">
                                        <img
                                            src="/img/product-1.png"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">
                                                My Hero Academia - Tập 27: One’s Justice
                                            </Link>
                                        </h3>
                                        <div className="stars">
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                        </div>
                                        <div className="price">20.000đ</div>
                                        <div className="price-sale">15.000đ</div>
                                        <Button primary large className="buy-now">
                                            Mua ngay
                                        </Button>
                                    </div>
                                </div>
                                <div className="item">
                                    <Link href="#!">
                                        <img
                                            src="/img/product-1.png"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">
                                                My Hero Academia - Tập 27: One’s Justice
                                            </Link>
                                        </h3>
                                        <div className="stars">
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                            <img src="/img/star.svg" alt="Star" />
                                        </div>
                                        <div className="price">20.000đ</div>
                                        <div className="price-sale">15.000đ</div>
                                        <Button primary large className="buy-now">
                                            Mua ngay
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}
