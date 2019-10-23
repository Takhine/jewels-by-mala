import React from 'react';

import { withRouter } from 'react-router-dom';
import {
    List,
    ListItem
} from '@material-ui/core'
import 'static/scss/main.scss';
import mainBackground from '../../static/images/backgrounds/main-background.png';
import mainLogo from '../../static/images/main-logo.png';

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

                <div className="menu-items">
                    <List>
                        <ListItem><img src={mainLogo}className="logo-container" alt="Jewels by Mala"/></ListItem>
                        <ListItem onClick={() => closeNav('about')}>About</ListItem>
                        <ListItem onClick={() => closeNav('artist')}>Artist</ListItem>
                        <ListItem onClick={() => closeNav('collection')}>Collections</ListItem>
                        <ListItem onClick={() => closeNav('testimonials')}>Testimonials</ListItem>
                        <ListItem onClick={() => closeNav('contact')}>Contact</ListItem>
                    </List>


                </div>

                <img id="background" src={mainBackground} width='100%' />
            </div>
            {/* Sidebar */}
            <div id="sidebar" className={stateIn ? 'sidebarOpen' : 'sidebarClosed'}>
                <button onClick={() => openNav()}>X</button>
                <p>{sidebarName}</p>
            </div>


            {/** MAIN PAGE CONTENT */}
            <div id="current-page" className={stateIn ? 'pageOpen' : 'pageClose'}>

                {props.children}
            </div>
        </div>
    )
}

export default withRouter(Layout); 