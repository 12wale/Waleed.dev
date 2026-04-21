'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Tracker() {
  const pathname = usePathname();

  useEffect(() => {
    const trackVisit = async () => {
      if (!pathname) return;
      
      try {
        const response = await fetch('/api/v-log', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ path: pathname }),
        });
        
        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.warn('Tracking API responded with error:', response.status, errorData);
        }
      } catch (error) {
        // Silently handle tracking errors so they don't crash the UI
        // This often happens due to AdBlockers blocking the tracking request
        if (error instanceof Error && error.name === 'AbortError') {
          console.log('Tracking request aborted');
        } else {
          console.error('Failed to track visit (likely blocked by browser):', error);
        }
      }
    };

    trackVisit();
  }, [pathname]);

  return null; // This component doesn't render anything
}
