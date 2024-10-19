import ReviewBookList from "@/components/review-book/review-book";
import { Beardcrumb } from "@/components/ui/breadcrumb";
import '@/public/styles/review-book.scss';

export default function ReviewBook() {
    return (
        <>
            <main style={{ background: '#EEEEEE' }}>
                <div class="beardcrumb">
                    <Beardcrumb />
                </div>
                <div className="home-news">
                    <div className="content">
                        <div class="wrap-news">
                            <div class="top-posts">
                                <div class="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết kinh tế tài chính" />
                                    <div class="caption">
                                        <h3 class="post-title">Tiêu đề bài viết kinh tế tài chính</h3>
                                        <p class="post-date">17/10/2024</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết khác" />
                                    <div class="caption">
                                        <h3 class="post-title">NHỮNG THÁCH THỨC CỦA NHÀ LÃNH ĐẠO</h3>
                                        <p class="post-date">18/10/2024</p>
                                    </div>
                                </div>
                            </div>

                            <div class="bottom-posts">
                                <div class="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết 3" />
                                    <div class="caption">
                                        <h3 class="post-title">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</h3>
                                        <p class="post-date">19/10/2024</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết 4" />
                                    <div class="caption">
                                        <h3 class="post-title">Review sách: Nền Giáo Dục Của Người Giàu - Những Bài Học Để Thành Công Chỉ Trường Đời Mới Dạy</h3>
                                        <p class="post-date">20/10/2024</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết 5" />
                                    <div class="caption">
                                        <h3 class="post-title">Thiết Kế Game Nâng Cao – Nâng Nghệ Thuật Thiết Kế Game Lên Tầm Cao Mới</h3>
                                        <p class="post-date">21/10/2024</p>
                                    </div>
                                </div>
                                <div class="item">
                                    <img src="/img/review-1.jpg" alt="Bài viết 6" />
                                    <div class="caption">
                                        <h3 class="post-title">“Chuyển đổi số - năm giai đoạn triển khai công nghệ số cho doanh nghiệp”: Các bước chuyển đổi số trong doanh nghiệp</h3>
                                        <p class="post-date">22/10/2024</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="list-new">
                            <div class="main-left">
                                <ReviewBookList />
                                <hr />
                                <ReviewBookList />
                                <hr />
                                <ReviewBookList />
                                <hr />
                                <ReviewBookList />
                            </div>
                            <div class="main-right">
                                <div class="sidebar-category">
                                    <div class="title">
                                        <h3>Danh mục tin</h3>
                                    </div>
                                    <div class="content-category">
                                        <div class="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" class="nav-link">Giới thiệu</a>
                                        </div>
                                        <div class="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" class="nav-link">Tiếp thị liên kết</a>
                                        </div>
                                        <div class="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" class="nav-link">Hỗ trợ</a>
                                        </div>
                                        <div class="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" class="nav-link">Blog</a>
                                        </div>
                                        <div class="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" class="nav-link">Tuyển dụng</a>
                                        </div>
                                        <div class="nav-item">
                                            <i className="fa-solid fa-chevron-right"></i>
                                            <a href="#!" class="nav-link">Review sách</a>
                                        </div>
                                    </div>
                                </div>
                                <div class="sidebar-hotnews">
                                    <div class="title">
                                        <h3>Tin nổi bật</h3>
                                    </div>
                                    <div class="content-hotnews">
                                        <div class="item">
                                            <div class="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="body">
                                                <a href="#!">
                                                    <div class="title-post">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div class="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="item">
                                            <div class="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="body">
                                                <a href="#!">
                                                    <div class="title-post">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div class="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="item">
                                            <div class="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="body">
                                                <a href="#!">
                                                    <div class="title-post">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div class="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="item">
                                            <div class="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="body">
                                                <a href="#!">
                                                    <div class="title-post">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div class="date">12/08/2024</div>
                                            </div>
                                        </div>
                                        <hr />
                                        <div class="item">
                                            <div class="img-post">
                                                <a href="#!">
                                                    <img src="/img/review.jpg" alt="" />
                                                </a>
                                            </div>
                                            <div class="body">
                                                <a href="#!">
                                                    <div class="title-post">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”
                                                    </div>
                                                </a>
                                                <div class="date">12/08/2024</div>
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
    );
}