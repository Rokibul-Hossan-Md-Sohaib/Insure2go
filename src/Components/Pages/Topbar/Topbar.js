import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faPhone , faEnvelope} from '@fortawesome/free-solid-svg-icons'
const Topbar = () => {
    return (
        <div>
                <div className="topbar " >
      <ul className="topbar-ul d-flex" >
      <li className="text-secondary" > Opening Time <br /> Mon-Sat 9;00-18;00</li>
      <li className="ms-auto text-secondary" >Email <br /> info.insuretogo@gmail.com</li>
      {/* <FontAwesomeIcon style={{fontSize: '30px', color: 'yellow' , marginTop: '10px'}} icon={faPhone} />  */}
<li > <a href="#" className="text-secondary " > Phone <br /> +447700173073</a></li>



</ul>
</div>

        </div>
    );
};

export default Topbar;