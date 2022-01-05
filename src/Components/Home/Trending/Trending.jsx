import React, { useEffect } from "react";
import { Button, Container, Row } from "react-bootstrap";
import useTrending from "../../../hooks/useTrending";
import styles from "../../../assets/css/Trending.module.css";
import { Link } from "react-router-dom";
import SingleTrending from "./Single/SingleTrending";
import { useState } from "react";

const Trending = () => {
  const [trending, setIsAll, isAll] = useTrending();
  //   const [displayData, setDisplayData] = useState([]);

  console.log(trending);
  const handleSeeAll = () => {
    setIsAll(!isAll);
  };

  console.log(isAll);
  return (
    <div className="mt-5">
      <Container>
        <Row>
          <div className={styles.sectionTitle}>
            <h1 className={styles.trending}>Trending Recipes</h1>
            <div className="text-end">
              <Link to="" className={styles.seeallLink}>
                <Button onClick={handleSeeAll} variant="outline-success">
                  See All{" "}
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </Row>
        <div className="py-5">
          <Row className="g-4">
            {trending.map((trending) => (
              <SingleTrending key={trending.idIngredient} trending={trending} />
            ))}
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
