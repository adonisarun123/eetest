'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Gift, Palette, Book, Users, Heart, Star } from 'lucide-react';

export default function CustomEngagementsPage() {
  const services = [
    {
      title: 'Birthday Celebrations',
      description: 'Make birthdays special with customized celebrations',
      icon: <Gift className="w-8 h-8" />,
      features: ['Personalized decorations', 'Special menu', 'Entertainment', 'Memory book']
    },
    {
      title: 'Anniversary Events',
      description: 'Celebrate milestones with memorable events',
      icon: <Heart className="w-8 h-8" />,
      features: ['Themed parties', 'Renewal ceremonies', 'Photo sessions', 'Special guests']
    },
    {
      title: 'Hobby Clubs',
      description: 'Join or create clubs based on your interests',
      icon: <Users className="w-8 h-8" />,
      features: ['Gardening club', 'Book club', 'Chess club', 'Music appreciation']
    },
    {
      title: 'Art & Craft Workshops',
      description: 'Express creativity through various art forms',
      icon: <Palette className="w-8 h-8" />,
      features: ['Painting classes', 'Pottery', 'Knitting circle', 'Craft projects']
    },
    {
      title: 'Book Reading Sessions',
      description: 'Explore literature together in reading groups',
      icon: <Book className="w-8 h-8" />,
      features: ['Weekly sessions', 'Author discussions', 'Book exchanges', 'Writing workshops']
    },
    {
      title: 'Volunteer Programs',
      description: 'Give back to society through meaningful work',
      icon: <Star className="w-8 h-8" />,
      features: ['Teaching programs', 'Community service', 'Mentoring', 'Social causes']
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-100 via-amber-100 to-warm-beige py-12">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/offerings" className="text-dark-lavender hover:underline mb-4 inline-block">
              ← Back to All Offerings
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Custom Engagements</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Personalized activities and services tailored to your unique interests and needs. 
              From special celebrations to hobby clubs, we help you pursue your passions and 
              create meaningful experiences.
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
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Your Interests, Our Priority
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every senior has unique interests, talents, and aspirations. Our custom 
                engagement programs are designed to honor these individual preferences, 
                creating opportunities for personal growth, creative expression, and 
                meaningful connections.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Gift className="w-5 h-5 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">Personalized celebrations and events</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Users className="w-5 h-5 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">Interest-based clubs and groups</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="bg-yellow-100 p-2 rounded-lg">
                    <Star className="w-5 h-5 text-yellow-600" />
                  </div>
                  <p className="text-gray-700">Opportunities to share your expertise</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&h=600&fit=crop"
                alt="Custom activities"
                fill
                className="rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Custom Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Choose from our range of personalized services or suggest your own ideas
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all"
              >
                <div className="text-yellow-500 mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="text-yellow-500 mt-1">•</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              How Custom Engagements Work
            </h2>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: '1', title: 'Share Your Idea', desc: 'Tell us what you\'d like to do' },
                { step: '2', title: 'We Plan Together', desc: 'Collaborate on the details' },
                { step: '3', title: 'Organize Resources', desc: 'We arrange everything needed' },
                { step: '4', title: 'Enjoy the Experience', desc: 'Focus on having a great time' }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="bg-yellow-500 text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
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
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Custom Engagement Success Stories
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Gift className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">75th Birthday Surprise</h3>
                <p className="text-gray-600">
                  "EzyElders organized a surprise party for my 75th birthday with all my 
                  old friends. It was the best birthday I've had in years!"
                </p>
                <p className="text-sm text-gray-500 mt-3">- Mrs. Radha Krishna</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <Book className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="font-semibold text-gray-800 mb-2">Poetry Club Success</h3>
                <p className="text-gray-600">
                  "I suggested starting a poetry club, and now we have 15 members who 
                  meet weekly to share our writings. It's wonderful!"
                </p>
                <p className="text-sm text-gray-500 mt-3">- Mr. Venkatesh Rao</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-yellow-500 to-amber-500 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Users className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Let's Create Something Special Together</h2>
            <p className="text-lg mb-8">
              Have an idea for an activity or celebration? We're here to make it happen!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <button className="bg-white text-yellow-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  Share Your Idea
                </button>
              </Link>
              <Link href="/events">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-yellow-500 transition-all">
                  View Activities
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 