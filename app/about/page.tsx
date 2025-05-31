'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Users, Award, CheckCircle } from 'lucide-react';
import Image from 'next/image';

export default function AboutPage() {
  const values = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Compassion',
      description: 'We treat every elder with love, respect, and dignity they deserve'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Community',
      description: 'Building strong bonds and friendships that last a lifetime'
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: 'Purpose',
      description: 'Helping seniors find meaning and joy in their golden years'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Excellence',
      description: 'Delivering high-quality programs and services consistently'
    }
  ];

  const team = [
    {
      name: 'Dr. Priya Sharma',
      role: 'Founder & Director',
      image: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=500&h=500&fit=crop',
      bio: 'With 20 years in geriatric care, Dr. Sharma founded EzyElders to transform senior living'
    },
    {
      name: 'Rajesh Kumar',
      role: 'Program Coordinator',
      image: 'https://images.unsplash.com/photo-1582896911227-c966f6e7fb93?w=500&h=500&fit=crop',
      bio: 'Expert in organizing engaging activities and events for senior citizens'
    },
    {
      name: 'Anita Patel',
      role: 'Wellness Expert',
      image: 'https://images.unsplash.com/photo-1598257006458-087169a1f08d?w=500&h=500&fit=crop',
      bio: 'Certified yoga instructor specializing in senior fitness and wellness'
    }
  ];

  const milestones = [
    { year: '2019', event: 'EzyElders founded with a vision to enrich senior lives' },
    { year: '2020', event: 'Launched online programs during pandemic' },
    { year: '2021', event: 'Reached 100+ active members' },
    { year: '2022', event: 'Expanded to 5 locations in Bangalore' },
    { year: '2023', event: 'Introduced technology training programs' },
    { year: '2024', event: 'Serving 500+ seniors monthly' }
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">About EzyElders</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              We believe that age is just a number, and life after 60 can be the most fulfilling chapter. 
              EzyElders is dedicated to creating a vibrant community where seniors thrive through meaningful 
              activities, wellness programs, and genuine connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision with Image */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
            <div className="relative h-[400px]">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=800&h=600&fit=crop"
                alt="Senior community gathering"
                fill
                className="rounded-2xl object-cover"
              />
            </div>
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="card bg-lavender/10"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h2>
                <p className="text-gray-700">
                  To enrich the lives of senior citizens by providing comprehensive wellness programs, 
                  fostering social connections, and creating opportunities for continuous learning and growth.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 }}
                className="card bg-sky/10"
              >
                <h2 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h2>
                <p className="text-gray-700">
                  To be the leading platform for senior engagement in India, where every elder has access 
                  to activities that promote physical health, mental wellness, and social fulfillment.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Our Story</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="text-gray-700 space-y-4">
                <p>
                  EzyElders was born from a simple observation: many seniors, despite having so much to offer, 
                  often feel isolated and disconnected from society. Our founder, Dr. Priya Sharma, witnessed 
                  this firsthand when her own parents struggled with loneliness after retirement.
                </p>
                <p>
                  What started as small gatherings in a community center has grown into a movement that touches 
                  hundreds of lives. We realized that seniors don't just need care – they need purpose, 
                  friendship, and opportunities to continue growing.
                </p>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop"
                  alt="Seniors enjoying activities"
                  fill
                  className="rounded-xl object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Core Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-lavender/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 text-dark-lavender">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Meet Our Team</h2>
            <p className="text-lg text-gray-600">Dedicated professionals committed to senior wellness</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="card text-center"
              >
                <div className="relative w-32 h-32 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="rounded-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{member.name}</h3>
                <p className="text-dark-lavender font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Journey</h2>
            <p className="text-lg text-gray-600">Key milestones in the EzyElders story</p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-4">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-4 p-4 bg-gray-50 rounded-lg"
                >
                  <div className="text-2xl font-bold text-dark-lavender">{milestone.year}</div>
                  <div className="text-gray-700">{milestone.event}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gradient-to-r from-dark-lavender to-purple-700 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">Why Choose EzyElders?</h2>
            <div className="grid md:grid-cols-2 gap-4 text-left">
              {[
                'Experienced team of geriatric care professionals',
                'Wide range of activities tailored for seniors',
                'Safe and welcoming environment',
                'Affordable membership plans',
                'Flexible schedules to suit your needs',
                'Regular health check-ups and wellness monitoring',
                'Transportation assistance available',
                'Family involvement encouraged'
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 