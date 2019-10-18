import React from 'react';

import {withRouter} from 'react-router-dom'; 

import 'static/about.scss'; 

function Layout(props) {

    const [stateIn, setStateIn] = React.useState(true);

    const toggleState = () => {
        setStateIn(!stateIn);
    }
    return (
        
        <div 
            style={{
                position: 'relative'
            }}
        >
            {/** NAVIGATION */}
            <div id="div1" className={stateIn ? 'open' : 'close' }>
                <h1 onClick={() => toggleState()}>Hello</h1>
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