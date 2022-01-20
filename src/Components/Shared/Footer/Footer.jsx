import React from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import communitylogo from '../../../images/login-logo.png'
import styles from '../../../assets/css/Footer.module.css';

const Footer = () => {
    return (
        <div className={styles.communities}>
            <div className='text-center mt-3'>
                <img src={communitylogo} alt="" />
                <div className={styles.navmenu}>
                    <h3>Home</h3>
                    <h3>Recipe</h3>
                    <h3>About Us</h3>
                    <h3>Contact Us</h3>
                </div>
                
                <div>
                    <PinterestIcon style={{ fontSize: "35px", color: "gray", margin: "0 7px" }} />
                    <FacebookIcon style={{ fontSize: "35px", color: "gray", margin: "0 7px" }} />
                    <InstagramIcon style={{ fontSize: "35px", color: "gray", margin: "0 7px" }} />
                    <TwitterIcon style={{ fontSize: "35px", color: "gray", margin: "0 7px" }} />
                </div>
            </div>
            <hr className='mx-auto' style={{ width: "80%", color: " #FF4A4A" }} />
            <p className='text-center'>All Right Reserved @copy 2021</p>
        </div>
    );
};

export default Footer;