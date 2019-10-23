import React from 'react';
import {
    List,
    ListItem,
    Button
} from '@material-ui/core'
import pinterest from '../../static/images/icons/pinterest-icon.png';
import facebook from '../../static/images/icons/facebook-icon.png';
import instagram from '../../static/images/icons/instagram-icon.png';
import twitter from '../../static/images/icons/twitter-icon.png';
import { NavLink } from 'react-router-dom';
const Footer = (props) => {
    return (
        <div className="container footer">
            <List className="footer-list">
                    <ListItem button onClick={props.open}>Home</ListItem>
                <NavLink exact to="/artist">
                    <ListItem button>Artist</ListItem>
                </NavLink>
                <NavLink exact to="/collection">
                    <ListItem button>Collection</ListItem>
                </NavLink>
                <NavLink exact to="/testimonials">
                    <ListItem button>Testimonials</ListItem>
                </NavLink>
                <NavLink exact to="/contact">
                    <ListItem button>Contact</ListItem>
                </NavLink>
            </List>
            <hr />
            <div className="copyright">
                <p>Copyright &copy;JEWELS BY MALA 2019 &nbsp; | &nbsp; Created by Pinxitblue &nbsp;|&nbsp; Privacy policy Term of use Credits</p>
                <div className="social-container">
                    <img src={pinterest} alt="Pinterest" />
                    <img src={facebook} alt="Facebook" />
                    <img src={instagram} alt="Instagram" />
                    <img src={twitter} alt="Twitter" />
                </div>
            </div>
        </div>
    );
}
export default Footer;