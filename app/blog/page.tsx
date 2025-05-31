'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, ChevronRight, User, Search, Tag } from 'lucide-react';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Posts' },
    { id: 'health', name: 'Health & Wellness' },
    { id: 'activities', name: 'Activities' },
    { id: 'technology', name: 'Technology' },
    { id: 'community', name: 'Community' },
    { id: 'tips', name: 'Tips & Advice' }
  ];

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: '10 Yoga Poses Perfect for Seniors',
      excerpt: 'Discover gentle yoga poses that improve flexibility, balance, and overall well-being for seniors.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=600&fit=crop',
      author: 'Dr. Anjali Sharma',
      date: '2024-01-20',
      readTime: '5 min read',
      category: 'health',
      tags: ['yoga', 'wellness', 'exercise']
    },
    {
      id: 2,
      title: 'Staying Connected: Video Calling Made Easy',
      excerpt: 'Learn how to use WhatsApp and other video calling apps to stay in touch with family.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=800&h=600&fit=crop',
      author: 'Ravi Kumar',
      date: '2024-01-18',
      readTime: '7 min read',
      category: 'technology',
      tags: ['technology', 'communication', 'family']
    },
    {
      id: 3,
      title: 'The Benefits of Social Activities for Seniors',
      excerpt: 'Why staying socially active is crucial for mental health and happiness in golden years.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=800&h=600&fit=crop',
      author: 'Priya Patel',
      date: '2024-01-15',
      readTime: '6 min read',
      category: 'community',
      tags: ['social', 'mental health', 'activities']
    },
    {
      id: 4,
      title: 'Healthy Indian Recipes for Senior Citizens',
      excerpt: 'Nutritious and easy-to-digest traditional Indian recipes perfect for elderly dietary needs.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=800&h=600&fit=crop',
      author: 'Chef Meera Reddy',
      date: '2024-01-12',
      readTime: '8 min read',
      category: 'health',
      tags: ['nutrition', 'recipes', 'health']
    },
    {
      id: 5,
      title: 'Memory Games and Brain Exercises',
      excerpt: 'Fun activities to keep your mind sharp and improve cognitive function.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop',
      author: 'Dr. Suresh Nair',
      date: '2024-01-10',
      readTime: '4 min read',
      category: 'activities',
      tags: ['brain health', 'games', 'memory']
    },
    {
      id: 6,
      title: 'Managing Diabetes: A Senior\'s Guide',
      excerpt: 'Practical tips for managing diabetes through diet, exercise, and lifestyle changes.',
      content: 'Full article content...',
      image: 'https://images.unsplash.com/photo-1550831107-1553da8c8464?w=800&h=600&fit=crop',
      author: 'Dr. Rajesh Gupta',
      date: '2024-01-08',
      readTime: '10 min read',
      category: 'health',
      tags: ['diabetes', 'health', 'lifestyle']
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Blog & Resources</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Helpful articles, tips, and stories to enrich your golden years. 
              Stay informed about health, wellness, and community activities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white sticky top-[73px] z-30 shadow-md">
        <div className="section-padding">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative w-full lg:w-96">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-dark-lavender"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    selectedCategory === category.id
                      ? 'bg-dark-lavender text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No articles found matching your search.</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="card hover:shadow-2xl transition-all group"
                >
                  <div className="relative h-48 mb-4 -m-4 mb-4">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover rounded-t-xl group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-dark-lavender text-white px-3 py-1 rounded-full text-sm font-medium">
                        {categories.find(cat => cat.id === post.category)?.name}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-dark-lavender transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      <span>{post.author}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-IN', { 
                        month: 'short', 
                        day: 'numeric', 
                        year: 'numeric' 
                      })}</span>
                    </div>
                    <Link href={`/blog/${post.id}`}>
                      <span className="text-dark-lavender font-medium flex items-center gap-1 hover:gap-2 transition-all">
                        Read More <ChevronRight className="w-4 h-4" />
                      </span>
                    </Link>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mt-4 pt-4 border-t">
                    {post.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded-full"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </div>
          )}

          {/* Load More Button */}
          {filteredPosts.length > 0 && (
            <div className="text-center mt-12">
              <button className="btn-secondary">
                Load More Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-12 bg-gradient-to-r from-dark-lavender to-purple-700 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="text-lg mb-8">
              Subscribe to our newsletter for the latest articles, health tips, and community updates
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none"
              />
              <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 