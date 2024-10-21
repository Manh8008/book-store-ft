import ReviewBookList from '@/components/review-book/review-book'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import '@/public/styles/review-book.scss'

export default function ReviewBook() {
    return (
        <>
            <main style={{ background: '#EEEEEE' }}>
                <div className="beardcrumb">
                    <Beardcrumb />
                </div>
                <div className="home-news">
                    <div className="content">
                        <div className="wrap-news">
                            <div className="top-posts">
                                <div className="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết kinh tế tài chính" />
                                    <div className="caption">
                                        <h3 className="post-title">
                                            Tiêu đề bài viết kinh tế tài chính
                                        </h3>
                                        <p className="post-date">17/10/2024</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết khác" />
                                    <div className="caption">
                                        <h3 className="post-title">
                                            NHỮNG THÁCH THỨC CỦA NHÀ LÃNH ĐẠO
                                        </h3>
                                        <p className="post-date">18/10/2024</p>
                                    </div>
                                </div>
                            </div>

                            <div className="bottom-posts">
                                <div className="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết 3" />
                                    <div className="caption">
                                        <h3 className="post-title">
                                            Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp
                                            ra mắt độc giả Việt Nam “NEXUS: A Brief History of
                                            Information Networks from the Stone Age to AI”
                                        </h3>
                                        <p className="post-date">19/10/2024</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết 4" />
                                    <div className="caption">
                                        <h3 className="post-title">
                                            Review sách: Nền Giáo Dục Của Người Giàu - Những Bài Học
                                            Để Thành Công Chỉ Trường Đời Mới Dạy
                                        </h3>
                                        <p className="post-date">20/10/2024</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết 5" />
                                    <div className="caption">
                                        <h3 className="post-title">
                                            Thiết Kế Game Nâng Cao – Nâng Nghệ Thuật Thiết Kế Game
                                            Lên Tầm Cao Mới
                                        </h3>
                                        <p className="post-date">21/10/2024</p>
                                    </div>
                                </div>
                                <div className="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết 6" />
                                    <div className="caption">
                                        <h3 className="post-title">
                                            “Chuyển đổi số - năm giai đoạn triển khai công nghệ số
                                            cho doanh nghiệp”: Các bước chuyển đổi số trong doanh
                                            nghiệp
                                        </h3>
                                        <p className="post-date">22/10/2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="list-new">
                            <div className="main-left">
                                <ReviewBookList />
                                <hr />
                                <ReviewBookList />
                                <hr />
                                <ReviewBookList />
                                <hr />
                                <ReviewBookList />
                            </div>
                            <div className="main-right">
                                <div className="sidebar-category">
                                    <div className="title">
                                        <h3>Danh mục tin</h3>
                                    </div>
                                    <div className="content-category">
                                        <div className="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" className="nav-link">
                                                Giới thiệu
                                            </a>
                                        </div>
                                        <div className="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" className="nav-link">
                                                Tiếp thị liên kết
                                            </a>
                                        </div>
                                        <div className="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" className="nav-link">
                                                Hỗ trợ
                                            </a>
                                        </div>
                                        <div className="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" className="nav-link">
                                                Blog
                                            </a>
                                        </div>
                                        <div className="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" className="nav-link">
                                                Tuyển dụng
                                            </a>
                                        </div>
                                        <div className="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" className="nav-link">
                                                Review sách
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="sidebar-hotnews">
                                    <div className="title">
                                        <h3>Tin nổi bật</h3>
                                    </div>
                                    <div className="content-hotnews">
                                        <div className="item">
                                            <div className="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="body">
                                                <a href="#!">
                                                    <div className="title-post">
                                                        Bản tiếng Việt cuốn sách mới của Yuval Noah
                                                        Harari sắp ra mắt độc giả Việt Nam “NEXUS: A
                                                        Brief History of Information Networks from
                                                        the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div className="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="item">
                                            <div className="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="body">
                                                <a href="#!">
                                                    <div className="title-post">
                                                        Bản tiếng Việt cuốn sách mới của Yuval Noah
                                                        Harari sắp ra mắt độc giả Việt Nam “NEXUS: A
                                                        Brief History of Information Networks from
                                                        the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div className="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="item">
                                            <div className="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="body">
                                                <a href="#!">
                                                    <div className="title-post">
                                                        Bản tiếng Việt cuốn sách mới của Yuval Noah
                                                        Harari sắp ra mắt độc giả Việt Nam “NEXUS: A
                                                        Brief History of Information Networks from
                                                        the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div className="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="item">
                                            <div className="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="body">
                                                <a href="#!">
                                                    <div className="title-post">
                                                        Bản tiếng Việt cuốn sách mới của Yuval Noah
                                                        Harari sắp ra mắt độc giả Việt Nam “NEXUS: A
                                                        Brief History of Information Networks from
                                                        the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div className="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div className="item">
                                            <div className="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div className="body">
                                                <a href="#!">
                                                    <div className="title-post">
                                                        Bản tiếng Việt cuốn sách mới của Yuval Noah
                                                        Harari sắp ra mắt độc giả Việt Nam “NEXUS: A
                                                        Brief History of Information Networks from
                                                        the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div className="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
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
