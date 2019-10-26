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
                        <p>Innovative, gifted yet unambitious that was me, as a young girl of 15 in Bombay. My  I found a mentor, guide and philosopher in my grand dad, he pushed me to get into our family business of Jewelry set up by my uncles proved to be my first step towards  my lifelong romance with the jewelry. I put my heart and soul to learn the fine art &amp; intricacy of making of timeless jewelry. My relentless effort lead me to head 2 stores and 70 teammates. I was learning, excelling, and soon came to be known for my sincerity and good public relationship. Our jewelry was the talk of the town and I was popular in the jewelry circle in Bombay. Soon, 24 years just rolled by, in love, commitment, dedication to learn all about what I Loved- Jewels &amp; Jewelry.</p>
                        <br/>
                        <p>The girl who had dreamt of only being a housewife as a young girl, soon had her calling to get married to the man of her dreams and moved to California. I had no plans to setup shop there but as the fate had it, a old client back home came looking for me to help her design jewelry for her daughters wedding, I referred them back home but he insisted that  whenever he thought of Jewelry, I was the first person who came to their mind, moved by the trust and faith bestowed upon me, it was no way I could have said no to him, and that's when it all started it once again, only this time it was for ME.</p>
                        <br/>
                        <p>With one satisfied customer already in place, many offers soon followed to create contemporary, customized jewelry that was my rebirth, I christened: Jewels by Mala.inc. in 2015 and embarked on my journey only this time on my own into the magical &amp; bedazzled world of Jewelery. Many designs, innovations, craftsmanship later I still find myself recreating a part of me with my art &amp; finesse to design each  piece of Jewelry which will stay with you forever!</p>
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