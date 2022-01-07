import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import ReactPlayer from "react-player";
import { Link } from "react-router-dom";
import styles from "../../../assets/css/Video.module.css";
import useBigvideo from "../../../hooks/useBigvideo";
import useSmvideo from "../../../hooks/useSmvideo";

const Video = () => {
  const [bigVideo] = useBigvideo();
  const [smVideo] = useSmvideo();
  return (
    <div
      style={{
        backgroundColor: "#FFF2F2",
        paddingTop: "24px",
      }}
    >
      <Container>
        <Row>
          <div className={styles.sectionTitle}>
            <h1 className={styles.video}>Video Guides</h1>
            <div className="text-end">
              <Link to="" className={styles.seeallLink}>
                <Button variant="outline-success">
                  See All{" "}
                  <span>
                    <i className="fas fa-angle-right"></i>
                  </span>
                </Button>
              </Link>
            </div>
          </div>
        </Row>
        <div className="py-5 ">
          <Row xs={1} md={2} className="g-4 mb-5">
            {bigVideo.map((video) => (
              <Col key={video.id} className={styles.cardContainer}>
                <Card className="h-100 py-40 ">
                  <Card.Img
                    className={styles.cardImg}
                    variant="top"
                    src={video?.img}
                  />
                  <div
                    className="position-absolute bottom-0 left-0 w-100 text-center text-white p-3"
                    style={{ backgroundColor: "#000", opacity: "0.6" }}
                  >
                    <Card.Title className="fs-5 fw-bold">
                      {video?.title}
                    </Card.Title>
                  </div>
                  <div className={styles.middle}>
                    <div className="card-btn">
                      {/* <Button className="bg-transparent"><i className="far fa-play-circle fs-1 fw-bolder"></i></Button>
                                            <iframe width="640" height="360" src="https://www.youtube.com/embed/CJ-q_MUuc-U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                      <ReactPlayer  url={video.img} />
                    </div>
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="py-4 my-5">
            <Row xs={1} md={4} className="g-4">
              {smVideo.map((video) => (
                <Col key={video.id} className={styles.cardContainer}>
                  <Card className="mt-5">
                    <Card.Img
                      className={styles.cardImg}
                      variant="top"
                      src={video?.img}
                    />
                    <div className={styles.middle}>
                      <div className="card-btn player-wrapper">
                        {/* <Button className="bg-transparent"><i className="far fa-play-circle fs-1 fw-bolder"></i></Button> */}
                        <ReactPlayer
                         
                          className='react-player'
                          width="320px"
                          height="200px"
                          url={video.vid}
                        />
                      </div>
                    </div>
                  </Card>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Video;
