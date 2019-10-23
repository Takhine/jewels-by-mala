import React from 'react';

import { withRouter } from 'react-router-dom';
import {
    List,
    ListItem,
    Button
} from '@material-ui/core'

import 'static/scss/main.scss';

// Images
import mainBackground from '../../static/images/backgrounds/main-background.png';
import mainTitle from '../../static/images/main-title.png';
import mainLogo from '../../static/images/main-logo.png';
import pinterest from '../../static/images/icons/pinterest-icon-main.png';
import facebook from '../../static/images/icons/facebook-icon-main.png';
import instagram from '../../static/images/icons/instagram-icon-main.png';
import twitter from '../../static/images/icons/twitter-icon-main.png';



function Layout(props) {

    const [stateIn, setStateIn] = React.useState(true);
    const [sidebarName, setSidebar] = React.useState('');


    React.useEffect(() => {
        console.log(props.history)

        if (props.history.location.pathname === '/') {
            setStateIn(true);
        } else {
            setStateIn(false);
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

        <div className="main-container">
            {/* Navigation Panel */}
            <div id="navigation-menu">

                <div className="main-title">
                    <img src={mainTitle} alt="Jewels By Mala"/>
                </div>
                <div className="menu-items">
                    <List>
                        <ListItem><img src={mainLogo}className="logo-container" alt="Jewels by Mala"/></ListItem>
                        <ListItem onClick={() => closeNav('about')}>About</ListItem>
                        <ListItem onClick={() => closeNav('artist')}>Artist</ListItem>
                        <ListItem onClick={() => closeNav('collection')}>Collections</ListItem>
                        <ListItem onClick={() => closeNav('testimonials')}>Testimonials</ListItem>
                        <ListItem onClick={() => closeNav('contact')}>Contact</ListItem>
                        <ListItem>
                            <div className="social-container">
                                <img src={pinterest} alt="Pinterest"/>
                                <img src={facebook} alt="Facebook"/>
                                <img src={instagram} alt="Instagram"/>
                                <img src={twitter} alt="Twitter"/>

                            </div>
                        </ListItem>
                    </List>
                </div>
                <div className="main-copyright">
                    <p>Copyright &copy;JEWELS BY MALA 2019 &nbsp; | &nbsp; Created by Pinxitblue &nbsp;|&nbsp; Privacy policy Term of use Credits</p>
                </div>
                <img id="background" src={mainBackground} width='100%' />
            </div>
            {/* Sidebar */}
            <div id="sidebar" className={stateIn ? 'sidebarOpen' : 'sidebarClosed'}>
                <Button id="side-menu-icon" onClick={() => openNav()}>&nbsp;</Button>
                <p className="sidebar-title">{sidebarName}</p>
            </div>


            {/** MAIN PAGE CONTENT */}
            <div id="current-page" className={stateIn ? 'pageOpen' : 'pageClose'}>

                {props.children}
            </div>
        </div>
    )
}

export default withRouter(Layout); 