import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../../assets/css/Popular.module.css';
import usePopular from '../../../hooks/usePopular';
import Single from './Single/Single';

const Popular = () => {
    const [popular,setIsAll,isAll] = usePopular();
    console.log(popular);
    const handleSeeAll = () => {
        setIsAll(!isAll);
      };
    return (
        <div className='mt-2' style={{
            backgroundColor: '#FFF2F2', paddingTop: '24px'
        }}>
            <Container>
                <Row>
                    <div className={styles.sectionTitle}>
                        <h1 className={styles.popular}>Popular Recipes</h1>
                        <div className='text-end'>
                            <Link to='' className={styles.seeallLink}>
                                <Button  onClick={handleSeeAll} variant='outline-success'>See All <span><i className="fas fa-angle-right"></i></span></Button>
                            </Link>
                        </div>
                    </div>
                </Row>
                <div className='py-5'>
                    <Row className='g-4'>
                        {
                            popular.map(popular => <Single
                                key={popular.id}
                                popular={popular}
                            />)
                        }
                    </Row>
                </div>
            </Container>
        </div >
    );
};

export default Popular;