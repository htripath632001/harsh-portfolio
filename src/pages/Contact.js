// pages/Contact.js

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Replace with your EmailJS service details
      await emailjs.send(
        'service_yzsc8ul',
        'template_1si9dql',
        {
          from_name: formData.name,
          reply_to: formData.email,
          message: formData.message
        },
        '_rTwNTKt-euyPK3nN'
      );
      
      setSubmitStatus({
        type: 'success',
        message: 'Message sent successfully!'
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Failed to send message. Please try again.'
      });
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const socialLinks = [
    {
      name: 'LinkedIn',
      icon: '/icons8-linkedin.svg', // Add your icon files to public folder
      url: 'https://linkedin.com/in/harshtripathi6',
      color: '#0077B5'
    },
    {
      name: 'GitHub',
      icon: '/icons8-github.svg',
      url: 'https://github.com/harshtripathi6',
      color: '#333'
    },
    {
      name: 'Email',
      icon: '/icons8-email.svg',
      //url: 'https://mail.google.com/mail/u/0/#inbox?compose=new',
      url: 'https://mail.google.com/mail/u/0/#inbox?compose=GTvVlcRwQnpmWvwqgfXKxsGDCRfJVgnCLmclHpCJzgcgnmdjdfjdNMJjkncmMHDHBjlTqjvgTnzdF',
      color: '#EA4335'
    },
    {
      name: 'Twitter',
      icon: '/icons8-twitter-bird.svg',
      url: 'https://twitter.com/htripathi06',
      color: '#1DA1F2'
    }
  ];

  return (
    <div className="min-h-screen bg-black">
    <div className="max-w-4xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-8 text-red-600">Contact Me</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-white-400">Found my work interesting ? </h2>
          <h3 className="text-2xl font-semibold mb-6 text-white-400">Always looking to collaborate. Contact me via my socials ! </h3>
          <div className="grid grid-cols-2 gap-8">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="flex flex-col items-center gap-2"
              >
                <div 
                  className="w-16 h-16 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(220, 38, 38, 0.1)' }}
                >
                  <img 
                    src={social.icon} 
                    alt={social.name} 
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-red-400">{social.name}</span>
              </motion.a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 text-red-400">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border-2 border-red-600/30 
                       rounded focus:border-red-600 focus:outline-none
                       text-white-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-red-400">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 bg-black border-2 border-red-600/30 
                       rounded focus:border-red-600 focus:outline-none
                       text-white-400"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-red-400">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 bg-black border-2 border-red-600/30 
                       rounded focus:border-red-600 focus:outline-none
                       text-white-400"
              required
            ></textarea>
          </div>
          
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded
                     transition-colors duration-200"
          >
            Send Message
          </button>

          {submitStatus.message && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`p-3 rounded ${
                submitStatus.type === 'success' 
                  ? 'bg-green-600/20 text-green-400' 
                  : 'bg-red-600/20 text-red-400'
              }`}
            >
              {submitStatus.message}
            </motion.div>
          )}
        </form>
      </div>
    </div>
  </div>
  );
};

export default Contact;
