'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Smartphone, Video, Globe, Camera, MessageCircle, Shield, Clock, CheckCircle } from 'lucide-react';

export default function TechnologyPage() {
  const courses = [
    {
      title: 'Smartphone Basics',
      description: 'Learn to navigate your smartphone with confidence',
      topics: ['Making calls', 'Saving contacts', 'Taking photos', 'Basic settings'],
      icon: <Smartphone className="w-6 h-6" />,
      duration: '4 weeks'
    },
    {
      title: 'WhatsApp Mastery',
      description: 'Connect with family and friends through messaging',
      topics: ['Sending messages', 'Voice notes', 'Sharing photos', 'Group chats'],
      icon: <MessageCircle className="w-6 h-6" />,
      duration: '2 weeks'
    },
    {
      title: 'Video Calling',
      description: 'See your loved ones face-to-face, no matter the distance',
      topics: ['WhatsApp video calls', 'Zoom basics', 'Google Meet', 'Skype'],
      icon: <Video className="w-6 h-6" />,
      duration: '2 weeks'
    },
    {
      title: 'Internet & Email',
      description: 'Browse the web and manage emails like a pro',
      topics: ['Google search', 'Email basics', 'Online news', 'YouTube'],
      icon: <Globe className="w-6 h-6" />,
      duration: '3 weeks'
    },
    {
      title: 'Digital Photography',
      description: 'Capture and share precious moments',
      topics: ['Camera basics', 'Photo editing', 'Creating albums', 'Sharing photos'],
      icon: <Camera className="w-6 h-6" />,
      duration: '2 weeks'
    },
    {
      title: 'Online Safety',
      description: 'Stay safe while enjoying the digital world',
      topics: ['Password security', 'Avoiding scams', 'Privacy settings', 'Safe browsing'],
      icon: <Shield className="w-6 h-6" />,
      duration: '1 week'
    }
  ];

  const learningApproach = [
    {
      title: 'One-on-One Attention',
      description: 'Personalized guidance at your own pace'
    },
    {
      title: 'Hands-On Practice',
      description: 'Learn by doing with your own device'
    },
    {
      title: 'Patient Instructors',
      description: 'No question is too small or silly'
    },
    {
      title: 'Step-by-Step Guides',
      description: 'Easy-to-follow printed materials'
    },
    {
      title: 'Regular Practice Sessions',
      description: 'Reinforce learning with practice'
    },
    {
      title: 'Small Group Classes',
      description: 'Learn alongside peers in a fun environment'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 via-cyan-100 to-sky py-12">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/offerings" className="text-dark-lavender hover:underline mb-4 inline-block">
              ← Back to All Offerings
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Technology Tutoring</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Bridge the digital divide and stay connected with your loved ones. Our patient, 
              step-by-step approach makes learning technology easy and enjoyable for seniors.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-2 lg:order-1"
            >
              <div className="relative h-[400px]">
                <Image
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
                  alt="Senior learning technology"
                  fill
                  className="rounded-2xl object-cover shadow-xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Technology Made Simple
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                We understand that technology can seem overwhelming. That's why our courses 
                are designed specifically for seniors, with patience, repetition, and plenty 
                of hands-on practice.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Smartphone className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">Use your own device for familiarity</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <Clock className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">Learn at your own comfortable pace</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-blue-100 p-2 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                  </div>
                  <p className="text-gray-700">Practice until you feel confident</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Technology Courses</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Start with the basics and progress at your own speed. Each course builds 
              on the previous one, creating a strong foundation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="bg-blue-100 p-3 rounded-lg text-blue-600">
                    {course.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">{course.title}</h3>
                    <p className="text-sm text-gray-600">Duration: {course.duration}</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-4">{course.description}</p>
                <div className="space-y-2">
                  <p className="font-medium text-gray-700 text-sm">You'll learn:</p>
                  <ul className="space-y-1">
                    {course.topics.map((topic, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                        <span className="text-blue-500 mt-1">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Our Teaching Approach
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {learningApproach.map((approach, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-blue-50 p-6 rounded-xl hover:bg-blue-100 transition-colors">
                    <h3 className="font-semibold text-gray-800 mb-2">{approach.title}</h3>
                    <p className="text-gray-600 text-sm">{approach.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Success Stories</h2>
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 italic mb-6">
                "I never thought I could use a smartphone at 75! Now I video call my 
                grandchildren in America every week. The instructors were so patient 
                with me. They repeated everything until I understood."
              </p>
              <p className="font-semibold text-gray-800">- Mrs. Lakshmi Iyer, 75 years</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-blue-500 to-cyan-500 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Smartphone className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Ready to Get Tech-Savvy?</h2>
            <p className="text-lg mb-8">
              Join our technology classes and discover how easy it can be to stay 
              connected in the digital age.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-blue-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Enroll Now
                </button>
              </Link>
              <Link href="/events">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-blue-500 transition-all">
                  Free Demo Class
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 