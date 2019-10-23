import React from 'react'; 
import {NavLink} from 'react-router-dom';
import artist from '../static/images/backgrounds/artist-image.png';

export default function About() {
    return (
        <React.Fragment>
            <div className="jbm-about">
                <div className="jbm-banner"></div>
                <img src={artist} width='100%' />

                <div className="container">

                    <h1>
                        Mala Cindy is an artist
                        who has learned among masters ...
                        <NavLink exact to="/contact">
                            Contact
                        </NavLink>
                    </h1>
                </div>
            </div>
        </React.Fragment>
    ); 
}