'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Activity, Brain, Users, Clock, CheckCircle, Calendar } from 'lucide-react';

export default function HealthWellnessPage() {
  const programs = [
    {
      title: 'Yoga & Meditation',
      description: 'Daily sessions designed for senior flexibility and balance',
      schedule: 'Morning: 7-8 AM, Evening: 5-6 PM',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop'
    },
    {
      title: 'Health Check-ups',
      description: 'Regular monitoring by qualified healthcare professionals',
      schedule: 'Every Saturday, 10 AM - 1 PM',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop'
    },
    {
      title: 'Physiotherapy',
      description: 'Personalized sessions for pain management and mobility',
      schedule: 'By appointment',
      image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop'
    },
    {
      title: 'Nutrition Counseling',
      description: 'Diet plans tailored for senior nutritional needs',
      schedule: 'Wednesdays, 3-5 PM',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop'
    }
  ];

  const benefits = [
    'Improved flexibility and balance',
    'Better sleep quality',
    'Reduced stress and anxiety',
    'Enhanced immune system',
    'Pain management',
    'Social interaction',
    'Mental clarity',
    'Increased energy levels'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-100 via-pink-100 to-warm-beige py-12">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/offerings" className="text-dark-lavender hover:underline mb-4 inline-block">
              ← Back to All Offerings
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Health & Wellness Programs</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Stay healthy, active, and energized with our comprehensive wellness programs 
              designed specifically for senior citizens. Our expert instructors ensure safe, 
              enjoyable sessions that cater to your unique needs.
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
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Your Health is Our Priority</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                At EzyElders, we believe that age is no barrier to good health. Our wellness 
                programs are carefully crafted to address the specific health challenges faced 
                by seniors while promoting overall well-being.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Holistic Approach</h3>
                    <p className="text-gray-600">Addressing physical, mental, and emotional health</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Activity className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Personalized Care</h3>
                    <p className="text-gray-600">Programs adapted to individual health conditions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Brain className="w-6 h-6 text-red-500 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Expert Guidance</h3>
                    <p className="text-gray-600">Certified instructors with geriatric care experience</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop"
                alt="Seniors doing yoga"
                fill
                className="rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Programs</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of wellness activities, each designed to improve 
              different aspects of your health
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{program.title}</h3>
                <p className="text-gray-600 mb-3">{program.description}</p>
                <div className="flex items-center gap-2 text-sm text-red-600">
                  <Clock className="w-4 h-4" />
                  <span>{program.schedule}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Benefits of Our Wellness Programs
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Schedule CTA */}
      <section className="py-12 bg-gradient-to-r from-red-500 to-pink-500 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Calendar className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Start Your Wellness Journey Today</h2>
            <p className="text-lg mb-8">
              Join our health and wellness programs and experience the transformation. 
              First session is free!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-red-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Book a Free Session
                </button>
              </Link>
              <Link href="/events">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-red-500 transition-all">
                  View Schedule
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 