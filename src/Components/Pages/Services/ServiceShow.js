import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './ServiceShow.css'

const ServiceShow = ({blog}) => {
    return ( 
        <div className="col-md-4 text-black mb-5 serve">
            <div className={`d-flex info-container mr-3 justify-content-center `}>
                <div className="icon" >
                    <FontAwesomeIcon className="info-icon " icon={blog.icon} />
                </div>
                <div className="description mr-3"> 
                    <h3 className="text-bold">{blog.name}</h3>
                    <small className="small text-secondary">{blog.description}</small>
                </div>
            </div>
        </div>

    );
};

export default ServiceShow;