'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './banner-slider.scss'

const BannerSlider = () => {
    const banners = [
        { id: 1, src: '/img/banner-1.svg', alt: 'Banner 1' },
        { id: 2, src: '/img/banner-2.svg', alt: 'Banner 2' },
        { id: 3, src: '/img/banner-3.svg', alt: 'Banner 3' }
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
