'use client'
import '@/public/styles/main.scss'
import { MainBanner } from '@/components/banner/main-banner'
import MainLayout from '@/layouts/main-layout'
import { ProductList } from '@/components/product-list'
import { useEffect, useState } from 'react'
import { productApiRequest } from '@/apiRequests/product'
import { handleHttpError } from '@/lib/utils'
import { ToastError } from '@/components/ui/ToastError'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'
import { reviewApiRequest } from '@/apiRequests/post'
import ReviewHome from '@/components/review-home/page'
import Introduce from '@/components/introduce/introduce'
import { BannerSale } from '@/components/banner/banner-sale'

export default function Home() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState('')

    const [booksBestSeller, setBooksBestSeller] = useState([])
    const [newEstBooks, setNewEstBooks] = useState([])
    const [review, setReview] = useState([])

    const fetchReview = async () => {
        const result = await reviewApiRequest.getAllPost()
        setReview(result.payload.data)
    }

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

    const fetchNewEstBooks = async () => {
        if (loading) return
        setError(null)
        setLoading(true)
        try {
            const result = await productApiRequest.getNewBook()
            setNewEstBooks(result.payload.data.slice(0, 10))
        } catch (error) {
            handleHttpError(error, setError)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchBooksBestSeller()
        fetchNewEstBooks()
        fetchReview()
    }, [])

    if (loading) return <LoadingSkeleton />

    return (
        <MainLayout>
            <ToastError errorMessage={error} />
            <main style={{ background: '#F5F5FA' }}>
                <MainBanner />

                <Introduce />

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

                <BannerSale />

                <div className="product-hot">
                    <div className="content">
                        <div className="title-hot">
                            <img src="/img/icon-hot.svg" alt="" />
                            <h2 className="sub-title">TOP SÁCH MỚI NHẤT</h2>
                        </div>

                        <div className="list-product">
                            <ProductList title="" seeMore={true} data={newEstBooks} />
                        </div>
                    </div>
                </div>

                {/* <div className="home-product">
                    <div className="content">
                        <div className="title-cate">
                            <a href="#!">TOP SÁCH MỚI NHẤT</a>
                        </div>

                        <div className="list-product">
                            <ProductList title="" seeMore={true} data={newEstBooks} />
                        </div>
                    </div>
                </div> */}

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
