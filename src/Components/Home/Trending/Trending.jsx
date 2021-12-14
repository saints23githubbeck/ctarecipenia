import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import useTrending from '../../../hooks/useTrending';
import styles from '../../../assets/css/Trending.module.css';
import { Link } from 'react-router-dom';
import SingleTrending from './Single/SingleTrending';

const Trending = () => {
    const [trending] = useTrending();
    console.log(trending);
    return (
        <div className='mt-5'>
            <Container>
                <Row>
                    <div className={styles.sectionTitle}>
                        <h1 className={styles.trending}>Trending Recipes</h1>
                        <div className='text-end'>
                            <Link to='' className={styles.seeallLink}>
                                <Button variant='outline-success'>See All <span><i className="fas fa-angle-right"></i></span></Button>
                            </Link>
                        </div>
                    </div>
                </Row>
                <div className='py-1'>
                    <Row className='g-4'>
                        {
                            trending.map(trending => <SingleTrending
                                key={trending.id}
                                trending={trending}
                            />)
                        }
                    </Row>
                </div>
            </Container>
        </div >
    );
};

export default Trending;