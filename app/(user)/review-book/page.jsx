'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'

import { reviewApiRequest } from '@/apiRequests/post'
import ReviewBookList from '@/components/review-book/review-book'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import '@/public/styles/review-book.scss'

export default function ReviewBook() {
    const [review, setReview] = useState([])

    const fetchReview = async () => {
        const result = await reviewApiRequest.getAllPost()
        setReview(result.payload.data)
    }

    useEffect(() => {
        fetchReview()
    }, [])

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }

    return (
        <>
            <main style={{ background: '#F5F5FA' }}>
                <div className="beardcrumb">
                    <Beardcrumb />
                </div>
                <div className="home-news">
                    <div className="content">
                        <div className="wrap-news">
                            <div className="top-posts">
                                {review
                                    .slice(-2)
                                    .reverse()
                                    .map((review) => (
                                        <div className="item" key={review.id}>
                                            <Link href={`/reviewBook-detail/${review.id}`}>
                                                <img src={review.image_url} alt={review.title} />
                                            </Link>
                                            <div className="caption">
                                                <Link href={`/reviewBook-detail/${review.id}`}>
                                                    <h3 className="post-title">{review.title}</h3>
                                                </Link>
                                                <p className="post-date">
                                                    {formatDate(review.created_at)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                            </div>

                            <div className="bottom-posts">
                                {review.slice(0, 4).map((review) => (
                                    <div className="item" key={review.id}>
                                        <Link href={`/reviewBook-detail/${review.id}`}>
                                            <img src={review.image_url} alt={review.title} />
                                        </Link>
                                        <div className="caption">
                                            <Link href={`/reviewBook-detail/${review.id}`}>
                                                <h3 className="post-title">{review.title}</h3>
                                            </Link>
                                            <p className="post-date">
                                                {formatDate(review.created_at)}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="list-new">
                            <div className="main-left">
                                <ReviewBookList data={review} />
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
                                        {review.map((review) => (
                                            <div className="item" key={review.id}>
                                                <div className="img-post">
                                                    <Link href={`/reviewBook-detail/${review.id}`}>
                                                        <img src={review.image_url} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="body">
                                                    <Link href={`/reviewBook-detail/${review.id}`}>
                                                        <div className="title-post">
                                                            {review.title}
                                                        </div>
                                                    </Link>
                                                    <div className="date">
                                                        {formatDate(review.created_at)}
                                                    </div>
                                                </div>
                                            </div>
                                            // <hr />
                                        ))}
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
