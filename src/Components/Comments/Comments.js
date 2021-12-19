import React from 'react';
import './Comments.css'
import Newsletter from '../Home/Newsletter/Newsletter.jsx';

import styles from '../../assets/css/Slider.module.css'
import Show from '../Shared/Show/Show.jsx';
import asideImg from '../../images/food3.png'
import foodImg from '../../images/food2.png'
import heroImg from '../../assets/image/03.jpg'
import smsImg from '../../images/ali.png'
import { Card, Col, Row } from 'react-bootstrap';

const Comments = () => {
    return (
        <div>
            <div className='d-md-flex '>
                <main className='col-12 col-md-9 py-4 ps-4 pe-0'>
                    <div className="hero-section">
                        <div className='col-md-12'>
                            <img src={heroImg} alt="" />

                            <div className='d-md-flex p-3'>
                                <div className='col-md-8 '>
                                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse vitae ipsa aperiam</h2>
                                    <div className={styles.review}>
                                        <span><i className="fas fa-star px-2"></i></span>
                                        <span><i className="fas fa-star px-2"></i></span>
                                        <span><i className="fas fa-star px-2"></i></span>
                                        <span><i className="fas fa-star px-2"></i></span>
                                        <span><i className="fas fa-star-half-alt px-2"></i></span>
                                        <span className="px-2 text-black fw-bold fs-3 align-items-center">2K Reviews</span>
                                    </div>
                                    <div className={styles.info}>
                                        <span><i className="fas fa-concierge-bell px-2"></i><span className="text-black fw-bold fs-5">8 Ingredients</span></span>
                                        <span><i className="fas fa-clock px-2"></i><span className="text-black fw-bold fs-5">1h 30min</span></span>
                                        <span><i className="fas fa-utensil-spoon px-2"></i><span className="text-black fw-bold fs-5">4 Portions</span></span>
                                        <span><i className="fas fa-eye px-2"></i><span className="text-black fw-bold fs-5">Views</span></span>
                                    </div>
                                </div>

                                <div className="col-md-4">
                                    <p>add text - some <i className="fas fa-eye px-2 fs-3"></i> anothr - more </p>
                                    <h4 className='text-center '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum consequuntur, aliquid in molestias.</h4>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='d-md-flex'>
                        <div className='col-12 col-md-6 ps-3 pe-5 py-3 m-auto'>
                            <hr className='customhr' />
                            <h2>Ingrelienls</h2>
                            <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non, quia eos eligendi fuga, a totam expedita commodi voluptatum earum maiores veniam sint animi. Reiciendis quae inventore odio tempore molestias similiqu</p>
                            <hr className='customhr' />
                            <h2>Nullrlion</h2>
                            <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Earum assumenda facere veritatis iure laborum eius expedita, totam obcaecati error corrupti neque nisi asperiores nulla, minus qui aut! Quaerat</p>
                        </div>

                        <div className='col-12 col-md-6 mt-5  p-4 direc-sec'>
                            <h2>Directions</h2>
                            <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora earum quas, nihil ipsa cum id rerum, laborum similique aliquam dolorem ducimus reprehenderit sit alias ad illo enim sapiente suscipit inventore voluptatum laboriosam soluta repellendus! Molestias adipisci est, laborum eveniet facilis numquam! Impedit odit quas laudantium voluptas voluptates minima voluptate ex, molestiae commodi? Similique, exercitationem in harum nam maxime nesciunt modi commodi voluptates ullam laudantium nobis, ipsam vitae sint reiciendis expedita.laudantium nobis, ipsam vitae sint reiciendis expedita.</p>
                        </div>

                    </div>

                    <div className='mt-5 pt-3'>
                        <div className='d-flex justify-content-between'>
                            <div className="input-heading">
                                <h3>Messages</h3>
                            </div>
                            <div style={{ color: '#FF4B4A' }} className='d-flex justify-content-between'>
                                <h3 className='mx-3'>Chat</h3>
                                <h3>Views</h3>
                            </div>
                        </div>
                        <textarea className='text-massage mt-4' name="" id="" cols="30" rows="5"></textarea>

                        <div className='mt-5 w-75 mb-5'>
                            <div xs={1} md={1} className="g-4">
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <div className='smsDetails mb-5 p-4'>
                                        <div className='inline-flex align-items-center'>
                                            <img src={smsImg} alt="" />
                                            <p className='mx-2'>Name of user</p>
                                            <p style={{ color: '#FF4B4A' }} className='mx-5'>view</p>
                                        </div>
                                        <p className='mt-2 pb-0'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam explicabo sed harum eveniet dolores eum voluptas odio esse temporibus itaque?</p>
                                    </div>
                                ))}
                            </div>
                        </div>


                        <div className='mt-5 justify-content-center'>
                            <h2 style={{ color: '#FF4B4A', textAlign: 'center' }}>You may also like</h2>

                            {/* =============Like Recipes section start============== */}
                            <div className='mt-4'>
                                <Row xs={1} md={3} className="g-3">
                                    {Array.from({ length: 3 }).map((_, idx) => (
                                        <Col>
                                            <Card style={{ background: '#FEF2F2', border: 0, padding: '4px', fontFamily: 'auto' }}>
                                                <Card.Img variant="top" className="" src={foodImg} />
                                                <Card.Body style={{ }}>
                                                    <Card.Title style={{ fontSize: '20px' }}>Tittle</Card.Title>
                                                    <Card.Text>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, tempora.
                                                    </Card.Text>
                                                    <div  style={{ color: '#FF4B4A' }} className='d-flex justify-content-between'>
                                                        <div className='d-flex'>
                                                            <h5 className=''><i class="fas fa-heart"></i> 600</h5>
                                                            <h5><i class="fas fa-plus-square"></i> 120</h5>
                                                        </div>
                                                        <h5> SHARE</h5>
                                                    </div>
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </div>



                        </div>


                    </div>

                </main>

                <aside className='col-12 col-md-3 px-5 py-3'>
                    <div className=''>
                        <h1>Excepture</h1>
                        <hr className='customHR' />
                        {Array.from({ length: 3 }).map((_, idx) => {
                            return (
                                <div className='aside-recipes '>
                                    <h4>Excepture</h4>
                                    <h5>Excepture font</h5>
                                    <h6 className='exdetail'>Exepture details</h6>

                                    <div className='d-flex justify-content-between'>
                                        <h5><i class="fas fa-heart"></i> 600</h5>
                                        <h5><i class="fas fa-plus-square"></i> 120</h5>
                                        <h5> SHARE</h5>
                                    </div>
                                </div>

                            );
                        })}
                        <div>
                            <div className="row asideLast">
                                <div className="col">
                                    <h6 className='mb-4' style={{ color: 'red' }}>Excepture</h6>
                                    <img src={asideImg} alt="" />
                                    <h3 className='mt-4'>Some text will be go here, some text will be</h3>
                                </div>

                                <div className="col mt-5 ">
                                    <h6 className='mb-4' style={{ color: 'red' }}>Excepture</h6>
                                    <h3 className='mt-4'>Some text</h3>
                                    <p>here wil p tag text and the text wll come</p>
                                </div>
                                <div className="col mt-5 ">
                                    <h6 className='mb-4' style={{ color: 'red' }}>Excepture</h6>
                                    <h3 className='mt-4'>Some</h3>
                                    <p>here wil p tag text and the text wll come</p>
                                </div>
                                <button className='text-center mt-5'>see more</button>
                            </div>
                        </div>
                    </div>


                </aside>

            </div>
            <Newsletter className="mb-0"></Newsletter>
            <Show></Show>

        </div>
    );
};

export default Comments;