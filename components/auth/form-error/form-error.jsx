import classNames from 'classnames/bind'
import styles from './form-error.module.scss'
import { RxCrossCircled } from 'react-icons/rx'

const cx = classNames.bind(styles)

export const FormError = ({ message }) => (
    <div className={cx('container', 'error')}>
        <RxCrossCircled className={cx('icon')} />
        <p>{message}</p>
    </div>
)
