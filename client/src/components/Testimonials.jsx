import React from 'react';

const testimonials = [
  {
    _id: 1,
    name: "Emma Rodriguez",
    address: "Barcelona, Spain",
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200",
    rating: 4,
    review:
      "I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides. Their curated selection of hotels is unmatched.",
  },
  {
    _id: 2,
    name: "Liam Johnson",
    address: "New York, USA",
    image: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    rating: 5,
    review:
      "QuickStay exceeded my expectations. The booking process was seamless, and the hotels were absolutely top-notch. Highly recommended!",
  },
  {
    _id: 3,
    name: "Sophia Lee",
    address: "Seoul, South Korea",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200",
    rating: 4,
    review:
      "Amazing service! I always find the best luxury accommodations through QuickStay. Their recommendations never disappoint!",
  },
];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 bg-slate-50 min-h-screen">
      <h2 className="text-3xl font-bold mt-10">What Our Guests Say</h2>
      <p className="text-gray-600 text-center max-w-xl mt-2 mb-10">
        Discover the experiences of travelers who have stayed with us. Their stories reflect our commitment to comfort, hospitality, and memorable stays.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial._id}
            className="bg-white p-8 rounded-2xl shadow-md w-full"
          >
            <div className="flex items-center gap-3">
              <img
                className="w-12 h-12 rounded-full"
                src={testimonial.image}
                alt={testimonial.name}
              />
              <div>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-gray-500 text-sm">{testimonial.address}</p>
              </div>
            </div>
            <div className="flex gap-1 mt-3 text-yellow-400">
              {Array.from({ length: testimonial.rating }).map((_, i) => (
                <span key={i}>★</span>
              ))}
            </div>
            <p className="text-gray-700 mt-4">{testimonial.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
