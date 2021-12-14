import React from 'react';
import { Container } from 'react-bootstrap';
import useCommunity from '../../../hooks/useCommunity';
import Community from '../Community/Community';
import './communities.css';
import Show from '../../Shared/Show/Show';
const Communities = () => {
    const { communities } = useCommunity();
    return (
        <div className='communities mt-5'>
            <Container>
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