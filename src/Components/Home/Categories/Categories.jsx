import React, { useState } from 'react';
import { Col, Container, Row, Spinner, Tab, Tabs } from 'react-bootstrap';
import useProduct from '../../../hooks/useProduct';
import styles from '../../../assets/css/Categories.module.css';
import Category from './Category/Category';

const Categories = () => {
    const [CatProduct] = useProduct();
    const [key, setKey] = useState("Meal Type");
    const mealType = CatProduct.filter(
        (product) => product.category === "meal-type",
    );
    const diet = CatProduct.filter((product) => product.category === "Diet-and-Health");
    const Dish = CatProduct.filter((product) => product.category === "Dish-Type");
    const ingredient = CatProduct.filter((product) => product.category === "Ingredient");
    const world = CatProduct.filter((product) => product.category === "World-Cuisine");
    return (
        <Container className={styles.cattab}>
            <Row>
                <Col className="col-12">
                    <Tabs
                        id="controlled-tab-example"
                        activeKey={key}
                        onSelect={(k) => setKey(k)}
                        className="mb-3 d-flex justify-content-center"
                    >
                        <Tab eventKey="Meal Type" title="Meal Type" className="bg-blue">
                            <Row className="py-5 g-4">
                                {mealType.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : mealType.map((product) => (
                                    <Category product={product} key={product.id} />))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Diet and Health" title="Diet and Health">
                            <Row className="py-5 g-4">
                                {diet.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : diet.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Dish Type" title="Dish Type">
                            <Row className="py-5 g-4">
                                {Dish.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : Dish.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="Ingredient" title="Ingredient">
                            <Row className="py-5 g-4">
                                {ingredient.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : ingredient.map((product) => (
                                    <Category product={product} key={product.id} />
                                ))}
                            </Row>
                        </Tab>
                        <Tab eventKey="World Cuisine" title="World Cuisine">
                            <Row className="py-5 g-4">
                                {world.length === 0 ? <div className="w-75 mx-auto">
                                    <Spinner animation="border" variant="secondary" />
                                </div> : world.map((product) => (
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