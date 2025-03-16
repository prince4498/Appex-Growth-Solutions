import React, { useState } from 'react';
import './Contact.css';
import contact_01 from "../images/contact_01.png";
import contact_02 from "../images/contact_02.png";
import contact_03 from "../images/contact_03.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  
  // Google Script URL - replace with your deployed Apps Script web app URL
  const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbztbp67hbx6nULzZzcHb8_oKRxq4OWK4UU1gi7xk2IoaKPwD5X13vRhUurRXPij4aYu/exec';
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };
  
  const validateForm = () => {
    const newErrors = {};
    
    // Check required fields (all except message)
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }
    
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    setErrors(newErrors);
    
    // Form is valid if there are no errors
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      setSubmitError('');
      
      try {
        // Prepare form data for submission
        const formDataForSubmit = new FormData();
        Object.keys(formData).forEach(key => {
          formDataForSubmit.append(key, formData[key]);
        });
        
        // Add timestamp
        const timestamp = new Date().toISOString();
        formDataForSubmit.append('timestamp', timestamp);
        
        // Submit to Google Sheets via fetch API
        const response = await fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          body: formDataForSubmit
        });
        
        // Check if response was successful
        if (response.ok) {
          console.log('Form submitted successfully');
          setSubmitted(true);
        } else {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to submit form');
        }
      } catch (error) {
        console.error('Error submitting form:', error);
        setSubmitError('Failed to submit the form. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };
  
  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="left-content">
          <div className="headline">
            <h1>Get In <span className="highlight">Touch</span> With Us</h1>
          </div>
          
          <p className="subtext">
            We'd love to hear from you! Whether you have questions, need support, or want to
            discuss a project, feel free to reach out.
          </p>
          
          <div className="contact-info-container">
            <div className="contact-info-box">
              <div className="contact-info-section">
                <div className="icon-container-contact">
                  <img className='icon' src={contact_01} alt="Phone" />
                </div>
                <div className="contact-info-text">
                  <h3>Phone Number</h3>
                  <p>+91 9726 179 756</p>
                </div>
              </div>
              
              <div className="contact-info-section">
                <div className="icon-container-contact">
                  <img className='icon' src={contact_02} alt="Email" />
                </div>
                <div className="contact-info-text">
                  <h3>Email Address</h3>
                  <p>contact@appexgrowthsolutions.com</p>
                </div>
              </div>
            </div>
            
            <div className="contact-info-box address-box">
              <div className="contact-info-section">
                <div className="icon-container-contact">
                  <img className='icon' src={contact_03} alt="Address" />
                </div>
                <div className="contact-info-text">
                  <h3>Address</h3>
                  <p>Opp. Varachha Bank, Yogichowk, Surat, Gujarat, India - 395010</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="right-content">
          {submitted ? (
            <div className="thank-you-message">
              <h2>Thank You!</h2>
              <p>Your message has been received. We'll get back to you shortly.</p>
              <button 
                className="new-message-button"
                onClick={() => {
                  setSubmitted(false);
                  setFormData({
                    firstName: '',
                    lastName: '',
                    phone: '',
                    email: '',
                    message: ''
                  });
                }}
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="input-row">
                <div className="input-container">
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="First Name" 
                    value={formData.firstName}
                    onChange={handleChange}
                    className={errors.firstName ? 'error' : ''}
                  />
                  {errors.firstName && <div className="error-message">{errors.firstName}</div>}
                </div>
                <div className="input-container">
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Last Name" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className={errors.lastName ? 'error' : ''}
                  />
                  {errors.lastName && <div className="error-message">{errors.lastName}</div>}
                </div>
              </div>
              
              <div className="input-container full-width">
                <input 
                  type='tel' 
                  name="phone"
                  placeholder="Phone No" 
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                />
                {errors.phone && <div className="error-message">{errors.phone}</div>}
              </div>
              
              <div className="input-container full-width">
                <input 
                  type="email" 
                  name="email"
                  placeholder="E-mail" 
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <div className="error-message">{errors.email}</div>}
              </div>
              
              <div className="input-container full-width">
                <textarea 
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              
              {submitError && <div className="error-message submit-error">{submitError}</div>}
              
              <button 
                type="submit" 
                className="submit-button" 
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Submit Message'}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Contact;