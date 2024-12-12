'use client'
import React from 'react'
import { useEffect, useState, useMemo } from 'react'
import MainLayout from '@/layouts/main-layout'
import { MainBanner } from '@/components/banner/main-banner'
import { BannerSale } from '@/components/banner/banner-sale'
import { bannerApiRequest } from '@/apiRequests/banner'
import { ProductList } from '@/components/product-list'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import { reviewApiRequest } from '@/apiRequests/post'
import ReviewHome from '@/components/review-home/page'
import Introduce from '@/components/introduce/introduce'
import '@/public/styles/main.scss'

const MemoizedProductList = React.memo(ProductList)
const MemoizedReviewHome = React.memo(ReviewHome)
const MemoizedIntroduce = React.memo(Introduce)

export default function Home() {
    // Tách state loading riêng cho từng phần
    const [loadingStates, setLoadingStates] = useState({
        bestSeller: false,
        newBooks: false,
        review: false,
        banner: false
    })
    const [error, setError] = useState('')

    const [booksBestSeller, setBooksBestSeller] = useState([])
    const [newEstBooks, setNewEstBooks] = useState([])
    const [review, setReview] = useState([])
    const [banner, setBanner] = useState([])

    const fetchData = async () => {
        try {
            // Fetch data song song
            const [bestSellerRes, newBooksRes, reviewRes, bannerRes] = await Promise.all([
                productApiRequest.getBooksBestSeller(),
                productApiRequest.getNewBook(),
                reviewApiRequest.getAllPost(),
                bannerApiRequest.getAllBanner()
            ])

            setBooksBestSeller(bestSellerRes.payload.data)
            setNewEstBooks(newBooksRes.payload.data.slice(0, 10))
            setReview(reviewRes.payload.data)
            setBanner(bannerRes.payload.data)
        } catch (error) {
            handleHttpError(error, setError)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    // Chỉ hiện loading skeleton cho phần đang load
    const isLoading = Object.values(loadingStates).some((state) => state)
    if (isLoading) {
        return <LoadingSkeleton />
    }

    return (
        <MainLayout>
            <ToastError errorMessage={error} />
            <main style={{ background: '#F5F5FA' }}>
                <MainBanner data={banner} />
                <MemoizedIntroduce />

                <div className="product-hot">
                    <div className="content">
                        <div className="title-hot">
                            <img src="/img/icon-hot.svg" alt="" />
                            <h2 className="sub-title">TOP SÁCH BÁN CHẠY</h2>
                        </div>

                        <MemoizedProductList title="" seeMore={'/shop'} data={booksBestSeller} />
                    </div>
                </div>

                <BannerSale />

                <div className="product-hot">
                    <div className="content">
                        <div className="title-hot">
                            <img src="/img/icon-hot.svg" alt="" />
                            <h2 className="sub-title">TOP SÁCH MỚI NHẤT</h2>
                        </div>

                        <MemoizedProductList title="" seeMore={'/shop'} data={newEstBooks} />
                    </div>
                </div>

                <div className="review-product">
                    <div className="content">
                        <h2 className="title">Review sách hay</h2>
                        <div className="list-review">
                            <MemoizedReviewHome data={review} />
                        </div>
                    </div>
                </div>
            </main>
        </MainLayout>
    )
}
