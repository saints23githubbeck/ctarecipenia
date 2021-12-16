import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Favr = ({ fav }) => {
    const { img } = fav;
    return (
        <Col>
            <Card style={{ height: 'auto', width: '330px' }} className=" mx-3">
                <div className="mx-auto">
                    <Card.Img className='img-fluid' variant="top" src={img} />
                </div>
                <Card.Body className="d-flex justify-content-around align-items-center" style={{ backgroundColor: '#FFCECE' }}>
                    <span className='fw-bolder'><i className="fas fa-heart" style={{ color: "#FF4A4A" }}></i>{" "}{" "} 256</span>
                    <span className='fw-bolder'><i className="fas fa-comment-alt" style={{ color: "#FF4A4A" }}></i>{" "}{" "} 256</span>
                    <span className='fw-bolder'>Share</span>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Favr;