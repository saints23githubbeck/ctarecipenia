import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import useCommunity from '../../../hooks/useCommunity';
import Community from '../Community/Community';
import './communities.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Show from '../../Shared/Show/Show';
const Communities = () => {
    const { communities } = useCommunity();
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className='communities mt-5'>
            <Container data-aos="fade-up" data-aos-delay="500">
                <div className='text-center w-50 mx-auto'>
                    <h1><b>Meet Our Communities</b></h1>
                    <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum architecto iusto, ullam velit accusantium sunt facilis accusamus! </p>
                </div>
                <div>
                    <div class="row mt-5">
                        {
                            communities.map(community => <Community
                                community={community}
                            ></Community>)
                        }
                    </div>
                </div>
            </Container>
            <Show />
        </div>
    );
};

export default Communities;