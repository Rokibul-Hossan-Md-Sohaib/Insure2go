import React from "react";
import "./WorkIdentity.css";

const WorkIdentity = () => {
  return (
    <section className="features-service ">
      <div className=" services">
        <div className="row">
          <div className="col-md-6 align-self-center one text-white">
            <h1 className="font-weight-bold text-white">Who We Are </h1>
            <p className="text-white para mt-5 ">
              We are an independent price comparison company that searches for
              affordable pricing on your behalf with your permission. Because
              our personnel is multilingual, devoted, and ready to help, we can
              provide extremely helpful assistance to the most vulnerable
              customers. Additionally, before using our services, it is strongly
              urged that you fully comprehend our a <a href="/conditions" class="text-uppercase fw-bold text-dark">Terms & Conditions </a> 
             and <a href="privacy" class="text-uppercase fw-bold text-dark"> Privacy Policy </a>. We are not employed by any particular business as a broker
              or representative. The "Data Protection Act & General Data
              Protection Regulation" protects all of your information, and we
              are registered with the Information Commissioner's Office (ICO)
              (GDPR 2019).
              <br />
            </p>

        
          </div>
          <div className="col-md-6 mb-5 two m-md-0 ">
            <h1 className="font-weight-bold text-white ">
              OUR WORKING PROCESS{" "}
            </h1>
            <p className="text-white para  mt-5 ">
              ⦾ Ease your searching stress <br />
              ⦾ Search all the prices possible along with untailored deals{" "}
              <br />
              ⦾ We do not share any of your information with the third parties
              <br />
              ⦾ Work with 100% accuracy based on the information you provide
              <br />
              ⦾ 100% professional service & customer care!
              <br />
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkIdentity;
