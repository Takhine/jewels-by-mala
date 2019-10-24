import React from 'react';
import Slider from "react-slick";

import testimonial from '../static/images/backgrounds/testimonials-background.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import leftArrow from '../static/images/icons/left-arrow.png';
import rightArrow from '../static/images/icons/right-arrow.png';

import useWindowDimensions from '../components/windowDimension';

const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <LeftNavButton />,
    nextArrow: <RightNavButton />,


};
function LeftNavButton(props) {
    const {className, style, onClick} = props
    return (
        <div
            className="slick-arrow left-arrow"
            style={{...style, display: 'block'}}
            onClick={onClick}
        >
            <img src={leftArrow} alt="arrow_left"/>
        </div>
    );
}
function RightNavButton(props) {
    const {className, style, onClick} = props
    return (
        <div
            className="slick-arrow right-arrow"
            style={{...style, display: 'block'}}
            onClick={onClick}
        >
            <img src={rightArrow} alt="arrow_left"/>
        </div>
    );
}
const Testimonials = () => {
    const { height, width } = useWindowDimensions();

    return (
        <div className="testimonial">
            <div className="testimonial-banner">
                <img src={testimonial} className="banner" width='100%' />
            </div>
            <div className="testimonial-content">
                <div className="slider-container">
                    <Slider {...settings}>
                        <div className="slider-text-container">
                            <p><q>Regardless of the subject, the final piece must be as vibrant as it is in real life.<br/>
                                Observe the object. Pay attention to the tiniest details, and then, with your heart and soul, <br/>put into forms what you've perceived.</q></p>
                                <p className="person">-Tara Singh</p>
                        </div>
                        <div className="slider-text-container">
                            <p><q>Regardless of the subject, the final piece must be as vibrant as it is in real life.<br/>
                                Observe the object. Pay attention to the tiniest details, and then, with your heart and soul, <br/>put into forms what you've perceived.</q></p>
                                <p className="person">-Tara Singh</p>
                        </div>
                        <div className="slider-text-container">
                            <p><q>Regardless of the subject, the final piece must be as vibrant as it is in real life.<br/>
                                Observe the object. Pay attention to the tiniest details, and then, with your heart and soul, <br/>put into forms what you've perceived.</q></p>
                                <p className="person">-Tara Singh</p>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    );
}
export default Testimonials;