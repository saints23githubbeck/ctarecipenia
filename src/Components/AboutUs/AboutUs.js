import { Container } from "@mui/material"
import React, { useEffect } from "react"
import thumbnailPhoto from "../../images/me.png"
import aboutPhoto from "../../images/Screenshot_16.png"
import Show from "../Shared/Show/Show"
import "./AboutUs.css"
import AOS from "aos"
import "aos/dist/aos.css"
const AboutUs = () => {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div>
      <Container>
        <div
          class="row my-4 about-container"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <div class="col-md-9">
            <div className="title-and-thumbnail">
              <h2 className="about-title">
                Excepture Sint <br />
                Occaeuiecat
              </h2>
              <img className="about-thumbnail" src={thumbnailPhoto} alt="" />
            </div>
            <div class="row">
              <div class="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur velit alias cumque, asperiores fuga facere modi
                  rem numquam atque aperiam vel vitae ea deserunt maiores
                  laborum possimus, perferendis qui iusto! Sed consequuntur
                  deleniti magnam dicta temporibus, eaque facere laboriosam
                  quasi asperiores maxime doloribus illo, voluptas, hic iusto.
                  Vitae, inventore quas amet veritatis accusamus, numquam
                  adipisci at harum ipsa in libero.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur velit alias cumque, asperiores fuga facere modi
                  rem numquam atque aperiam vel vitae ea deserunt maiores
                  laborum possimus, perferendis qui iusto! Sed consequuntur
                  deleniti magnam dicta temporibus, eaque facere laboriosam
                  quasi asperiores maxime doloribus illo, voluptas, hic iusto.
                  Vitae, inventore quas amet veritatis accusamus, numquam
                  adipisci at harum ipsa in libero.
                </p>
              </div>
              <div class="col-md-6">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Consequatur velit alias cumque, asperiores fuga facere modi
                  rem numquam atque aperiam vel vitae ea deserunt maiores
                  laborum possimus, perferendis qui iusto! Sed consequuntur
                  deleniti magnam dicta temporibus.Consequatur velit alias
                  cumque, asperiores fuga facere modi rem numquam atque aperiam
                  vel vitae ea deserunt maiores laborum possimus, perferendis
                  qui iusto! Sed consequuntur deleniti magnam dicta temporibus.
                </p>
                <hr className="about-hr" />
                <blockquote className="mt-4">
                  <b>
                    <q>
                      <i>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consequatur velit alias cumque, asperiores fuga
                        facere modi rem numquam atque aperiam vel vitae ea
                        deserunt maiores laborum possimus,
                      </i>{" "}
                    </q>
                  </b>
                </blockquote>
              </div>
            </div>
          </div>
          <div class="col-md-3">
            <img src={aboutPhoto} alt="" />
          </div>
        </div>
      </Container>
      <Show></Show>
    </div>
  )
}

export default AboutUs
