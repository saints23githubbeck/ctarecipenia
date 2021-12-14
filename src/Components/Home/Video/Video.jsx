import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../../assets/css/Video.module.css';
import useBigvideo from '../../../hooks/useBigvideo';
import useSmvideo from '../../../hooks/useSmvideo';

const Video = () => {
    const [bigVideo] = useBigvideo();
    const [smVideo] = useSmvideo();
    return (
        <div style={{
            backgroundColor: '#FFF2F2', paddingTop: '24px'
        }}>
            <Container>
                <Row>
                    <div className={styles.sectionTitle}>
                        <h1 className={styles.video}>Video Guides</h1>
                        <div className='text-end'>
                            <Link to='' className={styles.seeallLink}>
                                <Button variant='outline-success'>See All <span><i className="fas fa-angle-right"></i></span></Button>
                            </Link>
                        </div>
                    </div>
                </Row>
                <div className='py-1'>
                    <Row xs={1} md={2} className='g-4'>
                        {bigVideo.map(video => (
                            <Col key={video.id} className={styles.cardContainer}>
                                <Card className='h-100'>
                                    <Card.Img className={styles.cardImg} variant="top" src={video?.img} />
                                    <div className="position-absolute bottom-0 left-0 w-100 text-center text-white p-3" style={{ backgroundColor: "#000", opacity: '0.6' }}>
                                        <Card.Title className='fs-5 fw-bold'>{video?.title}</Card.Title>
                                    </div>
                                    <div className={styles.middle}>
                                        <div className="card-btn">
                                            <Button className="bg-transparent"><i className="far fa-play-circle fs-1 fw-bolder"></i></Button>
                                        </div>
                                    </div>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                    <div className='py-4'>
                        <Row xs={1} md={4} className='g-4'>
                            {smVideo.map(video => (
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
            </Container>
        </div >
    );
};

export default Video;