import classNames from 'classnames/bind'
import styles from './shipping-method.module.scss'

const cx = classNames.bind(styles)

const ShippingMethod = () => (
    <div className={cx('method-list')}>
        <div className={cx('shipping-method-list')}>
            <div>
                <label className={cx('radio')}>
                    <input type="radio" name="shipping-method" value="3" />
                    <span className={cx('radio-fake')}></span>
                    <span className={cx('label')}>
                        <div className={cx('method-info')}>
                            <img
                                className={cx('method-logo')}
                                alt="delivery-method-icon"
                                width="32"
                                height="16"
                                src="/img/now.png"
                            />
                            <span className={cx('method-text')}>Giao siêu tốc 2h</span>
                            <span className={cx('freeship-badge')}>-25K</span>
                        </div>
                    </span>
                </label>
            </div>

            <div>
                <label className={cx('radio')}>
                    <input type="radio" name="shipping-method" value="3" />
                    <span className={cx('radio-fake')}></span>
                    <span className={cx('label')}>
                        <div className={cx('method-info')}>
                            <img
                                className={cx('method-logo')}
                                alt="delivery-method-icon"
                                width="32"
                                height="16"
                                src="/img/now.png"
                            />
                            <span className={cx('method-text')}>Giao siêu tốc 2h</span>
                            <span className={cx('freeship-badge')}>-25K</span>
                        </div>
                    </span>
                </label>
            </div>
        </div>
    </div>
)

export default ShippingMethod
