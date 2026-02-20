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
    console.error(error);
  }, [error]);

  return (
    <section className="bg-[#1a0a2e] min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-5">
        <p className="text-6xl">😕</p>
        <h2 className="text-3xl font-bold text-white">Something went wrong!</h2>
        <p className="text-white/40 text-sm max-w-sm mx-auto">
          An unexpected error occurred. Please try again or go back to home.
        </p>
        <div className="flex items-center justify-center gap-4 pt-2">
          <button
            onClick={reset}
            className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-3 rounded-full font-semibold transition-colors duration-200"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors duration-200"
          >
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}