import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowDimensions from '../components/windowDimension';

// Images
import bangles from '../static/images/backgrounds/uncut-bangles-background.jpg';
import earings from '../static/images/backgrounds/uncut-earings-background.jpg';
import necklaces from '../static/images/backgrounds/uncut-necklaces-background.jpg';



function LeftNavButton(props) {
    const { className, style, onClick } = props
    return (
        <div
            className="slick-arrow slick-left-arrow"
            style={{ ...style, display: 'flex' }}
            onClick={onClick}
        >
            Prev
        </div>
    );
}
function RightNavButton(props) {
    const { className, style, onClick } = props
    return (
        <div
            className="slick-arrow slick-right-arrow"
            style={{ ...style, display: 'flex' }}
            onClick={onClick}
        >
            Next
        </div>
    );
}
const UncutDiamonds = () => {
    const { height, width } = useWindowDimensions();
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <LeftNavButton />,
        nextArrow: <RightNavButton />,

    };

    return (
        <div className="uncut-diamonds">
            <Slider {...settings}>
            <div className="slider-container">
                    <img className="banner" src={necklaces} alt="Jewels by Mala" width={width} />
                    <div className="banner-content right-necklace">
                        <h2>Necklaces</h2>

                    </div>
                </div>
                <div className="slider-container">
                    <img className="banner" src={bangles} alt="Jewels by Mala" width={width} />
                    <div className="banner-content">
                        <h2>Bangles</h2>

                    </div>
                </div>
                <div className="slider-container">
                    <img className="banner" src={earings} alt="Jewels by Mala" width={width} />
                    <div className="banner-content left">
                        <h2>Earings</h2>

                    </div>
                </div>
            </Slider>
        </div>
    );
}
export default UncutDiamonds;