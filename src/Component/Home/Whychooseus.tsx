import React from 'react';

const features = [
  {
    icon: '🚚',
    title: 'Free Delivery',
    desc: 'Free shipping on all orders above ৳999. Fast and reliable delivery to your doorstep.',
  },
  {
    icon: '↩️',
    title: 'Easy Returns',
    desc: '7-day hassle-free return policy. Not happy? We will make it right.',
  },
  {
    icon: '🏆',
    title: 'Premium Quality',
    desc: 'Every piece is carefully crafted using high-quality fabrics that last.',
  },
  {
    icon: '🔒',
    title: 'Secure Payment',
    desc: '100% secure checkout. Your payment info is always safe with us.',
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-[#12061f] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c084fc] font-medium tracking-widest uppercase text-sm mb-3">
            Our Promise
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            Why Choose <span className="text-[#c084fc]">Us</span>
          </h2>
          <p className="text-white/50 mt-4 text-base max-w-md mx-auto">
            We are committed to giving you the best shopping experience every single time.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#c084fc]/50 hover:bg-white/8 transition-all duration-300 text-center group"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-[#c084fc] transition-colors duration-200">
                {feature.title}
              </h3>
              <p className="text-white/40 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;