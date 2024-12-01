import classNames from 'classnames/bind'
import styles from './banner-sale.module.scss'

const cx = classNames.bind(styles)

const BannerSale = () => {
    return (
        <>
            <div className="banner-sale">
                <div className="content">
                    <div className="row">
                        <img src="/img/banner-sale-1.svg" alt="" className="img" />
                        <img src="/img/banner-sale-2.svg" alt="" className="img" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BannerSale
