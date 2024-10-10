import Image from "next/image";
import '@/public/css/style.css';
import Banner from "@/components/banner";
import ProductHot from "@/components/productHot";
import Footer from "@/components/footer";
import ProductCard from "@/components/productCard";

export default function Home() {
  return (
    <>
      {/* <!-- Main --> */}
      <main style={{ background: "#EEEEEE" }}>
        {/* <!-- Banner --> */}
        <Banner />

        {/* <!-- Products Hot --> */}
        <div className="product-hot">
          <div className="content">
            <div className="title-hot">
              <img src="/img/icon-hot.svg" alt="" />
              <h2 className="sub-title">TOP SÁCH BÁN CHẠY</h2>
            </div>

            <div className="list-product">
              <ProductHot />
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
        <div class="home-product">
          <div class="content">
            <div class="title-cate">
              <a href="#!">SÁCH TƯ DUY - KỸ NĂNG</a>
            </div>
            <img class="img-cate" src="/img/sachtuduy-kynang.png" alt="Sách tư duy - kỹ năng" />
            <div class="list-product">
              <ProductCard />
            </div>
          </div>
          <div class="content">
            <div class="title-cate">
              <a href="#!">SÁCH KINH TẾ - TÀI CHÍNH</a>
            </div>
            <img class="img-cate" src="/img/sachkinhte-taichinh.png" alt="Sách tư duy - kỹ năng" />
            <div class="list-product">
              <ProductCard />
            </div>
          </div>
          <div class="content">
            <div class="title-cate">
              <a href="#!">TỦ SÁCH GIA ĐÌNH</a>
            </div>
            <img class="img-cate" src="/img/tusachgiadinh.png" alt="Sách tư duy - kỹ năng" />
            <div class="list-product">
              <ProductCard />
            </div>
          </div>
          <div class="content">
            <div class="title-cate">
              <a href="#!">SÁCH LỊCH SỬ - CHÍNH TRỊ</a>
            </div>
            <img class="img-cate" src="/img/sachlichsu-chinhtri.png" alt="Sách tư duy - kỹ năng" />
            <div class="list-product">
              <ProductCard />
            </div>
          </div>
        </div>

        {/* Review Products */}
        <div class="review-product">
          <div class="content">
            <h2 class="title">Review sách hay</h2>
            <div class="list-review">
              <div class="item">
                <div class="image">
                  <a href="#!">
                    <img src="/img/review.jpg" alt="Nikko Apartments" class="thumb" />
                  </a>
                  <span class="date">12/08/2004</span>
                </div>
                <div class="body">
                  <h3><a href="#!" class="sub-title-review">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</a></h3>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <a href="#!">
                    <img src="/img/review.jpg" alt="Nikko Apartments" class="thumb" />
                  </a>
                  <span class="date">12/08/2004</span>
                </div>
                <div class="body">
                  <h3><a href="#!" class="sub-title-review">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</a></h3>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <a href="#!">
                    <img src="/img/review.jpg" alt="Nikko Apartments" class="thumb" />
                  </a>
                  <span class="date">12/08/2004</span>
                </div>
                <div class="body">
                  <h3><a href="#!" class="sub-title-review">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</a></h3>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <a href="#!">
                    <img src="/img/review.jpg" alt="Nikko Apartments" class="thumb" />
                  </a>
                  <span class="date">12/08/2004</span>
                </div>
                <div class="body">
                  <h3><a href="#!" class="sub-title-review">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</a></h3>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <a href="#!">
                    <img src="/img/review.jpg" alt="Nikko Apartments" class="thumb" />
                  </a>
                  <span class="date">12/08/2004</span>
                </div>
                <div class="body">
                  <h3><a href="#!" class="sub-title-review">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</a></h3>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <a href="#!">
                    <img src="/img/review.jpg" alt="Nikko Apartments" class="thumb" />
                  </a>
                  <span class="date">12/08/2004</span>
                </div>
                <div class="body">
                  <h3><a href="#!" class="sub-title-review">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</a></h3>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <a href="#!">
                    <img src="/img/review.jpg" alt="Nikko Apartments" class="thumb" />
                  </a>
                  <span class="date">12/08/2004</span>
                </div>
                <div class="body">
                  <h3><a href="#!" class="sub-title-review">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</a></h3>
                </div>
              </div>
              <div class="item">
                <div class="image">
                  <a href="#!">
                    <img src="/img/review.jpg" alt="Nikko Apartments" class="thumb" />
                  </a>
                  <span class="date">12/08/2004</span>
                </div>
                <div class="body">
                  <h3><a href="#!" class="sub-title-review">Bản tiếng Việt cuốn sách mới của Yuval Noah Harari sắp ra mắt độc giả Việt Nam “NEXUS: A Brief History of Information Networks from the Stone Age to AI”</a></h3>
                </div>
              </div>
            </div>
          </div>
        </div>


      </main>
    </>
  );
}
