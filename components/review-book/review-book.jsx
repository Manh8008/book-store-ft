import Link from 'next/link'

export default function ReviewBookList(props) {
    const formatDate = (dateString) => {
        const date = new Date(dateString)
        const day = String(date.getDate()).padStart(2, '0')
        const month = String(date.getMonth() + 1).padStart(2, '0')
        const year = date.getFullYear()
        return `${day}/${month}/${year}`
    }

    return (
        <>
            {props &&
                props.data &&
                props.data.map((review) => {
                    return (
                        <div className="item-post" key={review.id}>
                            <div className="img-post">
                                <Link href={`/reviewBook-detail/${review.id}`}>
                                    <img src={review.image_url} alt="" />
                                </Link>
                            </div>
                            <div className="info">
                                <div className="title">
                                    <Link href={`/reviewBook-detail/${review.id}`}>
                                        <h3>{review.title}</h3>
                                    </Link>
                                </div>
                                <div className="date">{formatDate(review.created_at)}</div>
                                <div className="sub-title">{review.description}</div>
                                <Link href="#!" className="link">
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    )
                })}
        </>
    )
}
