import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowDimensions from '../components/windowDimension';

// Images
import leftArrow from '../static/images/icons/left-arrow.png';
import rightArrow from '../static/images/icons/right-arrow.png';



import necklace from 'static/images/backgrounds/diamond-necklaces-background.png';
import necklace1 from 'static/images/diamond/d-necklace-1.png';
import necklace2 from 'static/images/diamond/d-necklace-2.png';
import necklace3 from 'static/images/diamond/d-necklace-3.png';



import earings from 'static/images/backgrounds/diamond-earings-background.jpg';
import earings1 from 'static/images/diamond/d-earings-1.png';
import earings2 from 'static/images/diamond/d-earings-2.png';
import earings3 from 'static/images/diamond/d-earings-3.png';




const diamondsList = [
    {
        "title": "Necklaces",
        "img": necklace,
        "subtitle": "Black Label Masterpiece IX, 2016",
        "description": <p>Pear-shaped diamonds 12.06 cts, owl-shaped diamonds 93.04 cts <br /> round brilliant-cut diamonds 6.3 cts, diamonds 129.26 cts <br /> 24.7 x 18 x 10 cm</p>,
        "styles": "banner-content right",
        "sellerDesc": "Understatedly elegant...",
        "carousel":[
            {
                "img":necklace1,
                "imgTitle":'Necklace Earings',
                "imgDesc":'29.20 CTS',
            },
            {
                "img":necklace2,
                "imgTitle":'Necklace Earings 2',
                "imgDesc":'29.21 CTS',
            },
            {
                "img":necklace3,
                "imgTitle":'Necklace Earings 3',
                "imgDesc":'29.22 CTS',
            },
            {
                "img":necklace3,
                "imgTitle":'Necklace Earings 4',
                "imgDesc":'29.22 CTS',
            },
        ],

    },
    {
        "title": "Earings",
        "img": earings,
        "subtitle": "Floral Petals Earings",
        "description": <p>FOUR SEASONS COLLECTION <br /> fancy-cut diamonds 14.21 cts, diamonds 53.28 cts</p>,
        "styles": "banner-content left",
        "sellerDesc": "Understatedly more elegant",
        "carousel":[
            {
                "img":earings1,
                "imgTitle":'Diamond Earings',
                "imgDesc":'29.20 CTS',
            },
            {
                "img":earings2,
                "imgTitle":'Diamond Earings 2',
                "imgDesc":'29.21 CTS',
            },
            {
                "img":earings3,
                "imgTitle":'Diamond Earings 3',
                "imgDesc":'29.22 CTS',
            },
            {
                "img":earings3,
                "imgTitle":'Diamond Earings 4',
                "imgDesc":'29.22 CTS',
            },
        ],
    }
]

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
            className="slick-arrow slick-right-arrow"
            style={{ ...style, display:'flex'}}
            onClick={onClick}
        >
            Next
        </div>
    );
}
function LeftCarousel(props) {
    const { className, style, onClick } = props
    return (
        <div
            className="slick-arrow left-arrow"
            style={{ ...style, display:'block'}}
            onClick={onClick}
        >
            <img src={leftArrow} alt="arrow_left" />
        </div>
    );
}
function RightCarousel(props) {
    const { className, style, onClick } = props
    return (
        <div
            className="slick-arrow right-arrow"
            style={{ ...style, display: 'block' }}
            onClick={onClick}
        >
            <img src={rightArrow} alt="arrow_right" />
        </div>
    );
}
const Diamonds = () => {
    const [slide, setSlide ] = React.useState(0);

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
    
        afterChange: current => setSlide(current)

    };
    const smallSettings = {
        dots: false,
        infinite: true,
        speed: 500,
        fade: false,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <LeftCarousel />,
        nextArrow: <RightCarousel />,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 960,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
    };

    return (
        <div className="diamonds">
            <Slider {...settings}>
                {diamondsList.map((diamond) => {
                    return (
                        <div key={diamond.title}>
                            <div className="large-slider-container" style={{height:height}}>
                            <img className="banner" src={diamond.img} alt={diamond.title} width={width} height={height} />
                            <div className={`${diamond.styles}`}>
                                <h2>{diamond.title}</h2>
                                <div className="side-content">
                                    <h3>{diamond.subtitle}</h3>
                                    <div>{diamond.description}</div>
                                </div>
                            </div>
                            </div>
                            
                            <div className="quote-container">
                                <div className="quote">
                                    <h3>{diamond.sellerDesc}</h3>
                                </div>
                            </div>
                        </div>

                    )
                })

                }
                {/* <div className="slider-container">
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
                </div> */}
            </Slider>
            
            <pre>{}</pre>

            <div className="small-slider-container">
                <Slider {...smallSettings}>
                    {diamondsList[slide].carousel.map((item)=>{
                        return(
                            <div key={item.imgTitle} className="small-slider">
                                <img src={item.img} alt={item.imgTitle} width="300px"/>
                                <div className="small-slider-content">
                                    <h2>{item.imgTitle}</h2>
                                    <p>{item.imgDesc}</p>
                                </div>
                            </div>
                        )
                    })}
                </Slider>
            </div>


        </div>
    );
}
export default Diamonds;