'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setSubmitStatus('success');
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Call Us',
      details: ['+91-73496 53339'],
      action: 'tel:+917349653339'
    },
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Us',
      details: ['info@ezyhelpers.com'],
      action: 'mailto:info@ezyhelpers.com'
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: 'Visit Us',
      details: [
        'No 10, 5th B Cross',
        'Sharadamba Nagar, Jalahalli',
        'Bangalore - 560013'
      ],
      action: 'https://maps.google.com/?q=13.0500,77.5500'
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: 'Working Hours',
      details: [
        'Monday - Friday: 9:00 AM - 6:00 PM',
        'Saturday: 9:00 AM - 1:00 PM',
        'Sunday: Closed'
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-lavender to-sky py-12">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We're here to answer your questions and help you join our community. 
              Reach out to us through any of the channels below.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex gap-4"
                  >
                    <div className="bg-lavender/20 p-3 rounded-lg flex-shrink-0">
                      <div className="text-dark-lavender">{info.icon}</div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800 mb-1">{info.title}</h3>
                      {info.action ? (
                        <a 
                          href={info.action}
                          target={info.action.startsWith('http') ? '_blank' : undefined}
                          rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                          className="text-gray-600 hover:text-dark-lavender transition-colors"
                        >
                          {info.details.map((detail, idx) => (
                            <p key={idx}>{detail}</p>
                          ))}
                        </a>
                      ) : (
                        info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">{detail}</p>
                        ))
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="mt-8 p-6 bg-green-50 rounded-xl"
              >
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  Quick Response on WhatsApp
                </h3>
                <p className="text-gray-600 mb-4">
                  Get instant responses to your queries on WhatsApp
                </p>
                <a
                  href="https://wa.me/917349653339?text=Hello,%20I%20need%20information%20about%20EzyElders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full hover:bg-green-700 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </a>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-lavender focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-lavender focus:border-transparent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-lavender focus:border-transparent"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-lavender focus:border-transparent"
                  >
                    <option value="">Select a subject</option>
                    <option value="membership">Membership Inquiry</option>
                    <option value="programs">Programs Information</option>
                    <option value="volunteer">Volunteer Opportunities</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-dark-lavender focus:border-transparent resize-none"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                {submitStatus === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-green-100 text-green-700 p-4 rounded-lg"
                  >
                    Thank you for your message! We'll get back to you soon.
                  </motion.div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full flex items-center justify-center gap-2"
                  disabled={submitStatus === 'success'}
                >
                  <Send className="w-5 h-5" />
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Find Us Here</h2>
            <div className="bg-white p-2 rounded-xl shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.0142!2d77.5500!3d13.0500!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDAzJzAwLjAiTiA3N8KwMzMnMDAuMCJF!5e0!3m2!1sen!2sin!4v1635959456789!5m2!1sen!2sin"
                title="EzyElders Location Map"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="rounded-lg"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 