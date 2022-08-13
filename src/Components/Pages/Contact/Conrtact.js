import React from 'react';
import Footer from '../Footer/Footer';
import Navs from '../Navs/Navs';
import './Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone , faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'
const Conrtact = () => {
    return (
        <>
            <Navs/>
            <div className='conatct mt-5'>
                <h1>Address</h1>
                <p>We are providing service online only</p>
                
                <h3>Call US:</h3>
              <div className='d-flex phonef'>
              <FontAwesomeIcon style={{fontSize: '20px', color: '#a5640f' , marginRight: "10px"}} icon={faPhone} /> 
              <p className=" text-secondary mt-3" > 01218289381</p>
              </div>

                <h3>Quotes Or Customer Service</h3>
                <div className='d-flex  phonef'>
                <FontAwesomeIcon className='' style={{fontSize: '20px', color: '#a5640f' , marginRight: "10px"}} icon={faEnvelope} /> 
      <p className=" text-secondary mt-3" > info@insuretogo.uk</p>
      </div>
            </div>

            <Footer/>

        </>
    );
};

export default Conrtact;