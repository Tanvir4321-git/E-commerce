import React from 'react';

const reviews = [
  {
    name: 'Rafi Ahmed',
    location: 'Dhaka, Bangladesh',
    rating: 5,
    comment: 'Amazing quality! The fabric is super comfortable and the delivery was really fast. Will definitely order again.',
    avatar: 'RA',
  },
  {
    name: 'Nadia Islam',
    location: 'Chittagong, Bangladesh',
    rating: 5,
    comment: 'Loved the collection! The dress fit perfectly and looked exactly like the picture. Great service overall.',
    avatar: 'NI',
  },
  {
    name: 'Sabbir Hossain',
    location: 'Sylhet, Bangladesh',
    rating: 4,
    comment: 'Very good quality products at an affordable price. The return process was also smooth. Highly recommended!',
    avatar: 'SH',
  },
  {
    name: 'Mitu Akter',
    location: 'Rajshahi, Bangladesh',
    rating: 5,
    comment: 'I ordered a shirt for my husband and he absolutely loved it. The stitching and material quality is top notch.',
    avatar: 'MA',
  },
];

const Testimonials = () => {
  return (
    <section className="bg-[#1a0a2e] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#c084fc] font-medium tracking-widest uppercase text-sm mb-3">
            Happy Customers
          </p>
          <h2 className="text-4xl lg:text-5xl font-bold text-white">
            What They <span className="text-[#c084fc]">Say</span>
          </h2>
          <p className="text-white/50 mt-4 text-base max-w-md mx-auto">
            Real reviews from real customers who love our products.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-[#c084fc]/50 transition-all duration-300 flex flex-col gap-4"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, s) => (
                  <span key={s} className="text-[#c084fc] text-sm">★</span>
                ))}
                {Array.from({ length: 5 - review.rating }).map((_, s) => (
                  <span key={s} className="text-white/20 text-sm">★</span>
                ))}
              </div>

              {/* Comment */}
              <p className="text-white/60 text-sm leading-relaxed flex-1">
                {review.comment}
              </p>

              {/* Reviewer */}
              <div className="flex items-center gap-3 pt-2 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-[#7c3aed] flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {review.avatar}
                </div>
                <div>
                  <p className="text-white text-sm font-semibold">{review.name}</p>
                  <p className="text-white/30 text-xs">{review.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;