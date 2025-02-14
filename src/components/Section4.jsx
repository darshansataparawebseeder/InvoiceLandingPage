import React from "react";
import avatar from "../images/s4Avatar.png";

const testimonials = [
  {
    id: 1,
    name: "Nathan D. Hall",
    role: "Project Lead",
    feedback:
      "Project management is smoother with Webseeder. Its dashboards provide a clear view of progress and areas of improvement.",
    avatar: avatar,
  },
  {
    id: 2,
    name: "Naomi K. Johnson",
    role: "Product Manager",
    feedback:
      "Webseeder real-time data has been crucial in refining our products. Its collaborative features ensure our team is always aligned.",
    avatar: avatar,
  },
  {
    id: 3,
    name: "Michael O. Lopez",
    role: "Operations Director",
    feedback:
      "Real-time data processing with Webseeder has changed how we make decisions. It's a must-have tool for modern businesses.",
    avatar: avatar,
  },
  {
    id: 4,
    name: "Sophia R. Carter",
    role: "CEO",
    feedback:
      "The insights from Webseeder have transformed our business strategy. It's an essential tool for any data-driven organization.",
    avatar: avatar,
  },
  {
    id: 5,
    name: "Sophia R. Parker",
    role: "Management",
    feedback:
      "The insights from Webseeder have transformed our business strategy. It's an essential tool for any data-driven organization.",
    avatar: avatar,
  },
  {
    id: 6,
    name: "Jenee R. Carter",
    role: "Management",
    feedback:
      "The insights from Webseeder have transformed our business strategy. It's an essential tool for any data-driven organization.",
    avatar: avatar,
  },
];

const Section4 = () => {
  return (
    <section className="py-12 px-0 text-center">
      <div className="mb-10">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          The Webseeder Experience
        </h2>
        <p className="text-gray-500 mt-3 max-w-3xl mx-auto">
          At Webseeder, we pride ourselves on delivering top-notch AI-driven
          business analytics. But don’t just take our word for it. Hear what our
          satisfied users have to say.
        </p>
      </div>

      <div
        className="flex overflow-x-auto w-full space-x-6 scrollbar-hide px-0"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex space-x-6 w-full">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-300 rounded-2xl p-6 sm:p-4 w-[70%]  md:w-[45%] lg:w-[30%] xl:w-[20vw] h-auto flex-shrink-0 text-center shadow-sm"
            >
              <div className="w-full h-auto">
                <p className="text-gray-800 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
                  {testimonial.feedback}
                </p>
              </div>
              <div className="flex flex-col items-center w-full">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full mb-3"
                />
                <h3 className="font-semibold text-lg sm:text-xl text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm sm:text-base">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
