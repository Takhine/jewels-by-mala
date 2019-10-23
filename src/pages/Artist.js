import React from 'react'; 

import {Grid} from '@material-ui/core';

import artist from '../static/images/backgrounds/artist-image.png';

 const Artist=()=> {
    return (
        <React.Fragment>
            <div className="artist">
                <div className="artist-banner">
                <img src={artist} className="banner" width='100%' />
                </div>
                <div className="artist-content">
                    <div className="quote-container">
                        <div className="quote">
                        <h2><q>My love for all things beautiful was a defining <br/>characteristic from a very early age</q></h2>
                        <h2 className="text-right">- Mala</h2>
                        </div>
                    </div>
                    <Grid 
                        className="container"
                        container 
                        spacing={2}
                        direction="row"
                        justify="flex-end"
                        alignItems="stretch"
                  >
                        <Grid className="artist-text" item xs={12} lg={6}>
                            Text
                        </Grid>
                    </Grid>
                    <div className="promise-container">
                        <div className="promise">
                            <h2><q>I make all my jewelry with a sense of commitment &amp; sentiment, hoping it will be treasured with joy. <br/>
                            My jewels are a timeless collection, which appeals to all ages, there is a part of jewelery one can own at any age and keep forever.
                            </q></h2>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    ); 
}
export default Artist;