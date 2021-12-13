import React from 'react';
import styles from '../../../assets/css/Slider.module.css'
import { Button, Carousel } from 'react-bootstrap';
import img1 from '../../../assets/image/01.jpg';
import img2 from '../../../assets/image/02.jpg';
import img3 from '../../../assets/image/03.jpg';

const Slider = () => {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ height: '550px' }}
                    src={img1}
                    alt="First slide"
                />
                <Carousel.Caption className={styles.caption}>
                    <div className={styles.title}>
                        <h3 className="fs-1 fw-bold">
                            Chocolate and cream covered
                            donuts with sprinkles
                        </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <div className={styles.review}>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star-half-alt px-2"></i></span>
                            <span className="px-2 text-white fw-bold fs-3 align-items-center">200 Reviews</span>
                        </div>
                        <div className={styles.info}>
                            <span><i className="fas fa-concierge-bell px-2"></i><span className="text-white fw-bold fs-5">8 Ingredients</span></span>
                            <span><i className="fas fa-clock px-2"></i><span className="text-white fw-bold fs-5">
                                1h 30min</span></span>
                            <span><i className="fas fa-utensil-spoon px-2"></i><span className="text-white fw-bold fs-5">
                                4 Portions</span></span>
                        </div>
                        <div className={styles.slidebtn}>
                            <Button className={styles.btnslide}>View Recipe</Button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ height: '550px' }}
                    src={img2}
                    alt="Second slide"
                />
                <Carousel.Caption className={styles.caption}>
                    <div className={styles.title}>
                        <h3 className="fs-1 fw-bold">
                            Chocolate and cream covered
                            donuts with sprinkles
                        </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <div className={styles.review}>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star-half-alt px-2"></i></span>
                            <span className="px-2 text-white fw-bold fs-3 align-items-center">200 Reviews</span>
                        </div>
                        <div className={styles.info}>
                            <span><i className="fas fa-concierge-bell px-2"></i><span className="text-white fw-bold fs-5">8 Ingredients</span></span>
                            <span><i className="fas fa-clock px-2"></i><span className="text-white fw-bold fs-5">
                                1h 30min</span></span>
                            <span><i className="fas fa-utensil-spoon px-2"></i><span className="text-white fw-bold fs-5">
                                4 Portions</span></span>
                        </div>
                        <div className={styles.slidebtn}>
                            <Button className={styles.btnslide}>View Recipe</Button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100" style={{ height: '550px' }}
                    src={img3}
                    alt="Third slide"
                />
                <Carousel.Caption className={styles.caption}>
                    <div className={styles.title}>
                        <h3 className="fs-1 fw-bold">
                            Chocolate and cream covered
                            donuts with sprinkles
                        </h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        <div className={styles.review}>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star px-2"></i></span>
                            <span><i className="fas fa-star-half-alt px-2"></i></span>
                            <span className="px-2 text-white fw-bold fs-3 align-items-center">200 Reviews</span>
                        </div>
                        <div className={styles.info}>
                            <span><i className="fas fa-concierge-bell px-2"></i><span className="text-white fw-bold fs-5">8 Ingredients</span></span>
                            <span><i className="fas fa-clock px-2"></i><span className="text-white fw-bold fs-5">
                                1h 30min</span></span>
                            <span><i className="fas fa-utensil-spoon px-2"></i><span className="text-white fw-bold fs-5">
                                4 Portions</span></span>
                        </div>
                        <div className={styles.slidebtn}>
                            <Button className={styles.btnslide}>View Recipe</Button>
                        </div>
                    </div>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default Slider;