'use client'
import '@/public/styles/main.scss'
import { Banner } from '@/components/banner'
import MainLayout from '@/layouts/main-layout'
import { ProductList } from '@/components/product-list'
import { useEffect, useState } from 'react'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import { reviewApiRequest } from '@/apiRequests/review'
import ReviewHome from '@/components/review-home/page'

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [booksBestSeller, setBooksBestSeller] = useState([])
    //Sách tư duy kỹ năng
    const [thinkingSkillsBook, setThinkingSkillsBook] = useState([])
    //sách kinh tế tài chính
    const [financialEconomicsBooks, setFinancialEconomicsBooks] = useState([])
    //sách gia đình
    const [educationalScienceBooks, setEducationalScienceBooks] = useState([])
    //sách lịch sử chính trị
    const [politicalBooks, setPoliticalBooks] = useState([])
    // Bài viết trang chủ
    const [review, setReview] = useState([]);

    const fetchReview = async () => {
        const result = await reviewApiRequest.getAllPost();
        setReview(result.payload.data);
    }

    useEffect(() => {
        fetchReview();
    }, [])

    console.log(review);

    const fetchBooksBestSeller = async () => {
        if (loading) return
        setError(null)
        setLoading(true)
        try {
            const result = await productApiRequest.getBooksBestSeller()
            setBooksBestSeller(result.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    const fetchBooks = async () => {
        if (loading) return
        setError(null)
        setLoading(true)
        try {
            const [thinkingSkills, financialEconomics, educationalScience, political] =
                await Promise.all([
                    productApiRequest.getBookByCatalog(1),
                    productApiRequest.getBookByCatalog(5),
                    productApiRequest.getBookByCatalog(3),
                    productApiRequest.getBookByCatalog(2)
                ])
            if (thinkingSkills.status === 200) setThinkingSkillsBook(thinkingSkills.payload.data)
            if (financialEconomics.status === 200)
                setFinancialEconomicsBooks(financialEconomics.payload.data)
            if (educationalScience.status === 200)
                setEducationalScienceBooks(educationalScience.payload.data)
            if (political.status === 200) setPoliticalBooks(political.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBooksBestSeller()
    }, [])

    useEffect(() => {
        fetchBooks()
    }, [])

    if (loading) return <LoadingSkeleton />

    return (
        <MainLayout>
            <ToastError errorMessage={error} />
            <main style={{ background: '#F5F5FA' }}>
                <Banner />
                <div className="product-hot">
                    <div className="content">
                        <div className="title-hot">
                            <img src="/img/icon-hot.svg" alt="" />
                            <h2 className="sub-title">TOP SÁCH BÁN CHẠY</h2>
                        </div>

                        <div className="list-product">
                            <ProductList title="" seeMore={false} data={booksBestSeller} />
                        </div>
                    </div>
                </div>

                {/* <div className="banner-sale">
                    <div className="content">
                        <div className="row">
                            <img src="/img/banner-sale-1.svg" alt="" className="img" />
                            <img src="/img/banner-sale-2.svg" alt="" className="img" />
                        </div>
                    </div>
                </div> */}

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
                            <ProductList title="" seeMore={true} data={thinkingSkillsBook} />
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
                            <ProductList title="" seeMore={true} data={financialEconomicsBooks} />
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
                            {' '}
                            <ProductList title="" seeMore={true} data={educationalScienceBooks} />
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
                            <ProductList title="" seeMore={true} data={politicalBooks} />
                        </div>
                    </div>
                </div>

                {/* Review Products */}
                <div className="review-product">
                    <div className="content">
                        <h2 className="title">Review sách hay</h2>
                        <div className="list-review">
                            <ReviewHome data={review}></ReviewHome>
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}
