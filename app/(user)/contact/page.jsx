import React from 'react'
import classNames from 'classnames/bind'
import styles from './contact.module.scss'
import { Button } from '@/components/ui/button'
import { Beardcrumb } from '@/components/ui/breadcrumb'
import { Input } from '@/components/ui/input'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaGlobe } from 'react-icons/fa'

const cx = classNames.bind(styles)

export default function Contact() {
    return (
        <>
            <main style={{ background: '#F5F5FA' }}>
                <div className={cx('content')}>
                    <Beardcrumb />

                    <div className={cx('container')}>
                        <div className={cx('contact-info')}>
                            <h2>Liên hệ với chúng tôi</h2>
                            <p>
                                Để không ngừng nâng cao chất lượng dịch vụ và đáp ứng tốt hơn nữa
                                các yêu cầu sử dụng dịch vụ của quý khách, chúng tôi mong muốn nhận
                                được các thông tin phản hồi.
                            </p>
                            <h2>Thông tin liên hệ</h2>
                            <ul>
                                <li>
                                    <FaGlobe /> <span>bookshop.com</span>
                                </li>
                                <li>
                                    <FaPhone /> <span>0912.345.678</span>
                                </li>
                                <li>
                                    <FaEnvelope /> <span>bookshop@gmail.com</span>
                                </li>
                                <li>
                                    <FaMapMarkerAlt />{' '}
                                    <span>Công viên phần mềm Quang Trung, Quận 12, TP.HCM</span>
                                </li>
                            </ul>
                        </div>
                        <div className={cx('contact-form')}>
                            <h2>Đăng ký tư vấn miễn phí</h2>
                            <p>
                                Quý khách vui lòng để lại thông tin để nhân viên tư vấn liên hệ lại
                                sớm nhất!
                            </p>
                            <form>
                                <Input type="text" placeholder="Họ tên của bạn..." required />
                                <Input type="email" placeholder="Email của bạn..." required />
                                <Input type="tel" placeholder="Số điện thoại..." required />
                                <textarea
                                    placeholder="Nội dung cần tư vấn..."
                                    rows="4"
                                    required
                                ></textarea>
                                <Button primary type="submit">
                                    Gửi liên hệ
                                </Button>
                            </form>
                        </div>
                    </div>

                    <div className={cx('map')}>
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.488763374073!2d106.626678315334!3d10.85294406083264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529292b7e1b0d%3A0x2b1b1b1b1b1b1b1b!2sQuang%20Trung%20Software%20City!5e0!3m2!1sen!2s!4v1633072800000!5m2!1sen!2s"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Bản đồ địa chỉ công ty"
                        ></iframe>
                    </div>
                </div>
            </main>
        </>
    )
}
