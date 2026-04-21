'use client';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en" className="dark">
      <body className="bg-[#060e20] text-white min-h-screen flex items-center justify-center font-sans">
        <div className="max-w-md w-full p-8 text-center space-y-6">
          <h2 className="text-3xl font-bold">Critical Application Error</h2>
          <p className="text-gray-400">
            A fatal error occurred in the application root. Please try refreshing the page.
          </p>
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition-colors"
          >
            Refresh Application
          </button>
        </div>
      </body>
    </html>
  );
}
