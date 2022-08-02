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
            Most of the time, the prices we find for you are less expensive
              than those you could find on your own.
           
            </p>

            <Link to="/carFrom" class="btn btn-white btn-animated">

            Get Free Quotes
            </Link>
       
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <h2 class="et_pb_slide_title">BIKE INSURANCE</h2>

            <p className="heading-primary-main">
            24/7 EMERGENCY SERVICE. LESS THAN 10 MINUTES TO ARRIVE .
            </p>

            <Link to="/carFrom" class="btn btn-white btn-animated">
            Get Free Quotes
            </Link>
           
         
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="item">
            <h2>VAN INSURANCE</h2>

            <p className="heading-primary-main">
              WE JUST GO BEYOUND THE SCOPES OF YOUR EXPECTATIONS.
            </p>

            <Link to="/carFrom" class="btn btn-white btn-animated">
            Get Free Quotes
            </Link>
          </div>
        </Carousel.Item>

      </Carousel>
  
    </section>
  );
};

export default About;
