import React from 'react';

import {withRouter} from 'react-router-dom'; 

import 'static/about.scss'; 

function Layout(props) {

    const [stateIn, setStateIn] = React.useState(true);

    React.useEffect(() => {
        console.log(props.history.location.pathname)

        if(props.history.location.pathname === '/'){
            setStateIn(true); 
        }else{
            setStateIn(false); 
        }
    })
    
    const openNav = () => {
        setStateIn(true); 
    }

    const closeNav = (page) => {
        setStateIn(false); 
        props.history.push(`/${page}`)
    }

    return (
        
        <div 
            style={{
                position: 'relative'
            }}
        >
            
            <div id="div1" className={stateIn ? 'open' : 'close' }>
                <h1 onClick={() => closeNav('about')}>About</h1>
                <h1 onClick={() => closeNav('contact')}>Contact</h1>
                
            </div>

            <div id="div2">
                <img src="https://www.cindychao.com/back/data/uploads/2017/04/artist-background.jpg" width='100%' />
                {props.children}
            </div>
        </div>
    )
} 

export default withRouter(Layout); 