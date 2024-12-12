'use client'
import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './banner-slider.scss'

const BannerSlider = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    autoplaySpeed: 4000
                }
            },
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    autoplaySpeed: 3000
                }
            },
            {
                breakpoint: 480,
                settings: {
                    arrows: false,
                    dots: true,
                    autoplaySpeed: 2000
                }
            }
        ]
    }

    return (
        <div className="banner-slider">
            <Slider {...settings}>
                {data?.map((item) => (
                    <div key={item.id} className="banner-slide">
                        <div className="banner-image-wrapper">
                            <img
                                src={item.image_url}
                                alt={item.title || ''}
                                className="banner-image"
                                loading="lazy"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default BannerSlider
