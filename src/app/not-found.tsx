import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="bg-[#1a0a2e] min-h-screen flex items-center justify-center px-6">
      <div className="text-center space-y-5">
        <p className="text-8xl font-black text-[#c084fc]">404</p>
        <h2 className="text-3xl font-bold text-white">Page Not Found</h2>
        <p className="text-white/40 text-sm max-w-sm mx-auto">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-block bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-8 py-3 rounded-full font-semibold transition-colors duration-200 mt-2"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}