
import StripeCheckout from 'react-stripe-checkout';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import pound from '../../../images/pount.png'
const MySwal = withReactContent(Swal);

function Payment() {
  const publishableKey =
    'pk_test_51Gug61Jg3ABo05XDCHmegVvckwbmE6ppSJYqTlYSNxz0XlvojmpWFUsvpAuU7bJsuzE0b8XLXM3jfEwwREkguoAf00w7eZ3Zdq';
  const [product, setProduct] = useState()
  const [final, setFinal] = useState();

  const handleInput1 =() =>{
    const most = setFinal(product)
   console.log("most", most)
     }
console.log('final', final)
  const priceForStripe = final * 100;
console.log("priceForStripe", priceForStripe)
  const handleSuccess = () => {
    MySwal.fire({
      icon: 'success',
      title: 'Payment was successful',
      time: 4000,
    });
  };
  const handleFailure = () => {
    MySwal.fire({
      icon: 'error',
      title: 'Payment was not successful',
      time: 4000,
    });
  };
 
  const payNow = async token => {
    try {
      const response = await axios({
        url: 'http://localhost:8000/payment',
        method: 'post',
        data: {
      amount: priceForStripe,
          token,
        },
      });
      if (response.status === 200) {
        handleSuccess();
      }
    } catch (error) {
      handleFailure();
      console.log(error);
    }
  };



  return (
    <div className="container">
      <h2>Complete React & Stripe payment integration</h2>
      <p>
        <span>Product: </span>
 
      </p>
      <input type="text" onChange={(e) => setProduct((e.target.value))} />
      <button style={{display: final && 'none'}} onClick={handleInput1}> button</button>
     <div style={{display: final ? 'block' : 'none'}} >
     <p>
      <small>Amount: </small>${final}
      </p>
      <StripeCheckout
        stripeKey={publishableKey}
        label="Pay Now"
        name="Pay With Credit Card"
        billingAddress
        shippingAddress
       
         amount={priceForStripe}
        description={`Your total is $${final}`}
        token={payNow}
      />
     </div>
    </div>
  );
}

export default Payment;