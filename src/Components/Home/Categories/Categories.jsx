import React, { useState } from "react";
import { Col, Container, Row, Spinner, Tab, Tabs } from "react-bootstrap";
import useProduct from "../../../hooks/useProduct";
import styles from "../../../assets/css/Categories.module.css";
import Category from "./Category/Category";
import ReactPaginate from "react-paginate";
import Pagination from "../../Pagination/Pagination";

const Categories = () => {
  const [beef, chicken, fish, vegetable, desert] = useProduct();
  const [key, setKey] = useState("Beef");
  const [datalength, setDataLength] = useState(0);
  const [pageNumber, setPageNumber] = useState(0);

  const dataPerPage = 6;
  const pagesVisited = pageNumber * dataPerPage;

  const sliced = {
    start: pagesVisited,
    end: pagesVisited + dataPerPage,
  };

  console.log(sliced.start, "start");
  console.log(sliced.end, "end");

  // const mealType = CatProduct.filter(
  //     (product) => product.category === "meal-type",
  // );
  // const diet = CatProduct.filter((product) => product.category === "Diet-and-Health");
  // const Dish = CatProduct.filter((product) => product.category === "Dish-Type");
  // const Vegetable = CatProduct.filter((product) => product.category === "Vegetable");
  // const world = CatProduct.filter((product) => product.category === "World-Cuisine");
  const handletab = (name) => {
    setPageNumber(0)
    console.log(name);
    console.log("clicked on tab");
  };
  return (
    <>
      <Container className={styles.cattab}>
        <h1 className="text-center">Recipe Categories</h1>
        <p className="text-center fs-5">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy <br /> eirmod tempor invidunt ut labore et dolore magna
          aliquyam
        </p>
        <Row>
          <Col className="col-12">
            <Tabs
              onClick={(e) => handletab(e.target.attributes[3].nodeValue)}
              id="controlled-tab-example"
              activeKey={key}
              onSelect={(k) => setKey(k)}
              className="mb-3 d-flex justify-content-center"
            >
              <Tab
                eventKey="Beef"
                title="Beef"
                value="Beef"
                className="bg-blue"
              >
                <Row className="py-5 g-4">
                  {beef.length === 0 || beef.length < sliced.start ? (
                    <div className="w-full text-center">
                      <Spinner animation="border" variant="secondary" />
                      <p className="text-danger text-3xl font-bold my-3">No recipe found</p>
                    </div>
                  ) : (
                    beef
                      .slice(sliced.start, sliced.end)
                      .map((product) => (
                        <Category product={product} key={product.id} />
                      ))
                  )}
                </Row>
              </Tab>
              <Tab eventKey="Chicken" title="Chicken" value="Chicken">
                <Row className="py-5 g-4">
                  {chicken.length === 0 || chicken.length < sliced.start ? (
                    <div className="w-full text-center">
                      <Spinner animation="border" variant="secondary" />
                        <p className="text-danger text-3xl font-bold my-3">No recipe found</p>
                    </div>
                  ) : (
                    chicken
                      .slice(sliced.start, sliced.end)
                      .map((product) => (
                        <Category product={product} key={product.id} />
                      ))
                  )}
                </Row>
              </Tab>
              <Tab eventKey="Fish" title="Fish" value="Fish">
                <Row className="py-5 g-4">
                  {fish.length === 0 || fish.length < sliced.start ? (
                    <div className="w-full text-center">
                      <Spinner animation="border" variant="secondary" />
                      <p className="text-danger text-3xl font-bold my-3">No recipe found</p>
                    </div>
                  ) : (
                    fish
                      .slice(sliced.start, sliced.end)
                      .map((product) => (
                        <Category product={product} key={product.id} />
                        
                      ))
                  )}
                </Row>
              </Tab>
              <Tab eventKey="Vegetable" title="Vegetable" value="Vegetable">
                <Row className="py-5 g-4">
                  {vegetable.length === 0 || vegetable.length < sliced.start ? (
                    <div className="w-full text-center">
                      <Spinner animation="border" variant="secondary" />
                      <p className="text-danger text-3xl font-bold my-3">No recipe found</p>
                    </div>
                  ) : (
                    vegetable
                      .slice(sliced.start, sliced.end)
                      .map((product) => (
                        <Category product={product} key={product.id} />
                      ))
                  )}
                </Row>
              </Tab>
              <Tab eventKey="Pizza" title="Pizza" value="Pizza">
                <Row className="py-5 g-4">
                  {desert.length === 0 || desert.length < sliced.start ? (
                    <div className="w-full text-center">
                      <Spinner animation="border" variant="secondary" />
                      <p className="text-danger text-3xl font-bold my-3">No recipe found</p>

                    </div>
                  ) : (
                    desert
                      .slice(sliced.start, sliced.end)
                      .map((product) => (
                        <Category product={product} key={product.id} />
                      ))
                  )}
                </Row>
              </Tab>
            </Tabs>
          </Col>
        </Row>

        <Pagination
          pagesVisited={pagesVisited}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
        />
      </Container>
    </>
  );
};

export default Categories;
