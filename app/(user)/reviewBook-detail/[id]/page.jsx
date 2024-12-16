'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { reviewApiRequest } from '@/apiRequests/post'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import '@/public/styles/reviewBook-detail.scss'
import { useRouter } from 'next/navigation'
import { LoadingSkeleton } from '@/components/ui/LoadingSkeleton'

export default function ReviewBookDetail({ params }) {
    const router = useRouter()
    const id = params.id
    const [review, setReview] = useState([])
    const [listReview, setListReview] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true)
                const [reviewResult, listResult] = await Promise.all([
                    reviewApiRequest.reviewDetail(id),
                    reviewApiRequest.getAllPost()
                ])
                setReview(reviewResult.payload.data)
                setListReview(listResult.payload.data)
            } catch (err) {
                setError(err.message)
            } finally {
                setIsLoading(false)
            }
        }
        fetchData()
    }, [id])

    if (isLoading) return <LoadingSkeleton />
    if (error) return <div>Có lỗi xảy ra: {error}</div>
    if (!review) return <div>Không tìm thấy bài viết</div>

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
                <div className="container">
                    <Beardcrumb />
                    <div className="home_news">
                        <div className="main-left">
                            <div className="news-title">
                                <div className="title">
                                    <h1>{review.title}</h1>
                                </div>
                                <div className="date">{formatDate(review.created_at)}</div>
                                <div className="body-content">
                                    <div className="text">
                                        <span>{review.description?.split('\n')[0]}</span>
                                    </div>
                                    <figure className="image">
                                        <img src={review.image_url} alt={review.title} />
                                        <figcaption>
                                            <span>{review.title}</span>
                                        </figcaption>
                                    </figure>
                                    <div className="sub-title"></div>
                                    <div className="text">{review.description}</div>
                                </div>
                            </div>
                        </div>
                        <div className="main-right">
                            <div className="sidebar-hotnews">
                                <div className="title">
                                    <h3>BÀI VIẾT KHÁC</h3>
                                </div>
                                <div className="content-hotnews">
                                    {listReview.map((review) => (
                                        <div className="item" key={review.id}>
                                            <div className="img-post">
                                                <Link href={`/reviewBook-detail/${review.id}`}>
                                                    <img
                                                        src={review.image_url}
                                                        alt={review.title}
                                                    />
                                                </Link>
                                            </div>
                                            <div className="body">
                                                <Link href={`/reviewBook-detail/${review.id}`}>
                                                    <div className="title-post">{review.title}</div>
                                                </Link>
                                                <div className="date">
                                                    {formatDate(review.created_at)}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}
