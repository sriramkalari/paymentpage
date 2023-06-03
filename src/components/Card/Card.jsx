import React, { useState } from 'react';
import PaymentSection from '../PaymentSection/PaymentSection';
import SubscriptionDetails from '../SubscriptionDetails//SubscriptionDeatils';
import Tag from '../images/Tag.png';
import radiobutton from '../images/Radio Button.png';
import Tag2 from '../images/Tag2.png';
import radiobutton2 from '../images/Radio Button2.png';
import circle from '../images/Vector (2).png';
import './card.css';

const Card = () => {
  const [selectedTotal, setSelectedTotal] = useState(149);

  const handleCardClick = (total) => {
    setSelectedTotal(total);
  };

  return (
    <div className="card">
      <PaymentSection
        isFirst={true}
        backgroundColor="#B7B7B7"
        border="2px solid #BEBEBE"
        image1Src={Tag}
        image2Src={radiobutton}
        subscription="12 Months Subscription"
        total={99}
        months={12}
        onClick={() => handleCardClick(99)} // Pass the total value directly
      />

      <PaymentSection
        backgroundColor="#D7EDDD"
        border="2px solid #47BA68"
        image1Src={Tag2}
        image2Src={radiobutton2}
        subscription="12 Months Subscription"
        total={179}
        months={15}
        onClick={() => handleCardClick(179)} // Pass the total value directly
      />

      <PaymentSection
        backgroundColor="#FFFFFF"
        image2Src={circle}
        subscription="6 Months Subscription"
        total={149}
        months={6}
        onClick={() => handleCardClick(149)} // Pass the total value directly
      />

      <PaymentSection
        backgroundColor="#FFFFFF"
        image2Src={circle}
        subscription="3 Months Subscription"
        total={99}
        months={3}
        onClick={() => handleCardClick(99)} // Pass the total value directly
      />

      <SubscriptionDetails selectedTotal={selectedTotal} />
    </div>
  );
};

export default Card;
