import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone , faEnvelope, faClock} from '@fortawesome/free-solid-svg-icons'
import { Container } from 'react-bootstrap';
const Topbar = () => {
    return (
        <div>
                <Container className="topbar " >
      <ul className="topbar-ul d-flex"  style={{
        listStyleType: "none",
        margin: 0,
        padding: 0
      }}>
         <FontAwesomeIcon style={{fontSize: '20px', color: '#a5640f' , marginTop: '10px', marginRight: "10px"}} icon={faClock} /> 
      <li className=" text-secondary " >Opening Time <br /> Mon-Sat 10am-8pm</li>

          <FontAwesomeIcon className='ms-auto' style={{fontSize: '20px', color: '#a5640f' , marginTop: '10px', marginRight: "10px"}} icon={faEnvelope} /> 
      <li className=" text-secondary" >Email <br /> info@insuretogo.uk</li>
      <FontAwesomeIcon style={{fontSize: '20px', color: '#a5640f' , marginTop: '10px', marginRight: "10px"}} icon={faPhone} /> 
<li > <a href="#" className="text-secondary " > Phone <br /> 01218289381</a></li>



</ul>
</Container>

        </div>
    );
};

export default Topbar;