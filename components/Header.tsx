'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Sun, Moon, ChevronDown } from 'lucide-react';

interface HeaderProps {
  highContrast: boolean;
  toggleHighContrast: () => void;
}

const Header: React.FC<HeaderProps> = ({ highContrast, toggleHighContrast }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [offeringsDropdownOpen, setOfferingsDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    {
      name: 'Our Offerings',
      href: '/offerings',
      children: [
        { name: 'Health & Wellness', href: '/offerings/health-wellness' },
        { name: 'Technology Tutoring', href: '/offerings/technology' },
        { name: 'Leisure Outings', href: '/offerings/leisure-outings' },
        { name: 'Satsangs & Spirituality', href: '/offerings/satsangs' },
        { name: 'Custom Engagements', href: '/offerings/custom-engagements' },
      ],
    },
    { name: 'Events', href: '/events' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Testimonials', href: '/testimonials' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <nav className="px-4 py-3 md:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-lavender to-dark-lavender rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">EE</span>
            </div>
            <span className="text-xl font-bold text-gray-800">EzyElders</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-6">
            {navigation.map((item) => (
              <div key={item.name} className="relative">
                {item.children ? (
                  <div className="relative">
                    <button
                      className={`flex items-center space-x-1 text-base font-medium transition-colors hover:text-dark-lavender ${
                        isActive(item.href) ? 'text-dark-lavender' : 'text-gray-700'
                      }`}
                      onClick={() => setOfferingsDropdownOpen(!offeringsDropdownOpen)}
                    >
                      <span>{item.name}</span>
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    {offeringsDropdownOpen && (
                      <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-lavender hover:text-dark-lavender transition-colors"
                            onClick={() => setOfferingsDropdownOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className={`text-base font-medium transition-colors hover:text-dark-lavender ${
                      isActive(item.href) ? 'text-dark-lavender' : 'text-gray-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-3">
            {/* High Contrast Toggle */}
            <button
              onClick={toggleHighContrast}
              className="p-2 rounded-full hover:bg-lavender transition-colors"
              aria-label="Toggle high contrast mode"
            >
              {highContrast ? (
                <Sun className="w-5 h-5 text-gray-700" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            {/* Join Us Button - Desktop */}
            <Link href="/join-us" className="hidden lg:block">
              <button className="px-5 py-2 bg-dark-lavender text-white rounded-full font-medium text-base hover:bg-purple-700 transition-colors">Join Us</button>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md hover:bg-lavender transition-colors"
            >
              {mobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-700" />
              ) : (
                <Menu className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="space-y-2">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <>
                      <Link
                        href={item.href}
                        className={`block py-2 text-base font-medium ${
                          isActive(item.href) ? 'text-dark-lavender' : 'text-gray-700'
                        }`}
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                      <div className="ml-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className="block py-1 text-gray-600 hover:text-dark-lavender"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block py-2 text-base font-medium ${
                        isActive(item.href) ? 'text-dark-lavender' : 'text-gray-700'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <Link href="/join-us" onClick={() => setMobileMenuOpen(false)}>
                <button className="btn-primary w-full mt-4">Join Us</button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header; 