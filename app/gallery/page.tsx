'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Filter, Grid, Columns, Heart } from 'lucide-react';
import Image from 'next/image';

interface GalleryItem {
  id: number;
  type: 'image' | 'video';
  src: string;
  thumbnail?: string;
  title: string;
  category: string;
  date: string;
  description: string;
  likes: number;
}

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [viewMode, setViewMode] = useState<'grid' | 'masonry'>('grid');
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  const categories = [
    { id: 'all', name: 'All' },
    { id: 'events', name: 'Events' },
    { id: 'activities', name: 'Activities' },
    { id: 'wellness', name: 'Wellness' },
    { id: 'social', name: 'Social' },
    { id: 'cultural', name: 'Cultural' }
  ];

  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?w=1200&h=800&fit=crop',
      title: 'Morning Yoga Session',
      category: 'wellness',
      date: '2024-01-15',
      description: 'Seniors enjoying their morning yoga session in the garden',
      likes: 45
    },
    {
      id: 2,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1508963493744-76fce69379c0?w=1200&h=800&fit=crop',
      title: 'Painting Workshop',
      category: 'activities',
      date: '2024-01-14',
      description: 'Creative expression through art therapy',
      likes: 32
    },
    {
      id: 3,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1522444432501-a2c4b2b14a5e?w=800&h=600&fit=crop',
      title: 'Cultural Dance Performance',
      category: 'cultural',
      date: '2024-01-13',
      description: 'Traditional dance performance by our talented members',
      likes: 67
    },
    {
      id: 4,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582593981935-a87a0644caec?w=1200&h=800&fit=crop',
      title: 'Community Lunch',
      category: 'social',
      date: '2024-01-12',
      description: 'Sharing meals and stories together',
      likes: 54
    },
    {
      id: 5,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1571844305468-fc772cd77429?w=1200&h=800&fit=crop',
      title: 'Technology Class',
      category: 'activities',
      date: '2024-01-11',
      description: 'Learning to use smartphones and tablets',
      likes: 38
    },
    {
      id: 6,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&h=800&fit=crop',
      title: 'Birthday Celebration',
      category: 'events',
      date: '2024-01-10',
      description: 'Celebrating birthdays of the month',
      likes: 72
    },
    {
      id: 7,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1517457373958-b7bdd4587205?w=1200&h=800&fit=crop',
      title: 'Garden Outing',
      category: 'social',
      date: '2024-01-09',
      description: 'A relaxing day at the botanical gardens',
      likes: 41
    },
    {
      id: 8,
      type: 'image',
      src: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=1200&h=800&fit=crop',
      title: 'Health Checkup Camp',
      category: 'wellness',
      date: '2024-01-08',
      description: 'Regular health monitoring for our members',
      likes: 29
    },
    {
      id: 9,
      type: 'video',
      src: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
      thumbnail: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=600&fit=crop',
      title: 'Satsang Session',
      category: 'cultural',
      date: '2024-01-07',
      description: 'Spiritual gathering with bhajans',
      likes: 63
    }
  ];

  const filteredItems = selectedCategory === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Gallery</h1>
            <p className="text-lg text-gray-700 leading-relaxed">
              Capturing precious moments and memories from our community activities. 
              Browse through photos and videos of our events, workshops, and gatherings.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter and View Options */}
      <section className="py-4 bg-white sticky top-[73px] z-30 shadow-md">
        <div className="section-padding">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Filter className="w-5 h-5 text-gray-600" />
                <h3 className="font-semibold text-gray-800">Filter:</h3>
              </div>
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

            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'grid' ? 'bg-dark-lavender text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Grid view"
              >
                <Grid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('masonry')}
                className={`p-2 rounded-lg transition-colors ${
                  viewMode === 'masonry' ? 'bg-dark-lavender text-white' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                aria-label="Masonry view"
              >
                <Columns className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 bg-gray-50">
        <div className="section-padding">
          <div className={`${
            viewMode === 'grid' 
              ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' 
              : 'columns-1 md:columns-2 lg:columns-3 gap-6'
          }`}>
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className={`${viewMode === 'masonry' ? 'mb-6 break-inside-avoid' : ''} group cursor-pointer`}
                onClick={() => setSelectedItem(item)}
              >
                <div className="relative overflow-hidden rounded-xl bg-white shadow-lg hover:shadow-2xl transition-all">
                  <div className={`relative ${viewMode === 'grid' ? 'h-64' : 'h-auto'}`}>
                    <Image
                      src={item.type === 'video' ? item.thumbnail! : item.src}
                      alt={item.title}
                      width={800}
                      height={viewMode === 'grid' ? 600 : undefined}
                      className={`${viewMode === 'grid' ? 'absolute inset-0 object-cover w-full h-full' : 'w-full'} image-zoom`}
                    />
                    
                    {item.type === 'video' && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                        <div className="bg-white/90 p-4 rounded-full">
                          <Play className="w-8 h-8 text-gray-800" />
                        </div>
                      </div>
                    )}

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-600">
                        {new Date(item.date).toLocaleDateString('en', { 
                          month: 'short', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-red-500" />
                        <span className="text-sm text-gray-600">{item.likes}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>

              {selectedItem.type === 'image' ? (
                <div className="relative">
                  <Image
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    width={1200}
                    height={800}
                    className="w-full rounded-lg"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 rounded-b-lg">
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedItem.title}</h3>
                    <p className="text-white/90">{selectedItem.description}</p>
                    <div className="flex items-center gap-4 mt-4">
                      <span className="text-white/70">
                        {new Date(selectedItem.date).toLocaleDateString('en', { 
                          weekday: 'long',
                          month: 'long', 
                          day: 'numeric', 
                          year: 'numeric' 
                        })}
                      </span>
                      <div className="flex items-center gap-2 text-white/70">
                        <Heart className="w-5 h-5" />
                        <span>{selectedItem.likes} likes</span>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="aspect-video">
                  <iframe
                    src={selectedItem.src}
                    title={selectedItem.title}
                    className="w-full h-full rounded-lg"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                  <div className="mt-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{selectedItem.title}</h3>
                    <p className="text-white/90">{selectedItem.description}</p>
                  </div>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-12 bg-gradient-to-r from-dark-lavender to-purple-700 text-white">
        <div className="section-padding">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">Be Part of Our Story</h2>
            <p className="text-lg mb-8">
              Join our community and create beautiful memories together
            </p>
            <button className="bg-white text-dark-lavender px-8 py-3 rounded-full font-semibold text-lg hover:bg-gray-100 transition-colors">
              Join EzyElders Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
} 