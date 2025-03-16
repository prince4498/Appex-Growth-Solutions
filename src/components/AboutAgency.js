import React from "react";
import "./AboutAgency.css";
import success_img from "../images/success.png";
import digitalEx_img from "../images/digital_excellence.png";
import innovation_img from "../images/innovation.png";
import GetInTouchButton from "../buttons/GetInTouchButton";
import star from "../images/star.png";

function AboutAgency() {
  return (
    <div className="page-container">
      <div className="about-section">
        <div className="about-left">
          <img className="star star-about" src={star}></img>
          <h2 className="about-heading">ABOUT AGENCY</h2>

          <h1 className="main-heading-h1">
            Crafting <span className="highlight">Digital Success</span>
          </h1>

          <GetInTouchButton text="Contact Us" href="/contact"/>

          <div className="sphere-image">
            {/* Black spherical mesh image background */}
          </div>

          <div className="indicator-dots">
            <div className="active-dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
        </div>

        <div className="about-right">
          <div className="feature-card">
            <div className="icon-container">
              <div className="icon-shapes">
                <img src={success_img} alt="mission" />
              </div>
            </div>

            <h2 className="feature-title">Your Success, Our Mission</h2>
            <p className="feature-description">
              We measure our success by the success of our clients. With a focus
              on results and a dedication to quality, our mission is to deliver
              digital solutions that make a real impact.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <div className="icon-cube">
                <img src={digitalEx_img} alt="Cube icon" />
              </div>
            </div>

            <h2 className="feature-title">
              We Create Amazing Digital Solutions
            </h2>
            <p className="feature-description">
              At Appex Growth Solutions, we don’t just make ads—we help
              businesses grow faster. Our expert team creates smart Facebook &
              Instagram ads that bring in more customers and sales.
            </p>
          </div>

          <div className="feature-card">
            <div className="icon-container">
              <div className="icon-layers">
                <img src={innovation_img} alt="Layers icon" />
              </div>
            </div>

            <h2 className="feature-title">Always Thinking New Ideas</h2>
            <p className="feature-description">
              The internet keeps changing, and we keep finding better ways to
              help businesses win. We use smart strategies, AI,  technology, and
              creativity to make sure our clients stay ahead and keep growing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutAgency;
