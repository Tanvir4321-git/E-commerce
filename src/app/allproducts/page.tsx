import Allproducts from "@/Component/Allproducts/AllProducts";





const AllProducts = () => {


  return (
    <section className="bg-[#1a0a2e] min-h-screen py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c084fc] font-medium tracking-widest uppercase text-sm mb-3">
            Full Collection
          </p>
          <h1 className="text-4xl lg:text-5xl font-bold text-white">
            All <span className="text-[#c084fc]">Products</span>
          </h1>
          <p className="text-white/50 mt-4 text-base max-w-md mx-auto">
            Browse our complete collection — find the perfect style for every occasion.
          </p>
        </div>


        <Allproducts></Allproducts>



      </div>
    </section>
  );
};

export default AllProducts;