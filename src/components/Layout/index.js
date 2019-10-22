import React from 'react';

import { withRouter } from 'react-router-dom';

import 'static/scss/main.scss';
import mainBackground from '../../static/images/backgrounds/main-background.png';
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
                    <h1 onClick={() => closeNav('about')}>About</h1>
                    <h1 onClick={() => closeNav('contact')}>Contact</h1>
                </div>

                <img id="background" src={mainBackground} width='100%' />
            </div>
            {/* Sidebar */}
            <div id="sidebar" className={stateIn ? 'opened' : 'closed'}>
                <button onClick={() => openNav()}>X</button>
                <p>{sidebarName}</p>
            </div>


            {/** MAIN PAGE CONTENT */}
            <div id="current-page" className={stateIn ? 'open' : 'close'}>
                <img src="https://www.cindychao.com/back/data/uploads/2017/04/artist-background.jpg" width='100%' />

                {props.children}
            </div>
        </div>
    )
}

export default withRouter(Layout); 