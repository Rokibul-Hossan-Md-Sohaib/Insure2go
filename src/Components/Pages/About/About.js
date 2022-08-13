import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./About.css";

const About = () => {
  return (
    <section>
      <Carousel className="carousel mb-5">
        <Carousel.Item>
          <div className="item ">
            <h2>CAR INSURANCE</h2>

            <p className="heading-primary-main ">
            We make your car insurance premium affordable
           
            </p>

            <Link to="/car" class="btn btn-white btn-animated">

            Get Free Quotes
            </Link>
       
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <h2 class="et_pb_slide_title">BIKE INSURANCE</h2>

            <p className="heading-primary-main">
            We make your bike insurance premium affordable
            </p>

            <Link to="/car" class="btn btn-white btn-animated">
            Get Free Quotes
            </Link>
           
         
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <h2>VAN INSURANCE</h2>

            <p className="heading-primary-main">
            We make your vehicle insurance premium affordable
            </p>

            <Link to="/car" class="btn btn-white btn-animated">
            Get Free Quotes
            </Link>
          </div>
        </Carousel.Item>

      </Carousel>
  
    </section>
  );
};

export default About;
