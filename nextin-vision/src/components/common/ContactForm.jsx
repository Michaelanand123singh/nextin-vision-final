import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null

  // Validation rules
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        return !value.trim() ? 'Name is required' : value.length < 2 ? 'Name is too short' : '';
      case 'email':
        return !value.trim() ? 'Email is required' : 
               !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value) ? 'Invalid email address' : '';
      case 'message':
        return !value.trim() ? 'Message is required' : value.length < 10 ? 'Message is too short' : '';
      default:
        return '';
    }
  };

  // Validate form on change
  useEffect(() => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      if (touched[key]) {
        const error = validateField(key, formData[key]);
        if (error) newErrors[key] = error;
      }
    });
    setErrors(newErrors);
  }, [formData, touched]);

  const handleBlur = (field) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setTouched(Object.keys(formData).reduce((acc, key) => ({ ...acc, [key]: true }), {}));
      setIsSubmitting(false);
      return;
    }

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitStatus('success');
      setFormData({ name: '', email: '', company: '', message: '' });
      setTouched({});
      setTimeout(() => setSubmitStatus(null), 3000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputFields = [
    { name: 'name', label: 'Name', type: 'text', required: true },
    { name: 'email', label: 'Email', type: 'email', required: true },
    { name: 'company', label: 'Company', type: 'text', required: false },
  ];

  return (
    <div className="contact-form-container">
      <motion.form 
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="contact-form"
      >
        <div className="form-grid">
          {inputFields.map(field => (
            <div key={field.name} className="form-field">
              <label htmlFor={field.name} className="form-label">
                {field.label} {field.required && <span className="required">*</span>}
              </label>
              <input
                type={field.type}
                id={field.name}
                name={field.name}
                value={formData[field.name]}
                onChange={handleChange}
                onBlur={() => handleBlur(field.name)}
                className={`form-input ${touched[field.name] && errors[field.name] ? 'error' : ''}`}
                required={field.required}
              />
              <AnimatePresence>
                {touched[field.name] && errors[field.name] && (
                  <motion.span
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="error-message"
                  >
                    {errors[field.name]}
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          ))}
          
          <div className="form-field full-width">
            <label htmlFor="message" className="form-label">
              Message <span className="required">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              onBlur={() => handleBlur('message')}
              className={`form-textarea ${touched.message && errors.message ? 'error' : ''}`}
              required
            />
            <AnimatePresence>
              {touched.message && errors.message && (
                <motion.span
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="error-message"
                >
                  {errors.message}
                </motion.span>
              )}
            </AnimatePresence>
          </div>
        </div>

        <motion.button
          type="submit"
          className="submit-button"
          disabled={isSubmitting || Object.keys(errors).length > 0}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          {isSubmitting ? (
            <motion.div className="loading-spinner" />
          ) : (
            <>
              <span>{submitStatus === 'success' ? 'Sent!' : 'Send Message'}</span>
              <Send className="button-icon" size={18} />
            </>
          )}
        </motion.button>

        <AnimatePresence>
          {submitStatus && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className={`status-message ${submitStatus}`}
            >
              {submitStatus === 'success' ? (
                <>
                  <CheckCircle size={20} />
                  <span>Message sent successfully!</span>
                </>
              ) : (
                <>
                  <AlertCircle size={20} />
                  <span>Failed to send message. Please try again.</span>
                </>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.form>
    </div>
  );
};

export default ContactForm;