'use client';

import { useEffect } from 'react';

import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service if needed
    console.error('Client-side exception:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#060e20] px-4 font-orbitron">
      <div className="max-w-md w-full glass p-8 rounded-2xl border border-error/20 text-center space-y-6">
        <div className="w-20 h-20 bg-error/10 rounded-full flex items-center justify-center mx-auto mb-4 border border-error/30">
          <span className="material-symbols-outlined text-error text-4xl">warning</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white">Oops! Something went wrong.</h2>
        <p className="text-on-surface-variant text-sm md:text-base leading-relaxed">
          A client-side exception has occurred. We&apos;ve logged the error and are looking into it.
        </p>
        <div className="pt-4 flex flex-col gap-3">
          <button
            onClick={() => reset()}
            className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl text-black font-extrabold hover:scale-[1.02] active:scale-95 transition-all shadow-[0_0_30px_rgba(189,157,255,0.3)] uppercase tracking-widest text-sm"
          >
            Try again
          </button>
          <Link
            href="/"
            className="w-full py-4 border border-outline-variant/30 rounded-xl text-white font-bold hover:bg-surface-variant transition-all text-sm uppercase tracking-widest"
          >
            Go to Home
          </Link>
        </div>
        {error.digest && (
          <p className="text-[10px] text-outline font-mono mt-4">
            Error ID: {error.digest}
          </p>
        )}
      </div>
    </div>
  );
}
