import React from 'react';
import Footer from '../Footer/Footer';
import Navs from '../Navs/Navs';
import Topbar from '../Topbar/Topbar';
import Steps from './Steps';

const Form = () => {
    return (
        <div>
            <Topbar/>
            <Navs/>
            <Steps/>
            <Footer/>
        </div>
    );
};

export default Form;