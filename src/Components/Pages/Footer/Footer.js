import React from 'react';
import './Footer.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { library } from "@fortawesome/fontawesome-svg-core";
import {fab, faTwitterSquare, faFacebook, faLinkedin, faGithub ,faBehanceSquare} from "@fortawesome/free-brands-svg-icons";
import image from '../../../images/brand.png'

import FooterCol from './FooterCol';
import { Colors } from '../Color';
import { Link } from 'react-router-dom';

const Footer = () => {
    const noNamed = [
     
    ]

    const ourAddress = [
        // {name: "TERMS & CONDITIONS" , link: "/emergency", color: Colors.secondary},
        // {name: " PRIVACY POLICY" , link: "/checkup"},
       
    ]
    const complaines = [
        {name: "Any Kind Of complains" , link: "/emergency"},
        {name: "Check Reviews" , link: "/checkup"},
        {name: "Personal Openion" , link: "/personal-treatment"},
        {name: "Behaiviors" , link: "/tooth-extract"},
     
    ]
    const services = [
        {name: "HomeDelivery" , link: "/delivary"},
        {name: "Check Up Food" , link: "/checkup"},
        {name: "Respect Your Reviews" , link: "/review"},
        {name: "Any Kind Of Healty Foods" , link: "/food"},
        {name: "Best Cook" , link: "/checkup"},
        
    ]
    return (
        <footer className="footer footer-area clear-both">
            <div className="container pt-5">
                <div className="row py-5">
                    <FooterCol key={1} menuTitle={"Protect by"} menuItems={noNamed}>
                    <img src={image} alt="BigCo Inc. logo"/>

                    </FooterCol>
                    <FooterCol key={2} menuTitle="Services" menuItems={services}/>
                    <FooterCol key={3} menuTitle="Coplaines" menuItems={complaines}/>
                    <FooterCol col={Colors.secondary} key={4} menuTitle="" menuItems={ourAddress}> 
                    <p >
                    <FontAwesomeIcon style={{fontSize: '15px', color: 'blue' }} icon={faBehanceSquare} /> <Link className='terms text-decoration-none' to='/' >TERMS & CONDITIONS" </Link> <br />
                    <FontAwesomeIcon style={{fontSize: '15px', color: 'blue' }} icon={faBehanceSquare} />  <Link className='terms text-decoration-none' to='/' >PRIVACY POLICY</Link> 
                    </p>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"> <FontAwesomeIcon className='icon' icon={faTwitterSquare} /> </a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className='icon' icon={faFacebook} /> </a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className='icon' icon={faLinkedin} /> </a></li>
                        </ul>
                       
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn btn-danger">+2025550295</button>
                        </div>
                    </FooterCol>
              
                </div>
          
 
              
            </div>
            <div className="copyRight text-center">
                    <p className='text-dark'>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
        </footer>
        
    );
};

export default Footer;