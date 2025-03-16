import React from "react";
import "./ServicePage.css";
import star from "../images/star.png";
import GetInTouchButton from "../buttons/GetInTouchButton";
import pn_bridal from "../images/pn_bridal.png"
import jk from "../images/jk_furniture.png"
import jb from "../images/jb_enterprise.png"
import robert from "../images/Robert-jhonson.jpg"
import david from "../images/David Lee.jpg"
import gc from "../images/gc.jpg"
import {
  FaLaptopCode,
  FaShoppingCart,
  FaPaintBrush,
  FaChartLine,
  FaYoutube,
  FaBullhorn,
  FaGem,
  FaUserPlus,
  FaShareAlt
} from "react-icons/fa";
import Banner from "../components/Banner";
import Services from "../components/Services";

function ServicesPage() {
  return (
    <>
      <Banner text="Services" />
      <div className="services-page-container">
        {/* Header Banner */}
        <div className="first-service-sec">
          <Services hello="true"/>
        </div>

        {/* Services Grid Section */}
        <div className="services-grid-section">
          <div className="services-header"></div>

          <div className="services-grid">
          <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaGem className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title"> Facebook/Instagram Ads (Expertise)</h3>
              <p className="service-description">
              Developing a compelling brand identity through strategy, visuals, and to build strong customer connections.
              </p>
              <ul className="service-features">
                <li>Targeted ad campaigns on Facebook & Instagram</li>
                <li>Custom audience creation & retargeting</li>
                <li>Conversion tracking & analytics</li>
                <li>Increase brand awareness & engagement</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaUserPlus className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title"> Lead Generation</h3>
              <p className="service-description">
              We craft powerful lead generation campaigns that bring in qualified, high-intent leads for your business. Using the right mix of ads, landing pages, and automation, we ensure that your sales pipeline is always full.
              </p>
              <ul className="service-features">
                <li>Conversion-optimized landing pages</li>
                <li>Quality lead nurturing strategies</li>
                <li>Facebook Lead Ads & Insta Lead Forms</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaShareAlt className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title"> Social Media Management</h3>
              <p className="service-description">
              We manage your social media presence across Facebook, Instagram, LinkedIn, and more. Our team handles content creation, scheduling, audience engagement, and growth strategies to keep your brand active and engaging.
              </p>
              <ul className="service-features">
                <li>Content calendar & scheduling</li>
                <li>Profile optimization (bio, highlights, etc.)</li>
                <li>Hashtag research & trend spotting</li>
                <li>Community growth strategy</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaBullhorn className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title"> Google/YouTube Ads</h3>
              <p className="service-description">
                With Google & YouTube Ads, we position your business in front of
                the right customers at the right time. Whether it's search ads,
                display ads, or video campaigns, we help you increase
                visibility, website traffic, and conversions.
              </p>
              <ul className="service-features">
                <li>Google Ads campaign setup & management</li>
                <li>A/B testing for ads performance</li>
                <li>Ad budget planning & ROI optimization</li>
                <li>Monthly performance reporting & insights</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaShoppingCart className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title">E-commerce Store</h3>
              <p className="service-description">
                We develop custom e-commerce stores that offer a seamless
                shopping experience. From shop setup and payment gateway
                integration to product listings and marketing, we build stores
                that sell.
              </p>
              <ul className="service-features">
                <li>Shopify Store Development</li>
                <li>Custom Coded eCommerce Store</li>
                <li>Maintenance & Support</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaPaintBrush className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title">Graphic Design</h3>
              <p className="service-description">
                Our expert designers create eye-catching visuals that enhance
                your brand identity. From ad creatives and social media graphics
                to logos and marketing materials, we ensure your brand stands
                out.
              </p>
              <ul className="service-features">
                <li>Logo design & brand identity</li>
                <li>Social media post & banner design</li>
                <li>Packaging & label design</li>
                <li>Brochures, flyers & poster design</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaChartLine className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title">Branding</h3>
              <p className="service-description">
                We help businesses build a strong and memorable brand identity.
                From defining your brand voice and messaging to creating a
                consistent visual identity, we craft branding strategies that
                make an impact.
              </p>
              <ul className="service-features">
                <li>Brand strategy & positioning</li>
                <li>Brand messaging & tone of voice</li>
                <li>Rebranding services</li>
                <li>Social media branding</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaYoutube className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title">YouTube Management</h3>
              <p className="service-description">
                From channel setup and optimization to content strategy, video
                SEO, and growth hacking, we manage YouTube channels to increase
                views, subscribers, and monetization potential.
              </p>
              <ul className="service-features">
                <li>Channel setup & optimization</li>
                <li>Video SEO (titles, tags, descriptions, thumbnails)</li>
                <li>YouTube Shorts & long-form video strategy</li>
                <li>Monetization setup & guidance</li>
              </ul>
            </div>

            <div className="service-card">
              <div className="service-icon-arrow">
                <div className="service-icon">
                  <FaLaptopCode className="icon" />
                </div>

                <div className="card-arrow">➚</div>
              </div>
              <h3 className="service-title">Web Development</h3>
              <p className="service-description">
                We create high-performance websites that are fast,
                user-friendly, and conversion-optimized. Whether it’s a business
                website, portfolio, or landing page, we build sites that drive
                results.
              </p>
              <ul className="service-features">
                <li>Custom website design & development</li>
                <li>Wordpress Development</li>
                <li>Web application development</li>
                <li>Dynamic Websites</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <div className="testimonials-header">
            <img className="star" src={star} alt="Star icon" />
            <h2 className="section-subtitle">TESTIMONIALS</h2>
            <h1 className="section-title">
              What our <span className="highlight">clients say</span> about our
              services
            </h1>
          </div>

          <div className="testimonials-container">
            <div className="testimonial-card-service">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
              We increased engagement on our social media after their consultation, social media was almost died but observed growth.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                  <img src={pn_bridal}></img>
                </div>
                <div className="author-info">
                  <h4 className="author-name">PN Bridal Studio</h4>
                  <p className="author-company"></p>
                </div>
              </div>
            </div>

            <div className="testimonial-card-service">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Their web development service exceeded our expectations. The
                team delivered a website that not only looks great but also
                performs exceptionally well. Our conversion rates have increased
                by 40% since the launch.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                <img src={robert}></img>
                </div>
                <div className="author-info">
                  <h4 className="author-name">Robert Johnson</h4>
                  <p className="author-company">CEO, TechSolutions Inc.</p>
                </div>
              </div>
            </div>

            <div className="testimonial-card-service">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
              WIth minimum budget, got optimum result. Personally, we love graphics and understanding of business.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                <img src={jk}></img>
                </div>
                <div className="author-info">
                  <h4 className="author-name">JK Furniture</h4>
                  <p className="author-company"></p>
                </div>
              </div>
            </div>

            <div className="testimonial-card-service">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
              Almost without spending more budget, got best result. After, ads we got business.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                <img src={jb}></img>
                </div>
                <div className="author-info">
                  <h4 className="author-name">JB Enterprise</h4>
                  <p className="author-company"></p>
                </div>
              </div>
            </div>

            <div className="testimonial-card-service">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                The mobile app they built for us has transformed our business.
                The user experience is seamless, and the app has received
                excellent reviews. We've seen a significant increase in customer
                engagement.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                <img src={gc}></img>
                </div>
                <div className="author-info">
                  <h4 className="author-name">Maria Garcia</h4>
                  <p className="author-company">
                    Marketing Director, Retail Plus
                  </p>
                </div>
              </div>
            </div>

            <div className="testimonial-card-service">
              <div className="quote-icon">"</div>
              <p className="testimonial-text">
                Their SEO services have dramatically improved our online
                visibility. Within just three months, we were ranking on the
                first page for multiple key terms, resulting in a 65% increase
                in organic traffic.
              </p>
              <div className="testimonial-author">
                <div className="author-avatar">
                <img src={david}></img>
                </div>
                <div className="author-info">
                  <h4 className="author-name">David Lee</h4>
                  <p className="author-company">Founder, Growth Ventures</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="services-cta-section">
          <h2 className="cta-title">
            Ready to transform your digital presence?
          </h2>
          <p className="cta-text">
            Let's discuss how our services can help achieve your business goals.
            Our team is ready to develop a personalized solution for your
            specific needs.
          </p>
          <GetInTouchButton
            className="schedule-consult"
            text="Schedule a Consultation"
            href="https://calendly.com/maulikvaghasiya1999/30min"
            target="_blank"
          />
        </div>
      </div>
    </>
  );
}

export default ServicesPage;
