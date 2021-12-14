import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../../assets/css/Video.module.css';

const Video = () => {
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
                <div className='py-5'>
                    <Row xs={1} md={6} className='g-4'>

                    </Row>
                </div>
            </Container>
        </div >
    );
};

export default Video;