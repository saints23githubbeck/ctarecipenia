import React from "react";
import { Card, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Category = ({ product }) => {
  const { strMeal, strCategory, strMealThumb, strArea,idMeal } = product;
  return (
    <Col xs={12} sm={12} md={3} lg={4}>
      <Link style={{textDecoration:"none",color:"black"}} to={`/recipe/${idMeal}`}>
        <Card className="porduct_card h-100">
          <Card.Img
            width="100%"
            className="product_img img-fluid mx-auto p-3"
            src={strMealThumb}
          />
          <Card.Body>
            <div className="text-center mb-5">
              <Card.Title
                style={{
                  color: "#fd3d0d",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                {strMeal}
              </Card.Title>
              <Card.Text>{strCategory}</Card.Text>
              <Card.Subtitle>{strArea}</Card.Subtitle>
            </div>
          </Card.Body>
          <Card.Footer>
            <div className="d-flex justify-content-between align-items-center">
              <Button variant="danger">See Details</Button>
              <Button variant="danger">Add To Cart</Button>
            </div>
          </Card.Footer>
        </Card>
      </Link>
    </Col>
  );
};

export default Category;
