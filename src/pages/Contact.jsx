import React, { useState } from 'react';
import AnimatedElement from '../components/AnimatedElement';
import axios from 'axios';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      // Always start with 5, cannot be deleted
      let numeric = value.replace(/[^0-9]/g, '');
      if (!numeric.startsWith('5')) {
        numeric = '5' + numeric.replace(/^5+/, '');
      }
      // Prevent deleting the first 5
      if (numeric.length === 0) numeric = '5';
      setFormData(prevData => ({
        ...prevData,
        [name]: numeric
      }));
    } else {
      setFormData(prevData => ({
        ...prevData,
        [name]: value
      }));
    }
  };
  
  // Helper to sanitize input for JSON
  function sanitizeForJson(str) {
    if (typeof str !== 'string') return '';
    return str
      .replace(/[\u0000-\u001F\u007F-\u009F]/g, '') // Remove control chars
      .replace(/\\/g, '\\\\') // Escape backslashes
      .replace(/\"/g, '\\"') // Escape double quotes
      .replace(/'/g, "\'"); // Optionally escape single quotes
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    // All fields required
    if (!formData.firstName.trim() || !formData.lastName.trim() || !formData.phone.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Lütfen tüm alanları eksiksiz doldurun.');
      return;
    }
    // Phone validation: only numbers, must start with 5 if not empty
    if (formData.phone && (!/^5[0-9]{9}$/.test(formData.phone))) {
      alert('Telefon numarası 10 haneli olmalı ve 5 ile başlamalıdır.');
      return;
    }
    try {
      await axios.post('https://activepieces.eyyupsert.com/api/v1/webhooks/ilBhuVebRk0qvTFnUH1Q9/sync', {
        firstname: sanitizeForJson(formData.firstName),
        lastname: sanitizeForJson(formData.lastName),
        phoneNumber: sanitizeForJson(formData.phone),
        email: sanitizeForJson(formData.email),
        message: sanitizeForJson(formData.message)
      });
      alert('Mesajınız gönderildi. Teşekkür ederiz!');
      setFormData({ firstName: '', lastName: '', phone: '5', email: '', message: '' });
    } catch (err) {
      alert('Bir hata oluştu, lütfen tekrar deneyin.');
    }
  };
  
  return (
    <div className="contact-page">
      <AnimatedElement>
        <h1 className="section-title">İLETİŞİM</h1>
      </AnimatedElement>
      
      <div className="contact-container">
        <AnimatedElement delay={0.2} direction="left">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">Adınız</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Soyadınız</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Telefon Numarası</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="5xx xxx xx xx"
                minLength={10}
                maxLength={10}
                pattern="5[0-9]{9}"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">E-posta</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Mesaj</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                style={{ resize: 'vertical' }}
                maxLength={2000}
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">GÖNDER</button>
          </form>
        </AnimatedElement>
        
        <AnimatedElement delay={0.4} direction="right">
          <div className="contact-info">
            <div className="info-item">
              <h3>Telefon</h3>
              <p>+90 507 890 4147</p>
            </div>
            
            <div className="info-item">
              <h3>E-posta</h3>
              <p>veyltech@gmail.com</p>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </div>
  );
};

export default Contact; 