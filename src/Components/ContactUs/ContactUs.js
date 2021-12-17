import { Container } from '@mui/material';
import React from 'react';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import ShareIcon from '@mui/icons-material/Share';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MessageIcon from '@mui/icons-material/Message';
import './ContactUs.css'
import Show from '../Shared/Show/Show';
const ContactUs = () => {
    return (
        <div>
            <Container>
                <div class="row my-3">
                    <div class="col-md-3">
                        <div className='contact-header-item p-2'>
                            <div>
                                <LocationOnIcon className='contact-icon' />
                            </div>
                            <div className='p-1'>
                                <h3><b>Location</b></h3>
                                <span>19th Random Street, East Legon accra, Ghana</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className='contact-header-item p-2'>
                            <div>
                                <PhoneAndroidIcon className='contact-icon' />
                            </div>
                            <div className='p-1'>
                                <h3><b>Phone Us</b></h3>
                                <span>(233)246-810-1214</span>
                                <br />
                                <span>(233)012-345-6789</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className='contact-header-item p-2'>
                            <div>
                                <MailOutlineIcon className='contact-icon' />
                            </div>
                            <div className='p-1'>
                                <h3><b>Email Us</b></h3>
                                <span>help@recipemania.com</span>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-3">
                        <div className='contact-header-item p-2'>
                            <div>
                                <ShareIcon className='contact-icon' />
                            </div>
                            <div className='p-1'>
                                <h3><b>Follow Us</b></h3>
                                <div>
                                    <PinterestIcon style={{ fontSize: "25px", color: "gray", margin: "0 7px" }} />
                                    <FacebookIcon style={{ fontSize: "25px", color: "gray", margin: "0 7px" }} />
                                    <InstagramIcon style={{ fontSize: "25px", color: "gray", margin: "0 7px" }} />
                                    <TwitterIcon style={{ fontSize: "25px", color: "gray", margin: "0 7px" }} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-5 location-and-form">
                    <div class="col-md-6">
                        <div>
                        <iframe title="my-recipie" src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31764.132228735172!2d-0.17363238204664813!3d5.638130488418713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1639661607466!5m2!1sen!2sbd" width="100%" height="450" allowfullscreen="" loading="lazy"></iframe>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div>
                            <h2>
                                <b>Get in Touch <br />
                                And Let Us Know How <br />
                                we can Help</b>
                            </h2>
                            <div>
                                <form>
                                    <div class="input-group flex-nowrap">
                                        <span class="input-group-text" id="addon-wrapping">
                                            <PersonOutlineIcon />
                                        </span>
                                        <input type="text" class="form-control" placeholder="Your Full Name" aria-label="Username" aria-describedby="addon-wrapping" />
                                    </div>
                                    <div class="input-group flex-nowrap my-2">
                                        <span class="input-group-text" id="addon-wrapping">
                                            <MailOutlineIcon />
                                        </span>
                                        <input type="email" class="form-control" placeholder="Your Email Address" aria-label="Username" aria-describedby="addon-wrapping" />
                                    </div>
                                    <div class="input-group flex-nowrap my-2">
                                        <span class="input-group-text" id="addon-wrapping">
                                            <MessageIcon />
                                        </span>
                                        <textarea placeholder='Enter your Message' className='form-control' name="" id="" rows="4"></textarea>
                                    </div>
                                    <div className='d-grid'>
                                        <button className='my-bg-button'>Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Show></Show>
        </div>
    );
};

export default ContactUs;