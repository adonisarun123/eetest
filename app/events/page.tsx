'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, Users, Filter, ChevronLeft, ChevronRight, Tag } from 'lucide-react';
import Image from 'next/image';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  location: string;
  category: string;
  spots: number;
  spotsLeft: number;
  description: string;
  image: string;
}

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [currentWeek, setCurrentWeek] = useState(0);

  const categories = [
    { id: 'all', name: 'All Events', color: 'bg-gray-500' },
    { id: 'wellness', name: 'Health & Wellness', color: 'bg-red-500' },
    { id: 'technology', name: 'Technology', color: 'bg-blue-500' },
    { id: 'social', name: 'Social', color: 'bg-green-500' },
    { id: 'spiritual', name: 'Spiritual', color: 'bg-purple-500' },
    { id: 'cultural', name: 'Cultural', color: 'bg-yellow-500' }
  ];

  const events: Event[] = [
    {
      id: 1,
      title: 'Morning Yoga Session',
      date: '2024-01-20',
      time: '7:00 AM - 8:00 AM',
      location: 'Community Hall',
      category: 'wellness',
      spots: 20,
      spotsLeft: 5,
      description: 'Gentle yoga for flexibility and balance',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop'
    },
    {
      id: 2,
      title: 'Smartphone Basics Workshop',
      date: '2024-01-21',
      time: '10:00 AM - 12:00 PM',
      location: 'Tech Center',
      category: 'technology',
      spots: 15,
      spotsLeft: 8,
      description: 'Learn WhatsApp, video calling, and more',
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Temple Visit - Nandi Hills',
      date: '2024-01-22',
      time: '6:00 AM - 2:00 PM',
      location: 'Pickup: Community Center',
      category: 'spiritual',
      spots: 30,
      spotsLeft: 12,
      description: 'Spiritual journey with lunch included',
      image: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=600&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Classical Music Evening',
      date: '2024-01-23',
      time: '5:00 PM - 7:00 PM',
      location: 'Auditorium',
      category: 'cultural',
      spots: 50,
      spotsLeft: 20,
      description: 'Enjoy carnatic music performances',
      image: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop'
    },
    {
      id: 5,
      title: 'Health Check-up Camp',
      date: '2024-01-24',
      time: '9:00 AM - 1:00 PM',
      location: 'Health Center',
      category: 'wellness',
      spots: 40,
      spotsLeft: 15,
      description: 'Free health screening and consultation',
      image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=400&fit=crop'
    },
    {
      id: 6,
      title: 'Picnic at Lalbagh Gardens',
      date: '2024-01-25',
      time: '10:00 AM - 3:00 PM',
      location: 'Lalbagh Botanical Gardens',
      category: 'social',
      spots: 25,
      spotsLeft: 10,
      description: 'Fun outing with games and lunch',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=600&h=400&fit=crop'
    }
  ];

  const filteredEvents = selectedCategory === 'all' 
    ? events 
    : events.filter(event => event.category === selectedCategory);

  // Generate calendar days
  const generateCalendarDays = () => {
    const days = [];
    const startDate = new Date();
    startDate.setDate(startDate.getDate() + (currentWeek * 7));
    
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      days.push(date);
    }
    return days;
  };

  const calendarDays = generateCalendarDays();

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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Upcoming Events</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Join us for enriching activities, workshops, and social gatherings designed 
              to keep you active, engaged, and connected with the community.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Horizontal Calendar */}
      <section className="py-8 bg-white sticky top-[73px] z-40 shadow-md">
        <div className="section-padding">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-800">Event Calendar</h2>
            <div className="flex gap-2">
              <button
                onClick={() => setCurrentWeek(currentWeek - 1)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Previous week"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => setCurrentWeek(currentWeek + 1)}
                className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
                aria-label="Next week"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="overflow-x-auto pb-2">
            <div className="flex gap-4 min-w-max">
              {calendarDays.map((date, index) => {
                const dateStr = date.toISOString().split('T')[0];
                const hasEvents = events.some(event => event.date === dateStr);
                const isToday = new Date().toDateString() === date.toDateString();
                
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className={`flex flex-col items-center p-4 rounded-lg cursor-pointer transition-all ${
                      isToday ? 'bg-dark-lavender text-white' : 'bg-gray-100 hover:bg-lavender'
                    }`}
                  >
                    <span className="text-sm font-medium">
                      {date.toLocaleDateString('en', { weekday: 'short' })}
                    </span>
                    <span className="text-2xl font-bold my-1">
                      {date.getDate()}
                    </span>
                    <span className="text-xs">
                      {date.toLocaleDateString('en', { month: 'short' })}
                    </span>
                    {hasEvents && (
                      <div className={`w-2 h-2 rounded-full mt-2 ${
                        isToday ? 'bg-white' : 'bg-dark-lavender'
                      }`} />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="section-padding">
          <div className="flex items-center gap-2 mb-4">
            <Filter className="w-5 h-5 text-gray-600" />
            <h3 className="font-semibold text-gray-800">Filter by Category:</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category.id
                    ? `${category.color} text-white`
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all"
              >
                <div className="relative h-48 mb-4">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1 rounded-full text-white text-sm font-medium ${
                      categories.find(c => c.id === event.category)?.color
                    }`}>
                      {categories.find(c => c.id === event.category)?.name}
                    </span>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-gray-800 mb-3">{event.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">
                      {new Date(event.date).toLocaleDateString('en', { 
                        weekday: 'long', 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{event.time}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Users className="w-4 h-4" />
                    <span className="text-sm">{event.spotsLeft} spots left out of {event.spots}</span>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">{event.description}</p>

                <div className="flex gap-3">
                  <button className="btn-primary flex-1 text-base py-2">
                    Register Now
                  </button>
                  <button className="px-4 py-2 border border-gray-300 rounded-full text-gray-700 hover:bg-gray-50 transition-colors">
                    Learn More
                  </button>
                </div>

                {event.spotsLeft < 10 && (
                  <p className="text-red-600 text-sm font-medium mt-3 text-center">
                    Hurry! Limited spots available
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-12 bg-gradient-to-r from-dark-lavender to-purple-700 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Never Miss an Event</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter and get weekly updates about upcoming events and activities
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-4 focus:ring-white/30"
              />
              <button type="submit" className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 