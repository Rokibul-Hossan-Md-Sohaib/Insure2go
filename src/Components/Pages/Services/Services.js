import React from 'react';
import ServiceShow from './ServiceShow';
import { faCar, faBiking, faBicycle, faCarCrash, faMotorcycle} from '@fortawesome/free-solid-svg-icons'
import ser1 from '../../../images/ser1.jpg'
import ser2 from '../../../images/ser2.jpg'
import ser3 from '../../../images/ser3.jpg'
import ser4 from '../../../images/ser4.jpg'
// import ser6 from '../../../images/ser6.png'
 const blogdata =[

    {
       
        name:"Get Free Quotes",
       icon: ser1,
        description: "Most of the time, the prices we find for you are less expensive than those you could find on your own. ",
        background: "primary"
      },
      {
    
        name:"  Get Free Quotes",
        icon: ser2,
        description: "When you are dealing with any kind of water damage, taking a timely action is crucial… Every successful Water Damage… ",
      
        background: "primary"
      },
      {
    
        name:"  Get Free Quotes",
        icon: ser3,
        description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
        background: "primary"
      },
      {
    
        name:"  Get Free Quotes",
        icon: ser4,
        description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
        background: "primary"
      },
    
      // {
    
      //   name:"  Get Free Quotes",
      //   icon: ser6,
      //   description: "Like the regular kitchen and bathroom faucets, outdoor faucets can sometimes become damaged or begin to leak. This kind of… ",
      //   background: "primary",
      //   link: '/car'
      // },
    
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
        <h1 style={{color: "#22d3ee"}} className="text-center " > Our Services</h1>
   
        <section className="d-flex justify-content-center  ">

         
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