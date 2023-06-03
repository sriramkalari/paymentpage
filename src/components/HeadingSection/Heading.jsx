import React from 'react';
import './heading.css';
const Heading = () => {
  return (
    <div className="heading">
      <h1>Access curated courses worth</h1>
      <div className="price-container">
       <h1> 
       <span className='price-per-year'>₹ </span>
       <span className="price-strikethrough"><del>18,500 </del></span>
        <span className='price-per-year'> at just</span>
        <span className="price-highlight"> ₹ 99 </span>
        <span className="price-per-year">per year!</span></h1>
      </div>
    </div>
  );
};

export default Heading;
