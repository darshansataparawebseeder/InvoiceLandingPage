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
    <section className="py-12 px-6 md:px-12 lg:px-20 text-center">
      {/* Header Section */}
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

      {/* Scrollable Cards Section */}
      <div
        className="flex overflow-x-auto w-[110%] -ml-18"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flex space-x-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white border border-gray-300 rounded-2xl p-8 w-[20vw] h-[60vh] flex-shrink-0 text-center shadow-sm"
            >
              <div className=" w-full h-[60%]">
                <p className="  text-gray-800 text-lg leading-relaxed mb-6">
                  {testimonial.feedback}
                </p>
              </div>
              <div className="flex flex-col items-center w-full h-[20%]">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full mb-3"
                />
                <h3 className="font-semibold text-lg text-gray-900">
                  {testimonial.name}
                </h3>
                <p className="text-gray-500 text-sm">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section4;
