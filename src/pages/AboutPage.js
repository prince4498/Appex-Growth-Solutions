import React from "react";
import "./AboutPage.css";
import { useEffect, useState } from "react";
import success_img from "../images/success.png";
import digitalEx_img from "../images/digital_excellence.png";
import innovation_img from "../images/innovation.png";
import maulik from "../images/maulik.png";
import award_img from "../images/maulik_dp.jpg";
import GetInTouchButton from "../buttons/GetInTouchButton";
import star from "../images/star.png";
import prince from "../images/prince.jpg"
import maulik_ from "../images/maulik.jpg"
import AboutAgency from "../components/AboutAgency";
import Banner from "../components/Banner";

function AboutPage() {
  const roles = ["Founder & CEO", "Meta Ads Expert", "Growth Consultant"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationClass, setAnimationClass] = useState("animated-text-about-enter");

  useEffect(() => {
    const interval = setInterval(() => {
      // Start exit animation
      setAnimationClass("animated-text-about-exit");

      // After exit finishes, change word and trigger enter animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % roles.length);
        setAnimationClass("animated-text-about-enter");
      }, 500); // 500ms should match your exit animation duration
    }, 3000); // Change every 3s

    return () => clearInterval(interval);
  }, []);
  return (
    <div className="about-page-container">
      {/* Header Banner with Home/About */}
      <Banner text="About" />

      <AboutAgency />

      {/* Our Story Section */}
      <div className="our-story-section">
        <div className="story-left">
          <img className="star" src={star} alt="Star icon" />
          <h2 className="section-subtitle">FOUNDER STORY</h2>

          {/* <p className="story-text">
            Founded in 2015, our agency began with a simple vision: to bridge the gap between 
            technical excellence and creative innovation. What started as a small team of passionate 
            digital enthusiasts has grown into a full-service digital agency with global reach.
          </p>
          
          <p className="story-text">
            Our journey has been defined by continuous learning, adaptation, and a relentless 
            pursuit of excellence. Through countless projects and challenges, we've refined our 
            approach to digital solutions that truly make a difference.
          </p> */}

          <div className="maulik-story">
            <h2> Engineer Turned Growth Consultant</h2>
            <p>
              From engineering to an MBA in marketing, Maulik’s journey has been
              driven by a passion for problem-solving and business growth. His
              unique blend of technical expertise & strategic marketing helps
              businesses scale with precision.
            </p>

            <h2> From IndiaMART to Digital Success</h2>
            <p>
              Having worked at India’s leading B2B marketplace, IndiaMART,
              Maulik gained deep insights into market dynamics, consumer
              behavior, and high-impact marketing strategies.
            </p>

            <h2> Beyond Marketing – A Content Creator</h2>
            <p>
              Maulik doesn’t just run ads—he creates impact. Managing two
              YouTube channels for kids, he understands how to engage, educate,
              and connect with diverse audiences.
            </p>

            <h2> Leading Appex Growth Solutions</h2>
            <p>
              As the Founder & CEO of Appex Growth Solutions, Maulik leads a
              dynamic team that turns marketing challenges into opportunities.
              His expertise in Facebook & Instagram Ads, consumer psychology,
              and brand positioning helps businesses achieve measurable growth.
            </p>

            <h2> What Drives Him?</h2>
            <ul>
              <li>
                {" "}
                Decoding Consumer Behavior – Understanding what makes customers
                take action.
              </li>
              <li>
                {" "}
                Marketing That Sells – Crafting ad strategies that convert, not
                just attract.
              </li>
              <li>
                {" "}
                Problem-Solving Mindset – Turning business challenges into
                success stories.
              </li>
            </ul>

            <h2> Want to Scale Your Business?</h2>
            <p>
              Maulik can help you decode digital growth & achieve results. Let’s
              build something great together!{" "}
            </p>
          </div>

          <div className="stats-container">
            <div className="stat-item">
              <h3 className="stat-number">115+</h3>
              <p className="stat-label">Successful Projects</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">4+</h3>
              <p className="stat-label">Years Experience</p>
            </div>
            <div className="stat-item">
              <h3 className="stat-number">96%</h3>
              <p className="stat-label">Client Satisfaction</p>
            </div>
          </div>
        </div>

        <div className="story-right">
          <div className="story-image-container">
            <img src={maulik} alt="Our team" className="story-image" />
            <div className="award-badge">
              <img src={award_img} alt="Award" className="award-icon" />
             
              <div className="award-text">
      <span className="award-year">Maulik Vaghasiya</span>
      <span className={`award-role ${animationClass}`}>
        {roles[currentIndex]}
      </span>
    </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Process Section */}
      <div className="process-section">
        <div className="process-header">
          <img className="star" src={star} alt="Star icon" />
          <h2 className="section-subtitle">OUR PROCESS</h2>
          <h1 className="section-title">
            How we <span className="highlight">transform ideas</span> into
            digital reality
          </h1>
        </div>

        <div className="process-steps">
          <div className="process-step">
            <div className="step-number">01</div>
            <h3 className="step-title">Free Strategy Call</h3>
            <p className="step-description">
            We start with a deep-dive consultation to understand your business, goals, target audience, and challenges.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">02</div>
            <h3 className="step-title">Market & Competitor Research</h3>
            <p className="step-description">
            Our experts analyze your industry, competitors, and audience behavior to craft a high-converting ad strategy.
            </p>
          </div>

          <div className="process-step">
            <div className="step-number">03</div>
            <h3 className="step-title">Ad Strategy & Funnel Planning</h3>
            <p className="step-description">
            We create a custom Meta Ads strategy, selecting the best campaign types, audience targeting, and ad creatives to maximize ROI.

            </p>
          </div>

          <div className="process-step">
            <div className="step-number">04</div>
            <h3 className="step-title">Ad Creative & Copywriting</h3>
            <p className="step-description">
            Our team designs scroll-stopping creatives and writes high-converting ad copies to grab attention and drive action.

            </p>
          </div>

          <div className="process-step">
            <div className="step-number">05</div>
            <h3 className="step-title">Campaign Setup & Launch</h3>
            <p className="step-description">We structure, set up, and launch your Facebook & Instagram Ads with optimized bidding, audience testing, and conversion tracking.

            </p>
          </div>

          <div className="process-step">
            <div className="step-number">06</div>
            <h3 className="step-title">Daily Monitoring & Optimization</h3>
            <p className="step-description">We analyze campaign data, tweak audiences, adjust bids, and scale winning ads for the best performance.

            </p>
          </div>
          <div className="process-step">
            <div className="step-number">07</div>
            <h3 className="step-title">Weekly Reporting & Growth Insights</h3>
            <p className="step-description">You receive transparent reports & performance breakdowns with insights on what’s working, what’s next, and how we scale further.

            </p>
          </div>
          <div className="process-step">
            <div className="step-number">08</div>
            <h3 className="step-title"> Scaling & ROI Maximization </h3>
            <p className="step-description">Once we find winning ads, we scale them profitably while continuously testing new strategies to maximize revenue.

            </p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="team-section">
        <div className="team-header">
          <img className="star" src={star} alt="Star icon" />
          <h2 className="section-subtitle">CORE TEAM</h2>
          <h1 className="section-title">
            Meet the <span className="highlight">creative minds</span> behind
            our success
          </h1>
        </div>

        <div className="team-grid">
          <div className="team-member">
            <div className="member-image-container">
              <div className="member-image member-image-1">
              <img src={maulik_}></img>
              </div>
            </div>
            <h3 className="member-name">Maulik Vaghasiya</h3>
            <p className="member-role">Creative Director</p>
          </div>

          <div className="team-member">
            <div className="member-image-container">
              <div className="member-image member-image-2">
                <img src={prince}></img>
              </div>
            </div>
            <h3 className="member-name">Prince Gelani</h3>
            <p className="member-role">Developer</p>
          </div>

        </div>

        <div className="team-cta">
          <h2 className="team-cta-text">
            Ready to work with our talented team?
          </h2>
          <GetInTouchButton text="Start a Project" href="https://calendly.com/maulikvaghasiya1999/30min" target='_blank'/>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
