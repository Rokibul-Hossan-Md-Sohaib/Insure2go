import React from "react";
import { Carousel, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import gifs8 from '../../../images/gifs8.gif'
import gifs2 from '../../../images/gifs2.gif'
import gifs4 from '../../../images/gifs4.gif'
import gifs7 from '../../../images/gifs7.gif'
import carOne from '../../../images/carOne.jpg'
import van1 from '../../../images/van1.jpg'
import "./About.css";

const About = () => {
  return (
    <section>
      <Carousel className=" mb-5">
      <Carousel.Item>
        <img  className="carousel" src={carOne} />
        <Carousel.Caption>
        <div className="item ">
            <h2>CAR INSURANCE</h2>

            <p className="heading-primary-main ">
            We make your car insurance premium affordable
           
            </p>

            <Link to="/car" class="btn btn-white btn-animated">

            Get Free Quotes
            </Link>
       
          </div>
        </Carousel.Caption>
      </Carousel.Item>
        {/* <Carousel.Item>
         
        </Carousel.Item> */}
    <Carousel.Item>
        <img  className="carousel" src={gifs4} />
        <Carousel.Caption>
        <div className="item ">
            <h2>BIKE INSURANCE</h2>

            <p className="heading-primary-main ">
            We make your bike insurance premium affordable
           
            </p>

            <Link to="/car" class="btn btn-white btn-animated">

            Get Free Quotes
            </Link>
       
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img  className="carousel" src={van1} />
        <Carousel.Caption>
        <div className="item ">
            <h2>VAN INSURANCE</h2>

            <p className="heading-primary-main ">
            We make your vehicle insurance premium affordable
           
            </p>

            <Link to="/car" class="btn btn-white btn-animated">

            Get Free Quotes
            </Link>
       
          </div>
        </Carousel.Caption>
      </Carousel.Item>

      </Carousel>
  
    </section>
  );
};

export default About;
