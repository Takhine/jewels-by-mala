import React from 'react';

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import useWindowDimensions from '../components/windowDimension';

// Images
import leftArrow from '../static/images/icons/left-arrow.png';
import rightArrow from '../static/images/icons/right-arrow.png';



import necklace from 'static/images/backgrounds/diamond-necklaces-background.jpg';
import necklace1 from 'static/images/diamond/d-necklace-1.jpg';
import necklace2 from 'static/images/diamond/d-necklace-2.jpg';
import necklace3 from 'static/images/diamond/d-necklace-3.jpg';



import earings from 'static/images/backgrounds/diamond-earings-background.jpg';
import earings1 from 'static/images/diamond/d-earring-1.jpg';
import earings2 from 'static/images/diamond/d-earring-2.jpg';
import earings3 from 'static/images/diamond/d-earring-3.jpg';

import rings from 'static/images/backgrounds/diamond-rings-background.jpg';
import rings1 from 'static/images/diamond/d-ring-1.jpg';
import rings2 from 'static/images/diamond/d-ring-2.jpg';
import rings3 from 'static/images/diamond/d-ring-3.jpg';

import bracelet from 'static/images/backgrounds/diamond-bracelets-background.jpg';
import bracelet1 from 'static/images/diamond/d-bracelet-1.jpg';
import bracelet2 from 'static/images/diamond/d-bracelet-2.jpg';
import bracelet3 from 'static/images/diamond/d-bracelet-3.jpg';

import pendants from 'static/images/backgrounds/diamond-pendants-background.jpg';
import pendants1 from 'static/images/diamond/d-pendant-1.jpg';
import pendants2 from 'static/images/diamond/d-pendant-2.jpg';
import pendants3 from 'static/images/diamond/d-pendant-3.jpg';

const diamondsList = [
    {
        "title": "Necklaces",
        "img": necklace,
        "subtitle": "Black Label Masterpiece IX, 2016",
        "description": <p>Pear-shaped diamonds 12.06 cts, owl-shaped diamonds 93.04 cts <br /> round brilliant-cut diamonds 6.3 cts, diamonds 129.26 cts <br /> 24.7 x 18 x 10 cm</p>,
        "styles": "banner-content right",
        "sellerDesc": "We pride ourselves on creating elegant jewelry for the accomplished woman, whose sophisticated brilliance is only enhanced by that of her diamond. Each necklace begins with a moment of inspiration, transforming our diamonds into covetable designs. From the purity of a diamond solitaire necklace to the glamour of multi-layered diamonds working in harmony. Our necklaces are  designed to be worn and admired.",
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
        "title": "Earrings",
        "img": earings,
        "subtitle": "Floral Petals Earings",
        "description": <p>FOUR SEASONS COLLECTION <br /> fancy-cut diamonds 14.21 cts, diamonds 53.28 cts</p>,
        "styles": "banner-content left",
        "sellerDesc": "Understatedly elegant diamond stud earrings to intricately designed bespoke creations, the selection of earrings at Mala's ranges from classic and feminine, to cool and contemporary. Set with a cut-down finish, these spectacular earrings are a symbol of your unending bond.",
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
    },
    {
        "title": "Rings",
        "img": rings,
        "subtitle": "Foliage Ring",
        "description": <p>Square-cut diamond - 2.23 cts <br /> fancy coloured diamonds 1.95 cts, <br/> diamonds 11.06 cts</p>,
        "styles": "banner-content right",
        "sellerDesc": "Sophisticated diamond rings to strikingly colourful cocktail rings, each design is meticulously crafted using beautiful gemstones and exquisite details in yellow gold or white metal. Celebrate the most inspiring stories of love, life and success.",
        "carousel":[
            {
                "img":rings1,
                "imgTitle":'Diamond Rings',
                "imgDesc":'29.20 CTS',
            },
            {
                "img":rings2,
                "imgTitle":'Diamond Rings 2',
                "imgDesc":'29.21 CTS',
            },
            {
                "img":rings3,
                "imgTitle":'Diamond Rings 3',
                "imgDesc":'29.22 CTS',
            },
            {
                "img":rings3,
                "imgTitle":'Diamond Rings 4',
                "imgDesc":'29.22 CTS',
            },
        ],
    },
    {
        "title": "Bangles & Bracelet",
        "img": bracelet,
        "subtitle": "Ribbon Bangle & Castle Bangle",
        "description": <p>Asscher-cut diamonds - 5.27 cts <br /> diamonds 35.58 cts</p>,
        "styles": "banner-content right",
        "sellerDesc": "Fluid diamond line bracelets to rigid sculptural cuffs, bracelet are designed to be a perfect statement of character and flair. Always lovely and sophisticated, they are a product of the perfect balance between design and charm.",
        "carousel":[
            {
                "img":bracelet1,
                "imgTitle":'Diamond Bracelet',
                "imgDesc":'29.20 CTS',
            },
            {
                "img":bracelet2,
                "imgTitle":'Diamond Bracelet 2',
                "imgDesc":'29.21 CTS',
            },
            {
                "img":bracelet3,
                "imgTitle":'Diamond Bracelet 3',
                "imgDesc":'29.22 CTS',
            },
            {
                "img":bracelet3,
                "imgTitle":'Diamond Bracelet 4',
                "imgDesc":'29.22 CTS',
            },
        ],
    },
    {
        "title": "Pendants",
        "img": pendants,
        "subtitle": "Ribbon Bangle",
        "description": <p>Asscher-cut diamonds - 5.27 cts <br /> diamonds 35.58 cts</p>,
        "styles": "banner-content left",
        "sellerDesc": "Classic diamond necklaces, colourful gemstone necklaces and layered, long-length diamond set chains; all reveal the same attention to detail and exceptional craftsmanship.",
        "carousel":[
            {
                "img":pendants1,
                "imgTitle":'Diamond Pendant',
                "imgDesc":'29.20 CTS',
            },
            {
                "img":pendants2,
                "imgTitle":'Diamond Pendant 2',
                "imgDesc":'29.21 CTS',
            },
            {
                "img":pendants3,
                "imgTitle":'Diamond Pendant 3',
                "imgDesc":'29.22 CTS',
            },
            {
                "img":pendants3,
                "imgTitle":'Diamond Pendant 4',
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
        draggable:false,
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
                slidesToScroll: 1,
                initialSlide: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 700,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              },
              {
                breakpoint: 600,
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
            </Slider>
        
            <div className="small-slider-container">
                <Slider {...smallSettings}>
                    {diamondsList[slide].carousel.map((item)=>{
                        return(
                            <div key={item.imgTitle} className="small-slider">
                                <img src={item.img} alt={item.imgTitle}/>
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