'use client'
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const Ourproducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products?limit=8");
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="bg-[#1a0a2e] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="text-center mb-14">
          <p className="text-[#c084fc] font-medium tracking-widest uppercase text-sm mb-3">
            What We Offer
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Our <span className="text-[#c084fc]">Products</span>
          </h2>
          <p className="text-white/50 mt-4 text-base max-w-md mx-auto">
            Handpicked styles for every taste — explore our full range of clothing and accessories.
          </p>
        </div>

        {/* Loading Skeleton */}
        {loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="bg-white/5 rounded-2xl overflow-hidden animate-pulse">
                <div className="h-56 bg-white/10" />
                <div className="p-4 space-y-3">
                  <div className="h-3 bg-white/10 rounded-full w-3/4" />
                  <div className="h-3 bg-white/10 rounded-full w-1/2" />
                  <div className="h-3 bg-white/10 rounded-full w-full" />
                  <div className="h-8 bg-white/10 rounded-full mt-4" />
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Products Grid */}
        {!loading && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#c084fc]/50 transition-all duration-300 group flex flex-col"
              >
                {/* Image */}
                <div className="relative h-56 bg-white flex items-center justify-center">
                  <Image
                    src={product.image}
                    alt={product.title}
                    fill
                    className="object-contain p-4"
                  />
                  <span className="absolute top-3 left-3 bg-[#7c3aed]/90 text-white text-[10px] uppercase tracking-widest px-2 py-1 rounded-full">
                    {product.category}
                  </span>
                </div>

                {/* Info */}
                <div className="p-4 flex flex-col flex-1 gap-3">
                  {/* Title */}
                  <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[#c084fc] transition-colors duration-200">
                    {product.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
                    {product.description}
                  </p>

                  {/* Price + Button */}
                  <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
                    <span className="text-[#c084fc] font-bold text-lg">
                      ${product.price}
                    </span>
                    <Link
                      href={`/products/${product.id}`}
                      className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs px-4 py-2 rounded-full transition-colors duration-200 font-medium"
                    >
                      Details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Ourproducts;