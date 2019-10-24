import React from 'react'; 

import testimonial from '../static/images/backgrounds/testimonials-background.png';

 const Testimonials=()=> {
    return (
        <div className="testimonial">
            <div className="testimonial-banner">
                <img src={testimonial} className="banner" width='100%' />                 
            </div>
            <div className="testimonial-content">
                <div className="slider-container">
                    Testimonials
                </div>
            </div>
        </div>  
    ); 
}
export default Testimonials;