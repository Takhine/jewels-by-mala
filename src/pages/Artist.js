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
                        <Grid className="artist-text" item xs={12} md={6}>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                        <br/>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap 
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
                        and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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