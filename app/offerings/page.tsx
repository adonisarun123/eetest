'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Heart, Smartphone, MapPin, Sparkles, Users, ArrowRight } from 'lucide-react';

interface Offering {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
  link: string;
  color: string;
}

export default function OfferingsPage() {
  const offerings: Offering[] = [
    {
      id: 'health-wellness',
      title: 'Health & Wellness',
      description: 'Comprehensive wellness programs designed to keep you healthy, active, and energized in your golden years.',
      icon: <Heart className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=600&fit=crop',
      features: [
        'Morning & Evening Yoga',
        'Meditation Sessions',
        'Health Check-ups',
        'Nutrition Counseling',
        'Physiotherapy',
        'Mental Health Support'
      ],
      link: '/offerings/health-wellness',
      color: 'bg-red-500'
    },
    {
      id: 'technology',
      title: 'Technology Tutoring',
      description: 'Learn to use modern technology at your own pace with patient, one-on-one guidance.',
      icon: <Smartphone className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop',
      features: [
        'Smartphone Basics',
        'WhatsApp & Video Calling',
        'Online Banking',
        'Social Media',
        'Email & Internet',
        'Digital Photography'
      ],
      link: '/offerings/technology',
      color: 'bg-blue-500'
    },
    {
      id: 'leisure-outings',
      title: 'Leisure Outings',
      description: 'Explore new places and create wonderful memories with organized trips and social activities.',
      icon: <MapPin className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800&h=600&fit=crop',
      features: [
        'Temple Visits',
        'Picnics & Parks',
        'Museum Tours',
        'Shopping Trips',
        'Movie Outings',
        'Restaurant Visits'
      ],
      link: '/offerings/leisure-outings',
      color: 'bg-green-500'
    },
    {
      id: 'satsangs',
      title: 'Satsangs & Spirituality',
      description: 'Nurture your spiritual side with regular satsangs, bhajans, and religious discourses.',
      icon: <Sparkles className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1528702055224-29dfeeb5dfc4?w=800&h=600&fit=crop',
      features: [
        'Daily Satsangs',
        'Bhajan Sessions',
        'Religious Discourses',
        'Festival Celebrations',
        'Spiritual Workshops',
        'Prayer Meetings'
      ],
      link: '/offerings/satsangs',
      color: 'bg-purple-500'
    },
    {
      id: 'custom-engagements',
      title: 'Custom Engagements',
      description: 'Personalized activities and services tailored to your specific interests and needs.',
      icon: <Users className="w-8 h-8" />,
      image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop',
      features: [
        'Birthday Celebrations',
        'Anniversary Events',
        'Hobby Clubs',
        'Art & Craft',
        'Book Reading',
        'Volunteer Programs'
      ],
      link: '/offerings/custom-engagements',
      color: 'bg-yellow-500'
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Offerings</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Discover our comprehensive range of services designed to enrich every aspect 
              of senior life. From health and wellness to technology and spirituality, 
              we have something for everyone.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="space-y-16">
            {offerings.map((offering, index) => (
              <motion.div
                key={offering.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`flex flex-col lg:flex-row gap-8 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1">
                  <div className="relative h-[300px] lg:h-[400px] w-full">
                    <Image
                      src={offering.image}
                      alt={offering.title}
                      fill
                      className="rounded-2xl object-cover shadow-xl"
                    />
                    <div className={`absolute top-4 left-4 ${offering.color} p-3 rounded-full text-white`}>
                      {offering.icon}
                    </div>
                  </div>
                </div>

                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold text-gray-800">{offering.title}</h2>
                  <p className="text-lg text-gray-700 leading-relaxed">{offering.description}</p>
                  
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-3">What we offer:</h3>
                    <div className="grid grid-cols-2 gap-3">
                      {offering.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <div className={`w-2 h-2 rounded-full ${offering.color} mt-2 flex-shrink-0`} />
                          <span className="text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link href={offering.link}>
                    <button className="btn-primary flex items-center gap-2">
                      Learn More <ArrowRight className="w-5 h-5" />
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Why Choose EzyElders?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We understand the unique needs of senior citizens and have designed our programs 
              to provide maximum benefit with comfort and care.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: 'Experienced Team',
                description: 'Our instructors and caregivers are specially trained in geriatric care'
              },
              {
                title: 'Flexible Timings',
                description: 'Choose schedules that work best for you, with morning and evening options'
              },
              {
                title: 'Transportation Support',
                description: 'We provide pick-up and drop services for most activities'
              },
              {
                title: 'Affordable Pricing',
                description: 'Quality services at prices that respect your budget'
              },
              {
                title: 'Small Groups',
                description: 'Personalized attention with small batch sizes for all activities'
              },
              {
                title: 'Safe Environment',
                description: 'Fully sanitized, senior-friendly facilities with medical support'
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  <h3 className="font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-dark-lavender to-purple-700 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-lg mb-8">
              Join our community today and discover a world of possibilities designed just for you
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/join-us">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-lavender transition-all">
                  Join Now
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 