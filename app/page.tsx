'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, Star, ChevronRight, Sparkles, Activity, BookOpen } from 'lucide-react';

export default function HomePage() {
  const features = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Yoga, meditation, and health workshops tailored for senior citizens',
      link: '/offerings/health-wellness',
      color: 'bg-red-100 text-red-600'
    },
    {
      icon: <Activity className="w-8 h-8" />,
      title: 'Technology Training',
      description: 'Learn smartphones, video calling, and stay connected with loved ones',
      link: '/offerings/technology',
      color: 'bg-blue-100 text-blue-600'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Social Gatherings',
      description: 'Fun outings, cultural events, and social activities',
      link: '/offerings/leisure-outings',
      color: 'bg-green-100 text-green-600'
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: 'Spiritual Sessions',
      description: 'Satsangs, bhajans, and spiritual discussions',
      link: '/offerings/satsangs',
      color: 'bg-purple-100 text-purple-600'
    }
  ];

  const testimonials = [
    {
      name: 'Kamala Devi',
      age: '72 years',
      text: 'EzyElders has brought so much joy to my life. The yoga sessions keep me healthy, and I\'ve made wonderful friends!',
      image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=400&h=400&fit=crop'
    },
    {
      name: 'Raman Nair',
      age: '68 years',
      text: 'Learning to use WhatsApp to talk to my grandchildren abroad has been life-changing. Thank you, EzyElders!',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&h=400&fit=crop'
    },
    {
      name: 'Savitri Sharma',
      age: '75 years',
      text: 'The temple visits and satsangs fulfill my spiritual needs. I feel blessed to be part of this community.',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=400&fit=crop'
    }
  ];

  const stats = [
    { number: '500+', label: 'Happy Seniors' },
    { number: '50+', label: 'Activities Monthly' },
    { number: '10+', label: 'Expert Instructors' },
    { number: '5', label: 'Years of Service' }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-lavender via-sky to-warm-beige py-16">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 leading-tight">
                Enriching Lives,{' '}
                <span className="text-dark-lavender">One Elder at a Time</span>
              </h1>
              <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                Join our vibrant community where seniors discover joy, wellness, and meaningful connections through engaging activities and caring support.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/join-us">
                  <button className="btn-primary flex items-center gap-2">
                    Join Our Community <ChevronRight className="w-5 h-5" />
                  </button>
                </Link>
                <Link href="/offerings">
                  <button className="btn-secondary">
                    Explore Activities
                  </button>
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative w-full h-[400px] lg:h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1582593981935-a87a0644caec?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                  alt="Happy seniors enjoying activities"
                  fill
                  className="rounded-2xl shadow-2xl object-cover"
                  priority
                />
                <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-yellow-500" />
                    <span className="font-semibold text-gray-800">Trusted by 500+ Families</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-3xl font-bold text-dark-lavender mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Discover a wide range of activities designed to keep you healthy, happy, and connected
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={feature.link}>
                  <div className="card h-full hover:shadow-2xl transition-all hover:-translate-y-2">
                    <div className={`${feature.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                    <p className="text-gray-600 mb-4">{feature.description}</p>
                    <span className="text-dark-lavender font-medium flex items-center gap-1">
                      Learn More <ChevronRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-lavender/20">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Elders Say</h2>
            <p className="text-lg text-gray-600">Real stories from our community members</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-16 h-16">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 italic">"{testimonial.text}"</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/testimonials">
              <button className="btn-primary">Read More Stories</button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-dark-lavender to-purple-700 text-white">
        <div className="section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our Community?</h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Take the first step towards a more active, social, and fulfilling life
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Contact Us
                </button>
              </Link>
              <Link href="/events">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-dark-lavender transition-all">
                  View Upcoming Events
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Upcoming Events Preview */}
      <section className="py-16 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Events</h2>
            <p className="text-lg text-gray-600">Join us for these exciting activities</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card border-l-4 border-sage"
            >
              <div className="flex items-center gap-2 text-sage mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Tomorrow, 10:00 AM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Morning Yoga Session</h3>
              <p className="text-gray-600">Gentle yoga for flexibility and balance</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="card border-l-4 border-sky"
            >
              <div className="flex items-center gap-2 text-sky mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">This Saturday, 3:00 PM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Smartphone Workshop</h3>
              <p className="text-gray-600">Learn WhatsApp and video calling basics</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="card border-l-4 border-dark-lavender"
            >
              <div className="flex items-center gap-2 text-dark-lavender mb-2">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Next Week, 5:00 PM</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Cultural Evening</h3>
              <p className="text-gray-600">Music, dance, and refreshments</p>
            </motion.div>
          </div>

          <div className="text-center mt-12">
            <Link href="/events">
              <button className="btn-primary">View All Events</button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
