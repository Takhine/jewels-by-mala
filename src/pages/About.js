import React, { useEffect, useState } from 'react'; 
import about from '../static/images/backgrounds/about-background.png';
import {Grid} from '@material-ui/core';
import useWindowDimensions from '../components/windowDimension';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function About() {
    const { height, width } = useWindowDimensions();

    return (
        <React.Fragment>
            <div className="about">
                <LazyLoadImage
                    src={about}
                    width="100%"
                    className="banner"
                />
                  
                <div className="container about-text-container">
                <div className="overlay">
                        </div>
                    <div className="about-grid">
                        

                        <div className="about-text">
                            <h2>At 'Jewels by Mala'</h2>
                            <p>we pride ourselves on our carefully curated assortment of simply the best inspired pieces. With unparalleled one-on-one customer service, we are always there to be of assistance and to make you feel secure. </p>
                        <br/>
                        <p>Our designs are influenced with contemporary femininity, effortlessly made countless happy couples and lifelong keepsakes.   </p>
                        <br/>
                        <p>We are devoted to creating original fine jewelry with our heart and soul. We are renowned for our stunning range of hand-made Wedding and Diamond Sets. Our jewelry are a confluence of the nature and ancient architecture. </p>
                        <br/>
                        <p>Each handmade piece is held to our exceptionally high standards of creativity, quality and craftsmanship. Mala Sujan Seth's Luxury lifestyle jewelry are designed to be adorned for its elegance &amp; is a reflection of your personality.  </p>
                        <br/>
                        <p>Our jewelry designs allow each person to build their own personal collection of diamonds and uncut diamonds that reflect their individual style. Our jewelry are beautiful &amp; striking, a modern take on classic designs.</p>
                        <br/>
                        <p>Mala puts her heart &amp; soul into the collections she creates, the whole team puts a lot of effort &amp; pride each piece that we create adhering to the highest quality standards, consistency &amp; customer service.  </p>
                        <br/>
                        <p>We truly believe elegance, luxury &amp; good taste never go out of taste. </p>
                        <br/>
                        <p>Own a piece of 'Jewel of Mala', it will stay with you forever!</p>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ); 
}