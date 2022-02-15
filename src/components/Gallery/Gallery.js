import React, { Component } from "react";
import Slider from "react-slick";
import './Gallery.css';
import gallery1 from '../../images/gallery1.jpg'
import gallery2 from '../../images/gallery2.jpg'
import gallery3 from '../../images/gallery3.jpg'
import gallery4 from '../../images/gallery4.jpg'
import gallery5 from '../../images/gallery5.jpg'
import gallery6 from '../../images/gallery6.jpg'















export default class Gallery extends Component {
    render() {
        var settings = {
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2000,
            pauseOnHover: true
        };
        return (
            <div>
                <Slider {...settings}>
                    <div className="galleryImgContainer">
                        <img
                            className="sliderImg"
                            src={gallery1}
                            alt="First slide"
                        />
                    </div>
                    <div className="galleryImgContainer">
                        <img
                            className="sliderImg"
                            src={gallery2}
                            alt="First slide"
                        />
                    </div>
                    <div className="galleryImgContainer">
                        <img
                            className="sliderImg"
                            src={gallery3}
                            alt="First slide"
                        />
                    </div>
                    <div className="galleryImgContainer">
                        <img
                            className="sliderImg"
                            src={gallery4}
                            alt="First slide"
                        />
                    </div>
                    <div className="galleryImgContainer">
                        <img
                            className="sliderImg"
                            src={gallery5}
                            alt="First slide"
                        />
                    </div>
                    <div className="galleryImgContainer">
                        <img
                            className="sliderImg"
                            src={gallery6}
                            alt="First slide"
                        />
                    </div>
                </Slider>
            </div>
        );
    }
}



