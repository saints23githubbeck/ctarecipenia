import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useCommunity from '../../../hooks/useCommunity';
import Community from '../Community/Community';
import food1 from '../../../images/food1.png';
import food2 from '../../../images/food2.png';
import food3 from '../../../images/food3.png';
import food4 from '../../../images/food4.png';
import communitylogo from '../../../images/login-logo.png'
import './communities.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Communities = () => {
    const {communities}= useCommunity();
    useEffect(() =>{
        AOS.init();
        },[]);
    return (
        <div className='communities'>
            <Container data-aos="fade-up" data-aos-delay="500">
                <div className='text-center w-50 mx-auto'>
                    <h1><b>Meet Our Communities</b></h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto iusto, ullam velit accusantium sunt facilis accusamus! </p>
                </div>
                <div>
                    <div class="row mt-5">
                        {
                            communities.map(community=> <Community
                                community = {community}
                            ></Community>)
                        }
                    </div>
                </div>
            </Container>
            {/* Images  */}
            <div class="row community-food" data-aos="fade-up" data-aos-delay="500">
                <div class="col-md-3 p-0">
                    <img className="img-fluid p-0 m-0 w-100" src={food1} alt="" />
                </div>
                <div class="col-md-3 p-0">
                    <img className="img-fluid p-0 m-0 w-100" src={food2} alt="" />
                </div>
                <div class="col-md-3 p-0">
                    <img className="img-fluid p-0 m-0 w-100" src={food3} alt="" />
                </div>
                <div class="col-md-3 p-0">
                    <img className="img-fluid p-0 m-0 w-100" src={food4} alt="" />
                </div>
            </div>
            {/* Recipe important Links  */}
            <div className='text-center mt-3' data-aos="fade-left" data-aos-delay="500">
                <img src={communitylogo} alt="" />
                <div className='nav-menu'>
                    <h3>Home</h3>
                    <h3>Recipe</h3>
                    <h3>About Us</h3>
                    <h3>Contact Us</h3>
                </div>
                <div>
                    <PinterestIcon style={{fontSize:"35px", color:"gray", margin:"0 7px"}} />
                    <FacebookIcon style={{fontSize:"35px", color:"gray", margin:"0 7px"}} />
                    <InstagramIcon style={{fontSize:"35px", color:"gray", margin:"0 7px"}} />
                    <TwitterIcon style={{fontSize:"35px", color:"gray", margin:"0 7px"}} />
                </div>
            </div>
            <hr className='mx-auto' style={{width:"80%"}} />
            <p className='text-center'>All Right Reserved @copy 2021</p>
        </div>
    );
};

export default Communities;