import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../../../../assets/css/TrendingSingle.module.css";

const SingleTrending = ({ trending }) => {
  const { strMeal, strMealThumb, idMeal } = trending;
  return (
    <Col xs={12} sm={12} md={3} lg={4}>
      <Link
        style={{ textDecoration: "none", color: "black" }}
        to={`/recipe/${idMeal}`}
      >
        <Card className={styles.productCard}>
          <Card.Img
            width="100%"
            className="img-fluid mx-auto"
            src={strMealThumb}
          />
          <Card.Body>
            <div className="text-center mb-5">
              {/* <Card.Subtitle className='text-muted mb-3' style={{ fontSize: '12px' }}>{cat}</Card.Subtitle> */}
              <Card.Title
                className="mb-3"
                style={{
                  color: "#fd3d0d",
                  fontSize: "18px",
                  fontWeight: "800",
                }}
              >
                {strMeal}
              </Card.Title>
              {/* <Card.Subtitle style={{ fontSize: '12px' }}>{time}</Card.Subtitle> */}
            </div>
          </Card.Body>
        </Card>
      </Link>
    </Col>
  );
};

export default SingleTrending;
