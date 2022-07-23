import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Topbar = () => {
    return (
        <div>
                <div className="topbar " >
      <ul className="topbar-ul d-flex" >
     
      <FontAwesomeIcon style={{fontSize: '30px', color: 'yellow' , marginLeft:'70%', marginTop: '10px'}} icon={faEnvelope} /> 
      <li className="ms-auto" > <a href="#" className="text-dark ">Email <br /> e@gmal.com</a></li>
      <FontAwesomeIcon style={{fontSize: '30px', color: 'yellow' , marginRight: '30px', marginTop: '10px'}} icon={faPhone} /> 
<li > <a href="#" className="text-dark " > Phone <br /> 01010101010</a></li>



</ul>
</div>

        </div>
    );
};

export default Topbar;