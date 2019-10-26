import React, { useEffect, useState } from 'react';

import { withRouter } from 'react-router-dom';
import {
    List,
    ListItem,
    Button
} from '@material-ui/core'
import 'static/scss/main.scss';
import Footer from './Footer';
import useWindowDimensions from '../windowDimension';
// Images
import mainBackground from '../../static/images/backgrounds/main-background.png';
import mainTitle from '../../static/images/main-title.png';
import mainLogo from '../../static/images/main-logo.png';
import navLogo from '../../static/images/nav-logo.png';

import pinterest from '../../static/images/icons/pinterest-icon-main.png';
import facebook from '../../static/images/icons/facebook-icon-main.png';
import instagram from '../../static/images/icons/instagram-icon-main.png';
import twitter from '../../static/images/icons/twitter-icon-main.png';


function Layout(props) {
    const { height, width } = useWindowDimensions();

    const [stateIn, setStateIn] = React.useState(true);
    const [stateFooter, setFooterIn] = React.useState(true);

    const [sidebarName, setSidebar] = React.useState('');


    React.useEffect(() => {
        console.log(props.history)

        if (props.history.location.pathname === '/') {
            setStateIn(true);
        } else {
            setStateIn(false);
            if(props.history.location.pathname ==='/uncut-diamonds')
            {
                setSidebar('uncut diamonds');
            }
            else{
                setSidebar(props.history.location.pathname.split('/').slice(-1)[0]);
            }

        }
        switch (props.history.location.pathname) {
            case '/artist':
                setFooterIn(true);
                break;
            case '/collection':
                setFooterIn(true);
                break;
            case '/diamonds':
                setFooterIn(true);
                break;
            default:
                setFooterIn(false);
                break;
        }
    }, [props.history.location.key])

    const openNav = () => {
        setStateIn(true);
        setFooterIn(false);

    }

    const closeNav = (page) => {
        setStateIn(false);

        props.history.push(`/${page}`)

    }

    return (

        <div className="main-container" className={stateIn ? 'no-scroll' : 'scroll'}>
            {/* Navigation Panel */}
            <div id="navigation-menu" className={stateIn ? 'pageOpen' : 'pageClose'}>
                <div className="overlay">
                    <div className="menu-opened" style={{ width: width, height:height }}>
                        <div className="main-title">
                            <img src={mainTitle} alt="Jewels By Mala" />
                        </div>
                        <div className="menu-items">
                            <List>
                                <ListItem onClick={() => closeNav('about')}>
                                    <img src={mainLogo} className="logo-container" alt="Jewels by Mala" width={50}/>
                                </ListItem>
                                <ListItem onClick={() => closeNav('about')}>About</ListItem>
                                <ListItem onClick={() => closeNav('artist')}>Artist</ListItem>
                                <ListItem onClick={() => closeNav('collection')}>Collection</ListItem>
                                <ListItem onClick={() => closeNav('testimonials')}>Testimonials</ListItem>
                                <ListItem onClick={() => closeNav('contact')}>Contact</ListItem>
                                <ListItem>
                                    <div className="social-container">
                                        <a>
                                        <img src={pinterest} alt="Pinterest" width={14} />
                                        </a>
                                        <a>
                                        <img src={facebook} alt="Facebook" width={14}/>
                                        </a>
                                        <a>
                                        <img src={instagram} alt="Instagram" width={14}/>
                                        </a>
                                        <a>
                                        <img src={twitter} alt="Twitter" width={14}/>
                                        </a>
                                    </div>
                                </ListItem>
                            </List>
                        </div>
                        <div className="main-copyright" style={{width:width, height:height}}>
                            <p>Copyright &copy;JEWELS BY MALA 2019 &nbsp; | &nbsp; Created By Pinxitblue &nbsp;|&nbsp; Privacy policy Term of use Credits</p>
                        </div>
                        <img id="background" src={mainBackground} width={width} />
                    </div>

                </div>

            </div>
            {/* Sidebar */}
            <div id="sidebar" className={stateIn ? 'sidebarOpen' : 'sidebarClosed'} onClick={() => openNav()}>
                <Button id="side-menu-icon">&nbsp;</Button>
                <div className="sidebar-logo-container">
                <img src={navLogo} alt="Jewels by Mala"/>

                </div>
                <p className="sidebar-title">{sidebarName}</p>
            </div>


            {/** MAIN PAGE CONTENT */}
            <div id="current-page">

                {props.children}
                {/* Footer */}
                {stateFooter &&
                    <Footer open={openNav} />
                }
            </div>
        </div>
    )
}

export default withRouter(Layout); 