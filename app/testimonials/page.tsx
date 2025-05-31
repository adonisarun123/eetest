'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  age: number;
  location: string;
  image: string;
  rating: number;
  text: string;
  date: string;
  featured: boolean;
}

export default function TestimonialsPage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Kamala Devi',
      age: 72,
      location: 'Jayanagar, Bangalore',
      image: 'https://images.unsplash.com/photo-1566616213894-2d4e1baee5d8?w=400&h=400&fit=crop',
      rating: 5,
      text: 'EzyElders has transformed my life completely. After my husband passed away, I felt isolated and depressed. But joining this community gave me a new purpose. The yoga sessions keep me healthy, and I\'ve made wonderful friends who are like family now. The staff is incredibly caring and always goes the extra mile.',
      date: '2024-01-10',
      featured: true
    },
    {
      id: 2,
      name: 'Raman Nair',
      age: 68,
      location: 'Koramangala, Bangalore',
      image: 'https://images.unsplash.com/photo-1548142813-c348350df52b?w=400&h=400&fit=crop',
      rating: 5,
      text: 'Learning to use WhatsApp and video calling has been life-changing. Now I can talk to my grandchildren in the US every day! The technology classes are taught with so much patience. I never thought I\'d be able to use a smartphone at my age.',
      date: '2024-01-08',
      featured: true
    },
    {
      id: 3,
      name: 'Savitri Sharma',
      age: 75,
      location: 'Indiranagar, Bangalore',
      image: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The temple visits and satsangs fulfill my spiritual needs beautifully. I feel blessed to be part of this community. The bhajan sessions bring me so much peace. EzyElders understands what we seniors truly need.',
      date: '2024-01-05',
      featured: true
    },
    {
      id: 4,
      name: 'Gopinath Reddy',
      age: 70,
      location: 'Basavanagudi, Bangalore',
      image: 'https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The health check-up camps are excellent. They helped detect my diabetes early. The diet counseling and exercise programs have helped me manage it well. I\'m healthier now than I was 5 years ago!',
      date: '2023-12-28',
      featured: false
    },
    {
      id: 5,
      name: 'Lakshmi Menon',
      age: 69,
      location: 'JP Nagar, Bangalore',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The painting and craft workshops have awakened my creative side. I never knew I could paint! Now my grandchildren are so proud of my artwork. It\'s never too late to learn new skills.',
      date: '2023-12-25',
      featured: false
    },
    {
      id: 6,
      name: 'Venkatesh Iyer',
      age: 73,
      location: 'Malleshwaram, Bangalore',
      image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The outings to parks and museums are wonderful. It\'s great to explore the city with friends. The staff takes care of everything - from transportation to meals. We just enjoy!',
      date: '2023-12-20',
      featured: false
    },
    {
      id: 7,
      name: 'Padma Krishna',
      age: 71,
      location: 'Rajajinagar, Bangalore',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The birthday celebrations make us feel so special. EzyElders remembers every member\'s birthday. The cultural programs are entertaining and give us a platform to showcase our talents too.',
      date: '2023-12-18',
      featured: false
    },
    {
      id: 8,
      name: 'Ramesh Kulkarni',
      age: 74,
      location: 'BTM Layout, Bangalore',
      image: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?w=400&h=400&fit=crop',
      rating: 5,
      text: 'After retirement, I felt useless. But here, I teach mathematics to underprivileged children through EzyElders\' volunteer program. It gives me immense satisfaction to give back to society.',
      date: '2023-12-15',
      featured: false
    },
    {
      id: 9,
      name: 'Geetha Rao',
      age: 67,
      location: 'HSR Layout, Bangalore',
      image: 'https://images.unsplash.com/photo-1589571894960-20bbe2828d0a?w=400&h=400&fit=crop',
      rating: 5,
      text: 'The meditation sessions have helped me manage my anxiety and sleep better. The instructors are knowledgeable and caring. I\'ve found inner peace that I was searching for.',
      date: '2023-12-12',
      featured: false
    }
  ];

  const featuredTestimonials = testimonials.filter(t => t.featured);
  const regularTestimonials = testimonials.filter(t => !t.featured);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredTestimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredTestimonials.length) % featuredTestimonials.length);
  };

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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">What Our Members Say</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Real stories from real people whose lives have been enriched by EzyElders. 
              Their experiences inspire us to do better every day.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Testimonials Carousel */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Featured Stories</h2>
            <p className="text-gray-600">Heartwarming experiences from our community</p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="bg-gradient-to-br from-lavender/20 to-sky/20 rounded-2xl p-8 md:p-12"
              >
                <Quote className="w-12 h-12 text-dark-lavender/30 mb-6" />
                
                <div className="flex flex-col md:flex-row gap-8 items-center">
                  <div className="flex-shrink-0">
                    <div className="relative w-32 h-32 md:w-40 md:h-40">
                      <Image
                        src={featuredTestimonials[currentSlide].image}
                        alt={featuredTestimonials[currentSlide].name}
                        fill
                        className="rounded-full object-cover border-4 border-white shadow-lg"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <p className="text-lg text-gray-700 mb-6 italic leading-relaxed">
                      "{featuredTestimonials[currentSlide].text}"
                    </p>
                    
                    <div className="flex items-center justify-center md:justify-start gap-1 mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800">
                        {featuredTestimonials[currentSlide].name}, {featuredTestimonials[currentSlide].age} years
                      </h3>
                      <p className="text-gray-600">{featuredTestimonials[currentSlide].location}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-700" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-700" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-6">
              {featuredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide ? 'w-8 bg-dark-lavender' : 'bg-gray-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* All Testimonials Grid */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">More Happy Members</h2>
            <p className="text-gray-600">Every story matters to us</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {regularTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="card hover:shadow-2xl transition-all"
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
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.age} years, {testimonial.location}</p>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-sm leading-relaxed">"{testimonial.text}"</p>

                <p className="text-xs text-gray-500 mt-4">
                  {new Date(testimonial.date).toLocaleDateString('en', { 
                    month: 'long', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}
                </p>
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
            <h2 className="text-3xl font-bold mb-4">Share Your Story</h2>
            <p className="text-lg mb-8">
              Are you a member of EzyElders? We'd love to hear about your experience 
              and how our community has impacted your life.
            </p>
            <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Submit Your Testimonial
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 