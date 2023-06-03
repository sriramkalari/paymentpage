import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Heading from './components/HeadingSection/Heading';
import Description from './components/Description/Description';
import book from './components/images/book.png';
import time from './components/images/time.png';
import live from './components/images/live.png';
import education from './components/images/education.png';
import Ads from './components/images/Icon.png';
import Card from './components/Card/Card';

function App() {
  return (
    <div className="App">
      <Header />
      <div className="heading-section">
        <Heading/>
      </div>
      <div className="content">
        <div className="description-section">
          <Description imageSrc={book} text="100+ Job relevant courses" />
          <Description imageSrc={time} text="20,000+ Hours of content" />
          <Description imageSrc={live} text="Exclusive webinar access" />
          <Description imageSrc={education} text="Scholarship worth ₹94,500" />
          <Description imageSrc={Ads} text="Ad Free learning experience" />
        </div>
        <div className="card-section">
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
