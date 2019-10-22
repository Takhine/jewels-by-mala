import React from 'react';

import {withRouter} from 'react-router-dom'; 

import 'static/scss/main.scss'; 

function Layout(props) {

    const [stateIn, setStateIn] = React.useState(true);
    const [sidebarName, setSidebar] = React.useState('');


    React.useEffect(() => {
        console.log(props.history)

        if(props.history.location.pathname === '/'){
            setStateIn(true); 
        }else{
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
        
        <div 
            style={{
                position: 'relative'
            }}
        >
            {/** NAVIGATION */}
            <div id="div1" className={stateIn ? 'open' : 'close' }>
                <h1 onClick={() => closeNav('about')}>About</h1>
                <h1 onClick={() => closeNav('contact')}>Contact</h1>


                <button  onClick={() => openNav()}>X</button>
                {!stateIn &&
                <p>{sidebarName}</p>

                }

            </div>
            

            {/** MAIN PAGE CONTENT */}
            <div id="div2">
                <img src="https://www.cindychao.com/back/data/uploads/2017/04/artist-background.jpg" width='100%' />
                {props.children}
            </div>
        </div>
    )
} 

export default withRouter(Layout); 