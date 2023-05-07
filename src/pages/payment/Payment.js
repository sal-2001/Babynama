import React from 'react';
import "./Payment.css";
import { useLocation } from 'react-router-dom';
import Header from '../../components/header/Header';

function Payment() {
  const location = useLocation();
  return (
    <>
    <Header/>
    <div className='payment'>
        <h2>Thank you for choosing us</h2>
        <h1>Your payment was successful</h1>
        <div className='plan-details'>
          <h2>Plan Details</h2>
          <h3>{location.state.planName}</h3>
          <h4>Amount: ₹{location.state.price}</h4>
          <h4>Duration: {location.state.duration}</h4>
          <h5>Discount: {location.state.addConsultation}%</h5>
        </div>
    </div>
    </>
  )
}

export default Payment