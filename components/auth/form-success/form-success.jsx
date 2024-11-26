'use client'

import classNames from 'classnames/bind'
import { MdCheckCircle } from 'react-icons/md'
import styles from './form-success.module.scss'

const cx = classNames.bind(styles)

export const FormSuccess = ({ message }) => {
    if (!message) return null

    return (
        <div className={cx('container', 'success')}>
            <MdCheckCircle className={cx('icon')} />
            <p>{message}</p>
        </div>
    )
}
