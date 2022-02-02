
import React, { useState } from 'react';
import { Col, Container, Row, Spinner, Tab, Tabs } from 'react-bootstrap';
import useProduct from '../../../hooks/useProduct';
import styles from '../../../assets/css/Categories.module.css';
import Category from './Category/Category';

const Categories = () => {
    const [beef, chicken, fish, vegetable, desert] = useProduct();
    const [key, setKey] = useState("Beef");
    console.log(beef);

    // const mealType = CatProduct.filter(
    //     (product) => product.category === "meal-type",
    // );
    // const diet = CatProduct.filter((product) => product.category === "Diet-and-Health");
    // const Dish = CatProduct.filter((product) => product.category === "Dish-Type");
    // const Vegetable = CatProduct.filter((product) => product.category === "Vegetable");
    // const world = CatProduct.filter((product) => product.category === "World-Cuisine");
    return (
        <Container className={styles.cattab}>
            <h1 className='text-center'>Recipe Categories</h1>
            <p className='text-center fs-5'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy <br /> eirmod tempor invidunt ut labore et dolore magna aliquyam</p>
            <Row>
                <Col className="col-12">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 d-flex justify-content-center"
                    >
                        <Tab eventKey="Beef" title="Beef" className="bg-blue">
                            <Row className="py-5 g-4">
                                {beef.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : beef.map((product) => (
                                    <Category product={product} key={product.id} />))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Chicken" title="Chicken">
                            <Row className="py-5 g-4">
                                {chicken.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : chicken.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Fish" title="Fish">
                            <Row className="py-5 g-4">
                                {fish.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : fish.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Vegetable" title="Vegetable">
                            <Row className="py-5 g-4">
                                {vegetable.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : vegetable.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Pizza" title="Pizza">
                            <Row className="py-5 g-4">
                                {desert.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : desert.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                    </Tabs>
                </Col>
            </Row>
        </Container >



    );
};

export default Categories;