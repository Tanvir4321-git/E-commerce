'use client'

import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { toast } from 'react-toastify';
import Error from '@/app/error';

type Product = {
  id: number;
  title: string;
  price: number;
  image: string;
  category: string;
  description: string;
}

const ProductDetails = () => {
  const { id } = useParams();

  const [products, setProducts] = useState<Product>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data: Product = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [id]);

  // Loading Skeleton
  if (loading) return (
    <section className="bg-[#1a0a2e] min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 animate-pulse">
        <div className="bg-white/10 rounded-2xl h-96" />
        <div className="space-y-4 pt-4">
          <div className="h-3 bg-white/10 rounded-full w-1/4" />
          <div className="h-7 bg-white/10 rounded-full w-3/4" />
          <div className="h-3 bg-white/10 rounded-full w-full" />
          <div className="h-3 bg-white/10 rounded-full w-2/3" />
          <div className="h-3 bg-white/10 rounded-full w-full" />
          <div className="h-10 bg-white/10 rounded-full w-1/3 mt-6" />
        </div>
      </div>
    </section>
  );

if (!products) return <h1 className='text-2xl flex items-center min-h-screen justify-center'>Products not found</h1>; 

  return (
    <section className="bg-[#1a0a2e] min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-5xl mx-auto">

      

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Left - Image */}
          <div className="relative h-96 bg-white rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src={products?.image}
              alt={products?.title}
              fill
              className="object-contain p-8"
            />
            <span className="absolute top-4 left-4 bg-[#7c3aed]/90 text-white text-[10px] uppercase tracking-widest px-3 py-1 rounded-full">
              {products?.category}
            </span>
          </div>

          {/* Right - Info */}
          <div className="space-y-6">

            {/* Title */}
            <h1 className="text-3xl font-bold text-white leading-snug">
              {products?.title}
            </h1>

            {/* Price */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Price</p>
              <span className="text-4xl font-black text-[#c084fc]">${products?.price}</span>
            </div>

            {/* Description */}
            <div>
              <p className="text-white/40 text-xs uppercase tracking-widest mb-2">Description</p>
              <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                <p className="text-white/60 text-sm leading-relaxed">{products?.description}</p>
              </div>
            </div>

            {/* Action Button */}
            <button onClick={()=>toast('Successfully add to cart')} className="w-full bg-[#7c3aed] hover:bg-[#6d28d9] text-white font-semibold py-4 rounded-xl transition-colors duration-200 text-base">
              Add to Cart
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;