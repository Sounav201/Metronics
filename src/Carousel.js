import React from "react";
// React Slick → Slideshow
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// Components
//import { Img } from "./main";
import {Img} from "./HolidayBanner.jpg"

const settings = {
  infinite: true,
  dots: true,
  arrows: false,
  autoplay: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplaySpeed: 4000,
}

export default function Carousel() {
    return (
        <>

        <Slider {...settings}>
            <div className="Img-container">
            <img className="Img1" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"></img> 
            </div>

            <div className="Img-container">
            <img className="Img1" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/Holiday/GiftGuide/Fuji_TallHero_GG_2_en_US_1x._CB412146952_.jpg"></img> 
            </div>
            
            <div className="Img-container">
            <img className="Img1" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg"></img> 
            </div>


        </Slider>
        </>
    )
}