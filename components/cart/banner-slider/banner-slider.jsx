'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './banner-slider.scss'

const BannerSlider = () => {
    const banners = [
        { id: 1, src: '/img/slider_2.webp', alt: 'Banner 1' },
        { id: 2, src: '/img/slider_3.webp', alt: 'Banner 2' },
        { id: 3, src: '/img/slider_4.webp', alt: 'Banner 3' }
    ]
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false
    }

    return (
        <div className="banner-slider">
            <Slider {...settings}>
                {banners.map((banner) => (
                    <div key={banner.id}>
                        <img src={banner.src} alt={banner.alt} className="banner-image" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default BannerSlider
