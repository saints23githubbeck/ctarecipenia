import React from 'react';
import { Container, Button } from 'react-bootstrap';
import styles from '../../../assets/css/Newsletter.module.css';

const Newsletter = () => {
    return (
        <div className='mb-3' style={{ backgroundColor: "#FF4A4A" }}>
            <Container>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='text-white py-5'>
                        <h3>Subscribe to the best food newsletter</h3>
                        <p className='pt-2 text-white'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod <br /> tempor invidunt ut labore et dolore</p>
                    </div>
                    <div>
                        <Button className={styles.btnnews}>Add my email to the list</Button>
                    </div>
                </div>
            </Container>
        </div >
    );
};

export default Newsletter;