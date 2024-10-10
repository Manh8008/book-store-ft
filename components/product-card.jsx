import Link from 'next/link'
import { Button } from './ui/button'

export const ProductCard = () => {
    return (
        <>
            <div className="item">
                <Link href="#!">
                    <img src="/img/product-1.png" alt="Nikko Apartments" className="thumb" />
                </Link>
                <div className="body">
                    <h3 className="title">
                        <Link href="#!">My Hero Academia - Tập 27: One’s Justice</Link>
                    </h3>
                    <div className="stars">
                        <img src="/img/star.svg" alt="Star" />
                        <img src="/img/star.svg" alt="Star" />
                        <img src="/img/star.svg" alt="Star" />
                        <img src="/img/star.svg" alt="Star" />
                        <img src="/img/star.svg" alt="Star" />
                    </div>
                    <div className="price">20.000đ</div>
                    <div className="price-sale">15.000đ</div>
                    <Button primary large className="buy-now">
                        Mua ngay
                    </Button>
                </div>
            </div>
        </>
    )
}
