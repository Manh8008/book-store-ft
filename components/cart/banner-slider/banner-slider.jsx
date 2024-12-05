'use client'
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './banner-slider.scss'
import { bannerApiRequest } from '@/apiRequests/banner'

const BannerSlider = () => {
    const [banner, setBanner] = useState([])

    const fetchBanner = async () => {
        const result = await bannerApiRequest.getAllBanner()
        setBanner(result.payload.data)
    }

    // console.log(banner)

    useEffect(() => {
        fetchBanner();
    }, [])

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
                {banner.map((banner) => (
                    <div key={banner.id}>
                        <img src={banner.image_url} alt="" className="banner-image" />
                    </div>
                ))}
            </Slider>
        </div>
    )
}
export default BannerSlider
