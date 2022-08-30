import React from 'react';
import ServiceShow from './ServiceShow';
import { faCar, faBiking, faBicycle, faCarCrash, faMotorcycle} from '@fortawesome/free-solid-svg-icons'
import findcar from '../../../images/findcar.png'
 const blogdata =[

    {
       
        name:"Get Free Quotes",
       icon: faCar,
        description: "Most of the time, the prices we find for you are less expensive than those you could find on your own. ",
        background: "primary"
      },
      {
    
        name:"  Get Free Quotes",
        icon: faBiking,
        description: "When you are dealing with any kind of water damage, taking a timely action is crucial… Every successful Water Damage… ",
      
        background: "primary"
      },
      {
    
        name:"  Get Free Quotes",
        icon: faBicycle,
        description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
        background: "primary"
      },
      {
    
        name:"  Get Free Quotes",
        icon: faCarCrash,
        description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
        background: "primary"
      },
    
      {
    
        name:"  Get Free Quotes",
        icon: faMotorcycle,
        description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
        background: "primary",
        link: '/car'
      },
    
      // {
    
      //   name:"Get Free Quotes",
      //   icon: facycl,
      //   description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
      //   background: "primary"
      // },
    
   
   
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