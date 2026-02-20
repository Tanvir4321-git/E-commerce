'use client';
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


const Allproducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const categories = ["all", ...new Set(products.map(p => p.category))];

  let filteredProducts = products;

  // Category filter
  if (selectedCategory !== "all") {
    filteredProducts = filteredProducts.filter(
      (p) => p.category === selectedCategory
    );
  }

  // Price filter
  filteredProducts = filteredProducts.filter(
    (p) => p.price >= minPrice && p.price <= maxPrice
  );

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await res.json();
        setProducts(data);
      } catch (err) {
        console.log(err)
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);




  return (
    <div>
      <div className='flex md:flex-row flex-col  gap-10'>
        <div className=" h-[500px] text-white w-full  md:w-[20%]">
          <span className=" text-2xl">Filter</span>

         <div className="flex flex-col gap-4  mt-5 mb-6">

  {/* Category */}
  <h3>Category</h3>
  <select
    value={selectedCategory}
    onChange={(e) => setSelectedCategory(e.target.value)}
    className="px-3 py-2 rounded bg-black text-white border border-white/20"
  >
    {categories.map((cat) => (
      <option key={cat} value={cat}>
        {cat}
      </option>
    ))}
  </select>

<h3>Price</h3>
  {/* Min Price */}
  <input
    type="number"
    placeholder="Min Price"
    value={minPrice}
    onChange={(e) => setMinPrice(Number(e.target.value))}
    className="px-3 py-2 rounded bg-black text-white border border-white/20"
  />

  {/* Max Price */}
  <input
    type="number"
    placeholder="Max Price"
    value={maxPrice}
    onChange={(e) => setMaxPrice(Number(e.target.value))}
    className="px-3 py-2 rounded bg-black text-white border border-white/20"
  />
</div>

        </div>
        <div className='md:w-[80%] w-full'>
          {/* Loading Skeleton */}
          {loading && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {Array.from({ length: 12 }).map((_, i) => (
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
            <>
              <p className="text-white/30 text-sm mb-6">{filteredProducts.length} products found</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden hover:border-[#c084fc]/50 transition-all duration-300 group flex flex-col"
                  >
                    <div className="relative h-56 bg-white">
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
                    <div className="p-4 flex flex-col flex-1 gap-3">
                      <h3 className="text-white text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[#c084fc] transition-colors duration-200">
                        {product.title}
                      </h3>
                      <p className="text-white/40 text-xs leading-relaxed line-clamp-2">
                        {product.description}
                      </p>
                      <div className="flex items-center justify-between mt-auto pt-2 border-t border-white/10">
                        <span className="text-[#c084fc] font-bold text-lg">
                          ${product.price}
                        </span>
                        <Link
                          href={`/allproducts/${product.id}`}
                          className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white text-xs px-4 py-2 rounded-full transition-colors duration-200 font-medium"
                        >
                          Details
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

    </div>
  );
};

export default Allproducts;



