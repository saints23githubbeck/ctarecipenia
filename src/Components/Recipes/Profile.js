import React from 'react';
import Show from '../Shared/Show/Show.jsx'; 
import './Profile.css'
import profile from '../../images/profile.png'
import { Card, Col, Row } from 'react-bootstrap';
import recipeImg from '../../assets/image/02.jpg'
import styles from '../../assets/css/Video.module.css';
import { Button } from '@mui/material';
import useMyvideo from '../../hooks/useMyVideo.js';


const Profile = () => {
    const [myVideo] = useMyvideo();
    return(
    <>
        <div className=' m-4 d-md-flex'>
            <main className='col-md-9'>
                <div className='col-md-12 d-md-flex profile'>
                    <div className='col-md-3 '>
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

                {/* ==============new section start============= */}
                <div className='col-md-12 mt-4 des-section'>
                    <div>
                        <div className="row p-2">
                            <div className="col-1 quote-left">
                                <h1><i className="fas fa-quote-left"></i></h1>
                            </div>

                            <div className="col-10">
                                <p>Description</p>
                                <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam laboriosam, est ex nemo reiciendis non repellat libero magnam alias ratione.</h3>
                            </div>

                            <div className="col-1 quote-right">
                                <h1><i className="fas fa-quote-right"></i></h1>
                            </div>
                        </div>
                    </div>
                </div>

                {/* =============Recipes section start============== */}
                <div className='mt-4'>
                    <Row xs={1} md={3} className="g-4">
                        {Array.from({ length: 6 }).map((_, idx) => {
                            return (
                                <Col>
                                    <Card style={{ border: 0, padding: '4px', fontFamily: 'auto' }}>
                                        <Card.Img variant="top" className="recipe-img" src={recipeImg} />
                                        <Card.Body style={{ paddingLeft: 0 }}>
                                            <Card.Text style={{ color: '#9b9292' }}>
                                                RECIPES - SNACK -
                                            </Card.Text>
                                            <Card.Title style={{ fontSize: '25px' }}>Tropical Smoothie Bowl</Card.Title>
                                            <Card.Text style={{ color: '#9b9292' }}>
                                                <p style={{ marginRight: '10px', display: 'inline' }}> 25min -</p>  1-2 Portions
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            );
                        })}
                    </Row>
                </div>

            </main>

            <aside className='col-md-3'>
                <div className=' mx-5'>
                    <h1 >Excepture</h1>
                    <hr className='customHR' />
                    {Array.from({ length: 2 }).map((_, idx) => {
                        return (
                            <div className='aside-recipes '>
                                <h4>Exepture</h4>
                                <h5>Exepture font</h5>
                                <h6 className='exdetail'>Exepture details</h6>
                               <div className='d-flex justify-content-between'>
                               <h5><i class="fas fa-heart"></i> 600</h5>
                               <h5><i class="fas fa-plus-square"></i> 120</h5>
                               <h5> SHARE</h5>
                               </div>
                            </div>

                        );
                    })}
                </div>

                {/* adide excpture two start  */}
                <div className=' mx-5'>
                    <h1 >Excepture</h1>
                    <hr className='customHR' />
                    <div className='py-4'>
                        <Row xs={1} md={1} className='g-4'>
                            {myVideo.map(video => (
                                <Col key={video.id} className={styles.cardContainer}>
                                    <Card className='h-100'>
                                        <Card.Img className={styles.cardImg} variant="top" src={video?.img} />
                                        <div className={styles.middle}>
                                            <div className="card-btn">
                                                <Button className="bg-transparent"><i className="far fa-play-circle fs-1 fw-bolder"></i></Button>
                                            </div>
                                        </div>
                                    </Card>
                                </Col>
                            ))}
                        </Row>
                    </div>
                </div>   
            </aside>


        </div>



        <Show></Show>
    </>
);
}
export default Profile;