'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Users, Camera, Bus, Calendar, CheckCircle } from 'lucide-react';

export default function LeisureOutingsPage() {
  const outings = [
    {
      title: 'Temple Visits',
      description: 'Spiritual journeys to famous temples with group prayers',
      frequency: 'Every Sunday',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop',
      features: ['Transportation included', 'Group prayers', 'Breakfast/lunch', 'Wheelchair accessible']
    },
    {
      title: 'Park & Garden Visits',
      description: 'Relaxing mornings in beautiful gardens and parks',
      frequency: 'Twice a week',
      image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=600&h=400&fit=crop',
      features: ['Morning walks', 'Bird watching', 'Group exercises', 'Tea & snacks']
    },
    {
      title: 'Cultural Events',
      description: 'Enjoy music concerts, dance performances, and theater',
      frequency: 'Monthly',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop',
      features: ['Reserved seating', 'Group discounts', 'Transportation', 'Refreshments']
    },
    {
      title: 'Shopping Trips',
      description: 'Organized visits to markets and shopping centers',
      frequency: 'Bi-weekly',
      image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=600&h=400&fit=crop',
      features: ['Assistance provided', 'Rest areas', 'Meal breaks', 'Help with carrying']
    }
  ];

  const upcomingTrips = [
    {
      destination: 'Nandi Hills Temple',
      date: 'Jan 25, 2024',
      spots: 15,
      price: '₹500'
    },
    {
      destination: 'Lalbagh Botanical Garden',
      date: 'Jan 28, 2024',
      spots: 20,
      price: '₹200'
    },
    {
      destination: 'Art of Living Ashram',
      date: 'Feb 2, 2024',
      spots: 25,
      price: '₹800'
    },
    {
      destination: 'Mysore Palace Day Trip',
      date: 'Feb 10, 2024',
      spots: 30,
      price: '₹1,200'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-100 via-emerald-100 to-sky py-12">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/offerings" className="text-dark-lavender hover:underline mb-4 inline-block">
              ← Back to All Offerings
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Leisure Outings</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Explore new places, create memories, and enjoy the company of friends on our 
              carefully planned outings. Every trip is designed with senior comfort and 
              enjoyment in mind.
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
                Adventure Awaits at Every Age
              </h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Our leisure outings are more than just trips – they're opportunities to 
                socialize, explore, and stay active. We handle all the planning so you 
                can focus on enjoying the experience.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: <Bus className="w-5 h-5" />, text: 'Comfortable Transport' },
                  { icon: <Users className="w-5 h-5" />, text: 'Expert Tour Guides' },
                  { icon: <Camera className="w-5 h-5" />, text: 'Photo Opportunities' },
                  { icon: <MapPin className="w-5 h-5" />, text: 'Curated Destinations' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="bg-green-100 p-2 rounded-lg text-green-600">
                      {item.icon}
                    </div>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative h-[400px]"
            >
              <Image
                src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop"
                alt="Seniors on outing"
                fill
                className="rounded-2xl object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types of Outings */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Types of Outings</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              From spiritual journeys to cultural experiences, we offer diverse outings 
              to match every interest
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {outings.map((outing, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={outing.image}
                    alt={outing.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{outing.title}</h3>
                <p className="text-gray-600 mb-3">{outing.description}</p>
                <p className="text-sm text-green-600 font-medium mb-4">{outing.frequency}</p>
                <div className="space-y-2">
                  {outing.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Trips */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              Upcoming Trips
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-lg shadow-lg">
                <thead className="bg-green-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">Destination</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">Date</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">Available Spots</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">Price</th>
                    <th className="px-6 py-4 text-left text-gray-700 font-semibold">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {upcomingTrips.map((trip, index) => (
                    <tr key={index} className="border-b hover:bg-gray-50">
                      <td className="px-6 py-4">{trip.destination}</td>
                      <td className="px-6 py-4">{trip.date}</td>
                      <td className="px-6 py-4">{trip.spots} spots</td>
                      <td className="px-6 py-4 font-semibold">{trip.price}</td>
                      <td className="px-6 py-4">
                        <button className="bg-green-500 text-white px-4 py-2 rounded-full text-sm hover:bg-green-600 transition-colors">
                          Book Now
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-green-500 to-emerald-500 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <MapPin className="w-12 h-12 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Join Us on Our Next Adventure</h2>
            <p className="text-lg mb-8">
              Don't miss out on the fun! Book your spot for our upcoming outings and 
              create unforgettable memories with friends.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/events">
                <button className="bg-white text-green-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
                  View All Trips
                </button>
              </Link>
              <Link href="/contact">
                <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-white hover:text-green-500 transition-all">
                  Contact Us
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 