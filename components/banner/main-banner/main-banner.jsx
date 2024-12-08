import classNames from 'classnames/bind'
import styles from './main-banner.module.scss'
import { BannerSlider } from '../../cart'

const cx = classNames.bind(styles)

const MainBanner = ({ data }) => {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('banner-wrap')}>
                <div className={cx('banner')}>
                    <div className={cx('banner-left')}>
                        <BannerSlider data={data} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner
