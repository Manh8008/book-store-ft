import { Button } from '@/components/ui/button'
import Link from 'next/link'
import '@/public/styles/product-detail.scss'

export default function ProductDetail() {
    return (
        <>
            <main style={{ background: '#EEEEEE' }}>
                <div className="product-detail">
                    <div className="content">
                        {/* Breadcrumb */}
                        <div className="breadcrumb">
                            <ul className="navigation">
                                <li>
                                    <a href="#!">Trang chủ</a>
                                    <span className="chevron-right">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </span>
                                </li>
                                <li>
                                    <a href="#!">Sách Tư Duy - Kỹ Năng</a>
                                    <span className="chevron-right">
                                        <i className="fa-solid fa-chevron-right"></i>
                                    </span>
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
                                        <h1 class="product-title">
                                            Sức Mạnh Của Thói Quen - The Power of Habit
                                        </h1>
                                        <hr />
                                        <p class="product-price">
                                            Giá bán: <span class="price-sale">135.200₫</span>{' '}
                                            <span class="price-retail">169.000đ</span>
                                        </p>
                                        <p class="product-description">
                                            Đây là mô tả ngắn về sản phẩm, bao gồm những tính năng
                                            nổi bật và các thông số kỹ thuật quan trọng.
                                        </p>
                                        <Button primary>Thêm vào giỏ hàng</Button>
                                    </div>
                                </div>

                                <div class="tab-container">
                                    <div class="tabs">
                                        <div class="desc">Mô tả</div>
                                        <div class="comment">Đánh giá</div>
                                    </div>

                                    <div class="tab-content">
                                        <div class="body">
                                            <h2 class="title">Học tập qua dự án</h2>
                                            <p class="text-desc">Blood and Oil là một tác phẩm báo chí điều tra hấp dẫn mô tả kỹ lưỡng kế hoạch kinh tế mới đầy tham vọng dành cho Ả Rập Xê Út  trong thế giới dầu mỏ và chính trị của Thái tử Mohammed bin Salman (MBS).

                                                Có lẽ không nhiều người biết đến cái tên Mohammed bin Salman (MBS) cho tới khi cha của ông trở thành Quốc vương Ả-rập Xê-út năm 2015. Từ thời điểm đó, Salman bắt đầu được chú ý và dần trở thành một trong những nhân vật có tầm ảnh hưởng nhất chính trường Trung Đông. MBS đã nổi lên như một nhân vật quyết định, quyết tâm tái thiết nền kinh tế dựa vào các nguồn lực khác ngoài dầu mỏ để đưa Ả-rập Xê-út hội nhập vào nền kinh tế thế giới. Trong cuốn sách Dầu và máu mà các bạn sắp đọc, hai tác giả Bradley Hope và Justin Scheck sẽ khắc họa một cách sâu sắc chân dung của vị thái tử táo bạo và không kém phần lôi cuốn này. Cuốn sách bắt đầu với một cái nhìn tổng quan về Ả-rập Xê-út và vai trò của dầu mỏ trong nền kinh tế và chính trị của quốc gia. Tác giả đã đi sâu vào cuộc hành trình của MBS từ khi ông là Thái tử cho đến các quyết định quan trọng về kinh tế và chính trị mà ông đã đưa ra. Ở một gia tộc đã quá quen với sự xa hoa và hào phóng có được nhờ sự phụ thuộc không lành mạnh vào dầu mỏ, MBS lại là một nhân tố khác biệt. MBS đặt mục tiêu trở thành người thừa kế ngai vàng của Ả-rập Xê-út và khi hai người anh trai của cha ông lần lượt qua đời và Salman trở thành quốc vương vào năm 2015, ông muốn nắm bắt thời cơ và để cải thiện vận mệnh của chính mình, đồng thời theo đuổi tham vọng biến Ả-rập Xê-út trở thành “châu Âu mới”. Vị thái tử với tư tưởng cải cách mạnh mẽ và tân tiến này phải trải qua một quá trình không hề dễ dàng để có thể khiến Ả-rập Xê-út thoát khỏi bệ đỡ quá lớn mang tên dầu mỏ.

                                                Dầu Và Máu không chỉ là một cuốn sách đơn thuần về chính trị và kinh tế, mà còn là một tác phẩm văn học, là một câu chuyện tuyệt vời về quyền lực, tham vọng và những biến động của thế giới hiện đại. Nhiều câu chuyện trong cuốn sách có thể còn gây nhiều tranh cãi, nhưng đây cũng là một cái nhìn mới cho độc giả, một cơ hội để hiểu rõ hơn về những sức mạnh và mâu thuẫn địa chính trị đang định hình thế giới xung quanh chúng ta. Cuốn sách cũng làm cho độc giả hiểu hơn về một Trung Đông phát triển về kinh tế và đang dần độc lập về chính trị nơi tôi cũng đã có dịp ghé thăm và làm việc lâu dài.</p>
                                        </div>
                                    </div>

                                    <div class="table-desc">
                                        <div class="text">Thông tin chi tiết</div>
                                        <table class="table">
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

                                    <div class="tab-comment">
                                        <div class="text">Bình luận sản phẩm</div>

                                        <div class="comment-form">
                                            <form>
                                                <div class="form-group">
                                                    <label for="name">Tên của bạn</label>
                                                    <input type="text" id="name" placeholder="Nhập tên của bạn" required />
                                                </div>
                                                <div class="form-group">
                                                    <label for="email">Email</label>
                                                    <input type="email" id="email" placeholder="Nhập email của bạn" required />
                                                </div>
                                                <div class="form-group">
                                                    <label for="comment">Bình luận</label>
                                                    <textarea id="comment" placeholder="Nhập nội dung bình luận" required></textarea>
                                                </div>
                                                <div class="form-group">
                                                    <Button primary >Gửi</Button>
                                                </div>
                                            </form>
                                        </div>

                                    </div>

                                    <div class="user-comment">
                                        <div class="item">
                                            <div class="info">
                                                <img class="img-user" src="/img/user-1.png" alt="User" />
                                                <div class="username">Nguyễn Minh Thịnh</div>
                                            </div>
                                            <div class="date">2021-08-17
                                                <span>20:40:10</span>
                                            </div>
                                            <div class="content-comment">
                                                <p>Sách được bọc nilong kỹ càng, sạch, mới. Giao hàng nhanh. Nội dung chưa đọc nhưng nhìn sơ có vẻ hấp dẫn và rất nhiều kiến thức bổ ích. Mình ở nước ngoài nhờ
                                                    người mua rồi gửi qua nên khâu đóng gói của người bán quan trọng lắm, giúp cho sách vận chuyển đi xa cũng không bị hư tổn gì. Sẽ tiếp tục ủng hộ. Love book
                                                    shop .From Hust with LOve</p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="info">
                                                <img class="img-user" src="/img/user-1.png" alt="User" />
                                                <div class="username">Nguyễn Minh Thịnh</div>
                                            </div>
                                            <div class="date">2021-08-17
                                                <span>20:40:10</span>
                                            </div>
                                            <div class="content-comment">
                                                <p>Sách được bọc nilong kỹ càng, sạch, mới. Giao hàng nhanh. Nội dung chưa đọc nhưng nhìn sơ có vẻ hấp dẫn và rất nhiều kiến thức bổ ích. Mình ở nước ngoài nhờ
                                                    người mua rồi gửi qua nên khâu đóng gói của người bán quan trọng lắm, giúp cho sách vận chuyển đi xa cũng không bị hư tổn gì. Sẽ tiếp tục ủng hộ. Love book
                                                    shop .From Hust with LOve</p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="info">
                                                <img class="img-user" src="/img/user-1.png" alt="User" />
                                                <div class="username">Nguyễn Minh Thịnh</div>
                                            </div>
                                            <div class="date">2021-08-17
                                                <span>20:40:10</span>
                                            </div>
                                            <div class="content-comment">
                                                <p>Sách được bọc nilong kỹ càng, sạch, mới. Giao hàng nhanh. Nội dung chưa đọc nhưng nhìn sơ có vẻ hấp dẫn và rất nhiều kiến thức bổ ích. Mình ở nước ngoài nhờ
                                                    người mua rồi gửi qua nên khâu đóng gói của người bán quan trọng lắm, giúp cho sách vận chuyển đi xa cũng không bị hư tổn gì. Sẽ tiếp tục ủng hộ. Love book
                                                    shop .From Hust with LOve</p>
                                            </div>
                                        </div>
                                        <div class="item">
                                            <div class="info">
                                                <img class="img-user" src="/img/user-1.png" alt="User" />
                                                <div class="username">Nguyễn Minh Thịnh</div>
                                            </div>
                                            <div class="date">2021-08-17
                                                <span>20:40:10</span>
                                            </div>
                                            <div class="content-comment">
                                                <p>Sách được bọc nilong kỹ càng, sạch, mới. Giao hàng nhanh. Nội dung chưa đọc nhưng nhìn sơ có vẻ hấp dẫn và rất nhiều kiến thức bổ ích. Mình ở nước ngoài nhờ
                                                    người mua rồi gửi qua nên khâu đóng gói của người bán quan trọng lắm, giúp cho sách vận chuyển đi xa cũng không bị hư tổn gì. Sẽ tiếp tục ủng hộ. Love book
                                                    shop .From Hust with LOve</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
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
                                        <p class="product-list-name">
                                            24 Bài Học Thần Kì Nhất Thế Giới - Bizbooks
                                        </p>
                                        <p class="price-sale">143.200₫</p>
                                        <p class="price">160.000đ</p>
                                    </div>
                                </div>

                                <div class="product-list-item">
                                    <img src="/img/product-3.png" alt="Sản phẩm 2" />
                                    <div class="product-list-info">
                                        <p class="product-list-name">
                                            30 tuổi - mọi thứ chỉ mới bắt đầu - Lý Thượng Long
                                            (Saigon Books)
                                        </p>
                                        <p class="price-sale">108.000₫</p>
                                        <p class="price">130.000đ</p>
                                    </div>
                                </div>

                                <div class="product-list-item">
                                    <img src="/img/product-4.png" alt="Sản phẩm 3" />
                                    <div class="product-list-info">
                                        <p class="product-list-name">
                                            45 Giây Tạo Nên Thay Đổi - Thấu Hiểu Tiếp Thị Mạng Lưới
                                            - NXB trẻ
                                        </p>
                                        <p class="price-sale">150.000₫</p>
                                        <p class="price">186.000đ</p>
                                    </div>
                                </div>

                                <div class="product-list-item">
                                    <img src="/img/product-5.png" alt="Sản phẩm 3" />
                                    <div class="product-list-info">
                                        <p class="product-list-name">
                                            365 Ngày Đầu Tiên Ở Xứ Sở Hoa Anh Đào - Hành Trình Du
                                            Học Ở Tuổi 15
                                        </p>
                                        <p class="price-sale">201.000₫</p>
                                        <p class="price">250.000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="product-similar">
                        <div className="content">
                            <div class="title-product">Sản phẩm tương tự</div>
                            <div className="list-product">
                                <div className="item">
                                    <Link href="#!">
                                        <img src="/img/product-1.png" alt="Nikko Apartments" className="thumb" />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">My Hero Academia - Tập 27: One’s Justice</Link>
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
                                        <img src="/img/product-1.png" alt="Nikko Apartments" className="thumb" />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">My Hero Academia - Tập 27: One’s Justice</Link>
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
                                        <img src="/img/product-1.png" alt="Nikko Apartments" className="thumb" />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">My Hero Academia - Tập 27: One’s Justice</Link>
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
                                        <img src="/img/product-1.png" alt="Nikko Apartments" className="thumb" />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">My Hero Academia - Tập 27: One’s Justice</Link>
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
                                        <img src="/img/product-1.png" alt="Nikko Apartments" className="thumb" />
                                    </Link>
                                    <div className="body">
                                        <h3 className="title">
                                            <Link href="#!">My Hero Academia - Tập 27: One’s Justice</Link>
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
        </>
    )
}