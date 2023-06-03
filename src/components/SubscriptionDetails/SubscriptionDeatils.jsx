import React from 'react';
import text from '../images/Text.png';
import alert from '../images/alert.png';
import Razorpay from '../images/Frame 12537.png';
import './subscriptiondetails.css';

const SubscriptionDetails = ({ selectedTotal }) => {
  // Calculating the subscription fees by subtracting the selectedTotal from 18500
  const subscriptionFees = 18500 - selectedTotal;

  return (
    <div className="subscription-section">
      <div className="payment-subscription">
        <span className="subscription-fee">Subscription Fee</span>
        <span className="subscription-amount">₹18,500</span>
      </div>
      <div className="payment-content">
        <div className="subscription-card2">
          <img src={text} alt="Text" className="text-image" />
          <div className="subscription-customs">
            <img src={alert} alt="Alert" className="alert-image" />
            <p>Offer valid till 25th March 2023</p>
          </div>
          <div className="subscription-prices">
            <span className="subscription-fees2">- ₹{subscriptionFees}</span>
          </div>
        </div>
      </div>
      <div className="total-section">
        <span className="total-text">Total (Incl. of 18% GST)</span>
        <span className="total-price">₹{selectedTotal}</span>
      </div>
      <div className="payment-button">
        <button type="submit" className="cancel-btn">
          Cancel
        </button>
        <button type="submit" className="pay-btn">
          Proceed to Pay
        </button>
      </div>
      <img src={Razorpay} alt="Razorpay" className="Razorpay" />
    </div>
  );
};

export default SubscriptionDetails;
