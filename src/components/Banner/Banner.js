import React from "react";
import Slider from "react-slick";
import { data } from "./Sliderdata";
import './Banner.css'

export default function Banner() {




  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (

    <div className="bannerslider">
    <Slider className="bannerslider" {...settings}>
      
    {
      data.map(item=>{
        return(
          <div className="imagecont" key={item.id}>
          <img src={item.image} alt="noimg"/>
          <div className="content">
          <h1>{item.title}</h1>
          <p>{item.des}</p>
          <button>Shop more</button>
          </div>
          
          </div>
        )
      })
    }
    </Slider>

    </div>
  );
}