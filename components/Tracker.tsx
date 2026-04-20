'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        await fetch('/api/v-log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path: pathname }),
        });
      } catch (error) {
        console.error('Failed to track visit:', error);
      }
    };

    trackVisit();
  }, [pathname]);

  return null; // This component doesn't render anything
}
