import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowDimensions from '../components/windowDimension';

// Images
import bangles from '../static/images/backgrounds/uncut-bangles-background.jpg';
import earings from '../static/images/backgrounds/uncut-earings-background.jpg';


function LeftNavButton(props) {
    const { className, style, onClick } = props
    return (
        <div
            className="slick-arrow left-arrow"
            style={{ ...style, display: 'none' }}
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
            className="slick-arrow right-arrow"
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
                    <img className="banner" src={bangles} alt="Jewels by Mala" width={width} height={height} />
                    <div className="banner-content">
                        <h2>Necklaces</h2>
                        <div className="side-content">
                            <h3>Black Label Masterpiece IX, 2016</h3>
                            <p>Pear-shaped diamonds 12.06 cts, owl-shaped diamonds 93.04 cts <br/> round brilliant-cut diamonds 6.3 cts, diamonds 129.26 cts <br/> 24.7 x 18 x 10 cm</p>
                        </div>

                    </div>
                </div>
                <div className="slider-container">
                    <img className="banner" src={bangles} alt="Jewels by Mala" width={width} height={height} />
                    <div className="banner-content">
                        <h2>Bangles</h2>
                        <div className="side-content">
                            <h3>Ribbon Bangle &amp; Castle Bangle</h3>
                            <p>Asscher-cut diamonds 5.27 cts, <br /> diamonds 35.58 cts</p>
                        </div>

                    </div>
                </div>
                <div className="slider-container">
                    <img className="banner" src={earings} alt="Jewels by Mala" width={width} height={height} />
                    <div className="banner-content left">
                        <h2>Earings</h2>
                        <div className="side-content">
                            <h3>Floral Petals Earrings</h3>
                            <p>Four Seasons Collection, <br /> Fancy-cut diamonds 14.21 cts, diamonds 53.28 cts</p>
                        </div>

                    </div>
                </div>
            </Slider>
        </div>
    );
}
export default UncutDiamonds;