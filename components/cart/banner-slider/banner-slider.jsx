'use client'
import React, { useEffect, useState } from 'react'
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
        arrows: false
    }

    return (
        <div className="banner-slider">
            <Slider {...settings}>
                {data &&
                    data.map((item) => (
                        <div key={item.id}>
                            <img src={item.image_url} alt="" className="banner-image" />
                        </div>
                    ))}
            </Slider>
        </div>
    )
}
export default BannerSlider
