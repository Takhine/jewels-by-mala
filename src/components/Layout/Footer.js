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
const Footer = () => {
    return (
        <div className="container footer">
            <List className="footer-list">
                <NavLink exact to="/">
                    <ListItem>Home</ListItem>
                </NavLink>
                <NavLink exact to="/artist">
                    <ListItem>Artist</ListItem>
                </NavLink>
                <NavLink exact to="/collection">
                    <ListItem>Collection</ListItem>
                </NavLink>
                <NavLink exact to="/testimonials">
                    <ListItem>Testimonials</ListItem>
                </NavLink>
                <NavLink exact to="/contact">
                    <ListItem>Contact</ListItem>
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