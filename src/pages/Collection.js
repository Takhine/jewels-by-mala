import React from 'react'; 
import {Grid} from '@material-ui/core';

import {NavLink} from 'react-router-dom';
 const Collection=()=> {
    return (
        <div className="collection-container">
            <Grid className="collection-grid" container>
                <Grid className="diamonds-side" item xs={12} sm={6}>
                    <div className="diamonds-side-content">
                        <h2 className="diamond-title">Diamonds</h2>
                        <NavLink exact to="/diamonds">
                        <p className="collection-link">View Collection</p>
                        <hr/>
                        </NavLink>
                    </div> 
                </Grid>
                <Grid className="uncut-side" item xs={12} sm={6}>
                <div className="uncut-side-content">
                        <h2>Uncut</h2>
                        <div className="seperate-title">
                        <h2 className="diamond-title">Diamonds</h2>
                        <NavLink exact to="/uncut-diamonds">
                        <p className="collection-link">View Collection</p>
                        <hr/>
                        </NavLink>
                        </div>
                    </div> 
                </Grid>

            </Grid>
        </div>
    ); 
}
export default Collection;