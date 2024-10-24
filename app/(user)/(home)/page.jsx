import '@/public/styles/main.scss'
import { Banner } from '@/components/banner'
import MainLayout from '@/layouts/main-layout'
import { ProductList } from '@/components/product-list'

export default function Home() {
    return (
        <MainLayout>
            <main style={{ background: '#F5F5FA' }}>
                <Banner />
                {/* <!-- Products Hot --> */}
                <div className="product-hot">
                    <div className="content">
                        <div className="title-hot">
                            <img src="/img/icon-hot.svg" alt="" />
                            <h2 className="sub-title">TOP SÁCH BÁN CHẠY</h2>
                        </div>

                        <div className="list-product">
                            <ProductList />
                        </div>
                    </div>
                </div>

                {/* <!-- Banner-sale --> */}
                <div className="banner-sale">
                    <div className="content">
                        <div className="row">
                            <img src="/img/banner-sale-1.svg" alt="" className="img" />
                            <img src="/img/banner-sale-2.svg" alt="" className="img" />
                        </div>
                    </div>
                </div>

                {/* Home Products */}
                <div className="home-product">
                    <div className="content">
                        <div className="title-cate">
                            <a href="#!">SÁCH TƯ DUY - KỸ NĂNG</a>
                        </div>
                        <img
                            className="img-cate"
                            src="/img/sachtuduy-kynang.png"
                            alt="Sách tư duy - kỹ năng"
                        />
                        <div className="list-product">
                            <ProductList />
                        </div>
                    </div>
                    <div className="content">
                        <div className="title-cate">
                            <a href="#!">SÁCH KINH TẾ - TÀI CHÍNH</a>
                        </div>
                        <img
                            className="img-cate"
                            src="/img/sachkinhte-taichinh.png"
                            alt="Sách tư duy - kỹ năng"
                        />
                        <div className="list-product">
                            <ProductList />
                        </div>
                    </div>
                    <div className="content">
                        <div className="title-cate">
                            <a href="#!">TỦ SÁCH GIA ĐÌNH</a>
                        </div>
                        <img
                            className="img-cate"
                            src="/img/tusachgiadinh.png"
                            alt="Sách tư duy - kỹ năng"
                        />
                        <div className="list-product">
                            <ProductList />
                        </div>
                    </div>
                    <div className="content">
                        <div className="title-cate">
                            <a href="#!">SÁCH LỊCH SỬ - CHÍNH TRỊ</a>
                        </div>
                        <img
                            className="img-cate"
                            src="/img/sachlichsu-chinhtri.png"
                            alt="Sách tư duy - kỹ năng"
                        />
                        <div className="list-product">
                            <ProductList />
                        </div>
                    </div>
                </div>

                {/* Review Products */}
                <div className="review-product">
                    <div className="content">
                        <h2 className="title">Review sách hay</h2>
                        <div className="list-review">
                            <div className="item">
                                <div className="image">
                                    <a href="#!">
                                        <img
                                            src="/img/review.jpg"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </a>
                                    <span className="date">12/08/2004</span>
                                </div>
                                <div className="body">
                                    <h3>
                                        <a href="#!" className="sub-title-review">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <a href="#!">
                                        <img
                                            src="/img/review.jpg"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </a>
                                    <span className="date">12/08/2004</span>
                                </div>
                                <div className="body">
                                    <h3>
                                        <a href="#!" className="sub-title-review">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <a href="#!">
                                        <img
                                            src="/img/review.jpg"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </a>
                                    <span className="date">12/08/2004</span>
                                </div>
                                <div className="body">
                                    <h3>
                                        <a href="#!" className="sub-title-review">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <a href="#!">
                                        <img
                                            src="/img/review.jpg"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </a>
                                    <span className="date">12/08/2004</span>
                                </div>
                                <div className="body">
                                    <h3>
                                        <a href="#!" className="sub-title-review">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <a href="#!">
                                        <img
                                            src="/img/review.jpg"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </a>
                                    <span className="date">12/08/2004</span>
                                </div>
                                <div className="body">
                                    <h3>
                                        <a href="#!" className="sub-title-review">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <a href="#!">
                                        <img
                                            src="/img/review.jpg"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </a>
                                    <span className="date">12/08/2004</span>
                                </div>
                                <div className="body">
                                    <h3>
                                        <a href="#!" className="sub-title-review">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <a href="#!">
                                        <img
                                            src="/img/review.jpg"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </a>
                                    <span className="date">12/08/2004</span>
                                </div>
                                <div className="body">
                                    <h3>
                                        <a href="#!" className="sub-title-review">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </a>
                                    </h3>
                                </div>
                            </div>
                            <div className="item">
                                <div className="image">
                                    <a href="#!">
                                        <img
                                            src="/img/review.jpg"
                                            alt="Nikko Apartments"
                                            className="thumb"
                                        />
                                    </a>
                                    <span className="date">12/08/2004</span>
                                </div>
                                <div className="body">
                                    <h3>
                                        <a href="#!" className="sub-title-review">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </a>
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}
