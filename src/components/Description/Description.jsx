import React from 'react';
import './description.css';

const IconWithParagraph = ({ imageSrc, text}) => {
  const coloredText = text
    .replace('100+', '<span style="color: rgba(0, 150, 255, 1);">100+</span>')
    .replace('20,000+', '<span style="color: rgba(0, 150, 255, 1);">20,000+</span>')
    .replace('exclusive', '<span style="color: rgba(0, 150, 255, 1);">exclusive</span>')
    .replace('₹94,500', '<span style="color: rgba(0, 150, 255, 1);">₹94,500</span>')
    .replace('Ad Free', '<span style="color: rgba(0, 150, 255, 1);">Ad Free</span>');

  return (
    
    <div className="icon-paragraph">
      <div className="icon-container">
        <img src={imageSrc} alt="" className="icon" />
        <p dangerouslySetInnerHTML={{ __html: coloredText }}></p>
      </div>
    </div>
  );
};

export default IconWithParagraph;
