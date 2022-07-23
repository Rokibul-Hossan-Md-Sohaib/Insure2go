import React from 'react';
import ServiceShow from './ServiceShow';
import { faHome, faWarehouse, faAnchor, faUserCog, faArchway, faArrowsAlt } from '@fortawesome/free-solid-svg-icons'

 const blogdata =[

    {
       
        name:"CAR INSURANCE",
       icon: faHome,
        description: "A majority of commercial buildings have handicap plumbing equipment installed, in order to comply with occupancy codes. We know how…o ",
        background: "primary"
      },
      {
    
        name:"BIKE INSURANCE",
        icon: faWarehouse,
        description: "When you are dealing with any kind of water damage, taking a timely action is crucial… Every successful Water Damage… ",
       
        background: "primary"
      },
      {
    
        name:"VAN INSURANCE",
        icon: faAnchor,
        description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
        background: "primary"
      },
   
   
    ]
const Services = () => {
    return (
      
     <div style={{marginTop:"190px" ,marginBottom:"20px"}} className="">
        <h1 className="text-center text-secondary"> Our Services</h1>
   
        <section className="d-flex justify-content-center my-5 ">

         
          <div className="row">
                {
                 blogdata.map(blog => <ServiceShow blog={blog}/>)
                }
      
             
            </div>
       </section>
       </div>
    );
};

export default Services;