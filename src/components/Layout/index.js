import React, { useEffect, useState }  from 'react';

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
    }

    const closeNav = (page) => {
        setStateIn(false);
        setSidebar(page);
        props.history.push(`/${page}`)
    }

    return (

        <div className="main-container" className={stateIn ? 'no-scroll':'scroll'}>
            {/* Navigation Panel */}
            <div id="navigation-menu" className={stateIn ? 'pageOpen' : 'pageClose'}>
                <div className="overlay">
                    <div className="menu-opened" style={{ width: width }}>
                        <div className="main-title">
                            <img src={mainTitle} alt="Jewels By Mala" />
                        </div>
                        <div className="menu-items">
                            <List>
                                <ListItem onClick={() => closeNav('artist')}>Artist</ListItem>
                            </List>
                        </div>
                        <div className="main-copyright"  style={{ width: width }}>
      
                            <p>width: {width} ~ height: {height}</p>
                        </div>
                        <img id="background" src={mainBackground} width={width} />
                    </div>

                </div>

            </div>
            {/* Sidebar */}
            <div id="sidebar" className={stateIn ? 'sidebarOpen' : 'sidebarClosed'}>
                    <Button id="side-menu-icon" onClick={() => openNav()}>&nbsp;</Button>
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