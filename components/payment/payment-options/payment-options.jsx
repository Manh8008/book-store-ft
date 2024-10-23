import classNames from 'classnames/bind'
import styles from './payment-options.module.scss'
const cx = classNames.bind(styles)

const PaymentOptions = () => {
    return (
        <div className={cx('payment-options')}>
            <div>
                <label className={cx('radio')}>
                    <input type="radio" name="payment-method" value="3" />
                    <span className={cx('radio-fake')}></span>
                    <span className={cx('label')}>
                        <div className={cx('method-info')}>
                            <img
                                className={cx('method-icon')}
                                alt="delivery-method-icon"
                                src="/img/cash.png"
                            />

                            <span className={cx('method-text')}>Thanh toán khi nhận hàng</span>
                        </div>
                    </span>
                </label>
            </div>

            <div>
                <label className={cx('radio')}>
                    <input type="radio" name="payment-method" value="3" />
                    <span className={cx('radio-fake')}></span>
                    <span className={cx('label')}>
                        <div className={cx('method-info')}>
                            <img
                                className={cx('method-icon')}
                                alt="delivery-method-icon"
                                src="/img/momo.jpg"
                            />
                            <span className={cx('method-text')}>Ví Momo</span>
                        </div>
                    </span>
                </label>
            </div>

            <div>
                <label className={cx('radio')}>
                    <input type="radio" name="payment-method" value="3" />
                    <span className={cx('radio-fake')}></span>
                    <span className={cx('label')}>
                        <div className={cx('method-info')}>
                            <img
                                className={cx('method-icon')}
                                alt="delivery-method-icon"
                                src="/img/vn-pay.png"
                            />
                            <span className={cx('method-text')}>Giao siêu tốc 2h</span>
                            <span className={cx('freeship-badge')}>VNPAY</span>
                        </div>
                    </span>
                </label>
            </div>
        </div>
    )
}

export default PaymentOptions
