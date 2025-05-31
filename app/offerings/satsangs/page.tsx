'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Sparkles, Music, BookOpen, Heart } from 'lucide-react';

export default function SatsangsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-100 via-violet-100 to-lavender py-12">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <Link href="/offerings" className="text-dark-lavender hover:underline mb-4 inline-block">
              ← Back to All Offerings
            </Link>
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Satsangs & Spirituality</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Nurture your spiritual well-being through daily satsangs, bhajans, and religious 
              discourses. Find peace, purpose, and community in our spiritual programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12 bg-white">
        <div className="section-padding">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
              Our Spiritual Programs
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {/* Daily Satsangs */}
              <div className="card">
                <Sparkles className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Daily Satsangs</h3>
                <p className="text-gray-600 mb-3">Morning prayers and spiritual discussions</p>
                <p className="text-sm text-purple-600">6:30 - 7:30 AM Daily</p>
              </div>

              {/* Bhajan Sessions */}
              <div className="card">
                <Music className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Bhajan Sessions</h3>
                <p className="text-gray-600 mb-3">Devotional singing in a group setting</p>
                <p className="text-sm text-purple-600">Tuesdays & Thursdays, 5-6 PM</p>
              </div>

              {/* Religious Discourses */}
              <div className="card">
                <BookOpen className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Religious Discourses</h3>
                <p className="text-gray-600 mb-3">Weekly talks by spiritual leaders</p>
                <p className="text-sm text-purple-600">Sundays, 10-11 AM</p>
              </div>

              {/* Festival Celebrations */}
              <div className="card">
                <Heart className="w-8 h-8 text-purple-500 mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Festival Celebrations</h3>
                <p className="text-gray-600 mb-3">Celebrate all major festivals together</p>
                <p className="text-sm text-purple-600">As per calendar</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-purple-500 to-violet-500 text-white">
        <div className="section-padding text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Spiritual Community</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Experience the peace and joy of spiritual fellowship. All are welcome!
          </p>
          <Link href="/contact">
            <button className="bg-white text-purple-500 px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Join Satsang
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
} 