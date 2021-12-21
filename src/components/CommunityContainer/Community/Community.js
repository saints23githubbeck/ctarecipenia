import React from 'react';
import './Community.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinterestIcon from '@mui/icons-material/Pinterest';
import {Link } from 'react-router-dom';
const Community = ({ community }) => {
    const { name, photo, description, facebook, twitter, instagram, pinterest } = community;
    return (
        <div className='col-md-4 p-4 mt-4'>
            <div className=' text-center community'>
               <Link as={Link} to="/profile"><img className="img-fluid" src={photo} alt="" /></Link> 
                <h5>{name}</h5>
                <p>{description}</p>
                <hr />
                <div className="my-3">
                    <a href={pinterest} target="_blank" rel="noreferrer"><PinterestIcon style={{ margin: "0 4px", color: "orange", fontSize: "27px" }} /></a>
                    <a href={facebook} target="_blank" rel="noreferrer"><FacebookIcon style={{ margin: "0 4px", color: "blue", fontSize: "27px" }} /></a>
                    <a href={instagram} target="_blank" rel="noreferrer"><InstagramIcon style={{ margin: "0 4px", color: "orange", fontSize: "27px" }} /></a>
                    <a href={twitter} target="_blank" rel="noreferrer"><TwitterIcon style={{ margin: "0 4px", color: "lightblue", fontSize: "27px" }} /></a>
                </div>
            </div>
        </div>
    );
};

export default Community;