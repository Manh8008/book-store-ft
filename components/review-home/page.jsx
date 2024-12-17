import '@/public/styles/main.scss'
import Link from 'next/link'

export default function ReviewHome(props) {
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }

    return (
        <>
            {props.data.map((review) => {
                return (
                    <div className="item" key={review.id}>
                        <div className="image">
                            <Link href={`/reviewBook-detail/${review.id}`}>
                                <img src={review.image_url} alt={review.title} className="thumb" />
                            </Link>
                            <span className="date">{formatDate(review.created_at)}</span>
                        </div>
                        <div className="body">
                            <h3>
                                <Link
                                    href={`/reviewBook-detail/${review.id}`}
                                    className="sub-title-review"
                                >
                                    {review.description}
                                </Link>
                            </h3>
                        </div>
                    </div>
                )
            })}
        </>
    )
}
