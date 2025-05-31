import React from 'react';
import Link from 'next/link';
import { Facebook, Instagram, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Script from 'next/script';

const Footer: React.FC = () => {
  return (
    <>
      <footer className="bg-gray-900 text-white">
        <div className="section-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-lavender to-dark-lavender rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">EE</span>
                </div>
                <span className="text-xl font-bold">EzyElders</span>
              </div>
              <p className="text-gray-300 mb-4">
                Enriching the lives of senior citizens through meaningful activities, wellness programs, and community engagement.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://www.facebook.com/ezyelders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lavender transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/ezyelders"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-lavender transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-300 hover:text-lavender transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/offerings" className="text-gray-300 hover:text-lavender transition-colors">
                    Our Offerings
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-300 hover:text-lavender transition-colors">
                    Events & Workshops
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials" className="text-gray-300 hover:text-lavender transition-colors">
                    Testimonials
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-300 hover:text-lavender transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/join-us" className="text-gray-300 hover:text-lavender transition-colors">
                    Join Us / Volunteer
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 mt-1 text-lavender" />
                  <div>
                    <p className="text-gray-300">+91-73496 53339</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 mt-1 text-lavender" />
                  <div>
                    <p className="text-gray-300">info@ezyhelpers.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 mt-1 text-lavender" />
                  <div>
                    <p className="text-gray-300">
                      No 10, 5th B Cross, Sharadamba Nagar<br />
                      Jalahalli, Bangalore - 560013
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 mt-1 text-lavender" />
                  <div>
                    <p className="text-gray-300">
                      Mon - Fri: 9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Legal Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/privacy" className="text-gray-300 hover:text-lavender transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-300 hover:text-lavender transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="text-gray-300 hover:text-lavender transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-300 hover:text-lavender transition-colors">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} EzyElders. All rights reserved. | Part of EzyHelpers
            </p>
          </div>
        </div>
      </footer>

      {/* SEO Schema Scripts */}
      <Script
        id="organization-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "Organization",
            "name": "EzyElders",
            "url": "https://www.ezyhelpers.com/ezyelders",
            "logo": "https://www.ezyhelpers.com/images/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-73496 53339",
              "contactType": "Customer Service",
              "areaServed": "IN"
            },
            "sameAs": [
              "https://www.facebook.com/ezyelders",
              "https://www.instagram.com/ezyelders"
            ]
          })
        }}
      />
      <Script
        id="local-business-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "EzyElders",
            "image": "https://www.ezyhelpers.com/images/elderly.jpg",
            "telephone": "+91-73496 53339",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "No 10, 5th B Cross, Sharadamba Nagar",
              "addressLocality": "Jalahalli",
              "addressRegion": "Bangalore",
              "postalCode": "560013",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Fr 09:00-18:00",
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "13.0500",
              "longitude": "77.5500"
            }
          })
        }}
      />
    </>
  );
};

export default Footer; 