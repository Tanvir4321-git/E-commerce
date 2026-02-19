'use client';

import Link from 'next/link';

export default function Banner() {
    return (
        <section className="min-h-[90vh] border-b-2 border-gray-600  relative overflow-hidden bg-[#1a0a2e]">

            {/* Background clothing images grid */}
            <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-2 p-2 opacity-40">
                {[
                    { emoji: '👔', label: 'Shirt' },
                    { emoji: '👗', label: 'Dress' },
                    { emoji: '👕', label: 'T-Shirt' },
                    { emoji: '🧥', label: 'Jacket' },
                    { emoji: '👖', label: 'Pants' },
                    { emoji: '🩱', label: 'Top' },
                    { emoji: '🧣', label: 'Scarf' },
                    { emoji: '👘', label: 'Robe' },
                ].map((item, i) => (
                    <div
                        key={i}
                        className="bg-white/5 rounded-2xl flex flex-col items-center justify-center gap-2 border border-white/10"
                    >
                        <span className="text-6xl lg:text-8xl">{item.emoji}</span>
                        <span className="text-white/30 text-xs uppercase tracking-widest">{item.label}</span>
                    </div>
                ))}
            </div>

            {/* Dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#1a0a2e]/95 via-[#1a0a2e]/70 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a0a2e]/80 via-transparent to-[#1a0a2e]/40" />

            {/* Content */}
            <div className="relative z-10 mt-[200px] max-w-7xl mx-auto px-6 lg:px-12 w-full">
                <div className="space-y-6">



                    <h1 className="text-5xl text-center lg:text-7xl font-bold text-white leading-tight">
                        Style That
                        <span className="text-[#c084fc]">Speaks</span>
                        For You
                    </h1>

                    <p className="text-white/60 text-lg text-center leading-relaxed">
                        From casual tees to formal shirts — discover premium clothing for every occasion at the best prices.
                        Crafted with comfort, quality, and timeless style to elevate your everyday wardrobe.
                    </p>



                </div>

            </div>

            {/* Bottom center View Collection button */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
                <Link
                    href="/booking"
                    className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-10 py-3 rounded-full font-semibold hover:bg-white/20 transition-all duration-200 text-sm tracking-wide"
                >
                    ↓ View Full Collection
                    
                </Link>
                
            </div>

        </section>
    );
}