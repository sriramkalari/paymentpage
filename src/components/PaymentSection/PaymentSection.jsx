import React from 'react';
import './paymentsection.css';
import icon1 from '../images/Icon 1.png';
import icon2 from '../images/icon2.png';
import { useState } from 'react';
const PaymentSection = ({ image1Src, image2Src, subscription, total, months, isFirst, backgroundColor = '', border = '', onClick }) => {
  const perMonth = `₹${Math.round(total / months)}/mon`;

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(true);
    setTimeout(() => {
      setIsSelected(false);
    }, 1000); // Adjust the duration of the animation as needed
    onClick(total);
  };

  return (
    <>
      {isFirst && (
        <>
          <div className="image-container">
            <span className="image-wrapper">
              <img src={icon1} alt="Image 1" className="image" />
              <span className="image-text">Signup</span>
            </span>
            <span className="image-wrapper">
              <img src={icon2} alt="Image 2" className="image" />
              <span className="image-text">Subscribe</span>
            </span>
          </div>
          <h4 className="subscription-heading">Select your subscription plan</h4>
        </>
      )}
      <div
        className={`subscription-card ${isSelected ? 'selected' : ''}`}
        style={{ backgroundColor, border }}
        onClick={handleClick}
      >
        <div className="subscription-custom">
          <img src={image1Src}  className="subscription-tag" />
          <img src={image2Src} alt="Subscription" className="subscription-image" />
          <p>{subscription}</p>
        </div>
        <div className="subscription-info">
          <span className="price">Total {total}</span>
          <span className="price-per-month">{perMonth}</span>
        </div>
      </div>
    </>
  );
};

export default PaymentSection;
