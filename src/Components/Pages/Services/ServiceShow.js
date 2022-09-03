import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ServiceShow.css'
import { Link } from 'react-router-dom';

const ServiceShow = ({blog}) => {
    return ( 
        <div className="col-md-3 text-black mb-5 serve">
      <Link className='text-decoration-none' to='/car'>
      <div className={`info-container mr-3 justify-content-center mb-5`}>
                <div className="icon mb-3" >
                <img src={blog.icon} className="info-icon  "  alt="" />
                </div>
                <div className="description mr-3 mb-3"> 
                    <h5 className="text-bold  texts">{blog.name}</h5>
                    {/* <small className="small text-secondary">{blog.description}</small> */}
                </div>
            </div>
      </Link>
        </div>

    );
};

export default ServiceShow;