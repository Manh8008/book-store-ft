'use client'
import Lottie from 'lottie-react'
import classNames from 'classnames/bind'
import loadingAnimation from './LoadingIcon.json'
import styles from './LoadingSkeleton.module.scss'

const cx = classNames.bind(styles)

const LoadingSkeleton = () => {
    return (
        <div className={cx('wrapper')}>
            <Lottie animationData={loadingAnimation} loop={true} />
        </div>
    )
}

export default LoadingSkeleton
