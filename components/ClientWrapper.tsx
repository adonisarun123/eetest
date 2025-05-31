'use client';

import { useState, useEffect } from 'react';
import Header from '@/components/Header';
import WhatsAppButton from '@/components/WhatsAppButton';

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  const [highContrast, setHighContrast] = useState(false);

  const toggleHighContrast = () => {
    setHighContrast(!highContrast);
  };

  useEffect(() => {
    if (highContrast) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  }, [highContrast]);

  return (
    <>
      <Header highContrast={highContrast} toggleHighContrast={toggleHighContrast} />
      <main className="flex-grow">
        {children}
      </main>
      <WhatsAppButton />
    </>
  );
} 