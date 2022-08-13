import React from "react";
import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";
import Navs from "../Navs/Navs";

const AboutUs = () => {
  return (
    <>
      <Navs></Navs>

      <Container>
        <h1 className="text-center mt-5 text-danger">ABOUT US </h1>

        <div className="mt-5" style={{ margin: "20px" }}>
          <p style={{ margin: "20px", lineHeight: "2.3" }} className="mb-3">
            We <strong>'Insure To Go'</strong> Trading Under Sort Services Ltd
            are passionate about providing you with hundreds of quotes from
            online & offline markets along with smooth customer service start to
            finish. We aim to work with you step by step to assist you with free
            multiple non-obligatory quotes. Your quotes are based on how
            accurate the information you give us and on the various comparison
            sites we use to provide you with affordable prices. We do not work
            as a broker or agent for any specific company. However, we are
            registered with the Information Commissioner's Office (ICO) and all
            your information are protected under the 'Data Protection Act &
            General Data Protection Regulation (GDPR 2018). We are an
            independent price searching company, search on your behalf with your
            consent to find you reasonable prices. We can assist the vulnerable
            customers with very helpful service as our multilingual dedicated
            friendly staffs are waiting to serve. Also, you are strongly advised
            to read our Terms and Conditions and Privacy Policy thoroughly
            before accepting our services.
            <br />
          </p>
          <Container className="row mt-5">
            <div className="col-6">
              <h5 className="text-danger"> Our Objective</h5>
              We want to provide our customers with quality services on their
              Quotes searching but must be noticed, after our searches if you
              are happy with one of the quotes and want to go ahead further,
              must follow the Quote Reference number or contact number provided
              with the quotes as we won't be able to arrange deals or contracts
              for customers under the 'FSMA Act 2000'.
            </div>
            <div className="col-6">
              <h5 className="text-danger"> Our Customers</h5>
              You are requested very politely to be well aware of our Terms &
              Conditions along with the Privacy Policy and our limitations. You
              can count on our dependability, drives and integrity. We take
              great pride in what we do and build on achieving more and more
              every day.
            </div>
          </Container>
        </div>
      </Container>

      <Footer />
    </>
  );
};

export default AboutUs;
