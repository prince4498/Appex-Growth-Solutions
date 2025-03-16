import React from 'react';
import './Portfolio.css';
import GetInTouchButton from '../buttons/GetInTouchButton';
import Banner from '../components/Banner';
import img1 from "../images/01_res.png"
import img2 from "../images/02_res.png"
import img3 from "../images/03_res.png"
import img4 from "../images/04_res.png"
import img5 from "../images/05_res.png"
import img6 from "../images/06_res.png"

// Placeholder images - replace these with your actual image paths
const images = [
  img1,
  img2,
  img3,img4,img5,img6
];

const Portfolio = () => {
  return (
    <>
    <Banner text="Portfolio" />
    <div className="portfolio-container">
      <section className="intro-section">
        <h2 className="section-title">Our Results</h2>
        <p className="intro-text">
          Explore our portfolio showcasing our finest work. Each project represents 
          our commitment to excellence and attention to detail.
        </p>
      </section>

      <section className="gallery-section">
        <div className="image-grid">
          {images.map((image, index) => (
            <div className="image-item" key={index}>
              <div className="image-wrapper">
                <img 
                  src={image} 
                  alt={`Portfolio item ${index + 1}`} 
                  className="portfolio-image"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
        <div className='seemore-res'>
      <GetInTouchButton href="https://drive.google.com/file/d/1TeWJOGG7mrvYY8mZk0hSg4L-qgTATXUf/view" target="_blank" text="See More"/>
      </div>
    </div>
    </>
  );
};

export default Portfolio;