import React from 'react';
import Show from '../Shared/Show/Show.jsx'; 
import './Profile.css'
import profile from '../../images/profile.png'

const Profile = () => {
    return (
        <>
        <div className=' m-4'>

            <div className='col-md-9 d-md-flex profile'>
               <div  className='col-md-3 '>
                   <img className='profileImg img-fluid' src={profile} alt="" />
               </div>
               <div className='col-md-9 profile-details'>
                 <h5 className="m-0"><i className="icons fas fa-user"></i> Name</h5>
                 <h5><i className="icons fas fa-mars"></i> Gender</h5>
                 <h5><i className="icons fas fa-envelope"></i> Email</h5>
                 <h5><i className="icons fas fa-eye"></i> Profile Views</h5>
                 <h5><i className="icons fas fa-flag"></i> Country</h5>
                 <h5><i className="icons fas fa-hamburger"></i> No Recipes</h5>
                 <h5><i className="icons fas fa-calendar-alt"></i> Member Since</h5>
               </div>
            </div>
            <div className='col-md-3'>

            </div>
           
        </div>
        <Show></Show>
        </>
    );
};

export default Profile;