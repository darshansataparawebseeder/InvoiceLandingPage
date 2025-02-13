import React, { useState } from "react";
import {
  FaAngleDown,
  FaAngleUp,
  FaChevronDown,
  FaChevronUp,
} from "react-icons/fa";
import star from "../images/star.png";
const faqData = [
  {
    question:
      "What is Neuros and how does it differ from other analytics platforms?",
    answer:
      "Neuros is an AI-powered business analytics platform designed to provide real-time insights, predictive analytics, and seamless integrations with various tools. Unlike traditional analytics platforms, Neuros harnesses the power of artificial intelligence to offer more accurate forecasts, customizable dashboards, and a user-friendly interface tailored for businesses of all sizes.",
  },
  {
    question: "How does the AI-driven predictive analytics feature work?",
    answer:
      "Our AI-driven analytics utilize machine learning models to analyze patterns and trends in your data, providing accurate forecasts and actionable insights to optimize business performance.",
  },
  {
    question: "Is my data secure with Neuros?",
    answer:
      "Yes, Neuros prioritizes data security with industry-standard encryption, regular audits, and compliance with GDPR and other data protection regulations.",
  },
  {
    question:
      "Can I integrate Neuros with other tools and platforms I currently use?",
    answer:
      "Absolutely! Neuros supports seamless integration with various third-party applications such as CRM, ERP, and cloud storage services.",
  },
  {
    question:
      "How is the pricing structured for Neuros? Are there any hidden fees?",
    answer:
      "Neuros offers flexible pricing plans with transparent costs. There are no hidden fees, and you can choose a plan that best suits your business needs.",
  },
  {
    question:
      "I'm new to business analytics. Does Neuros offer any support or tutorials?",
    answer:
      "Yes, we provide comprehensive documentation, video tutorials, and 24/7 customer support to help you make the most of Neuros.",
  },
];

const Section5 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 md:flex md:space-x-10">
      {/* Left Side */}
      <div className="md:w-1/3 text-left">
        <span className="inline-flex items-center bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm font-medium">
          <img src={star} className="h-[2vh] mr-2" alt="star" />
          FAQ
        </span>
        {/* <span className="bg-blue-100 text-blue-600 text-sm px-3 py-1 rounded-full font-semibold">
          FAQ
        </span> */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-500 mt-3">
          Explore our frequently asked questions to learn more about Neuros’s
          features, security, integration capabilities, and more.
        </p>
      </div>

      {/* Right Side */}
      <div className="md:w-2/3">
        {faqData.map((faq, index) => (
          <div
            key={index}
            className="border-b border-gray-200 py-4 cursor-pointer"
          >
            <div
              className="flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex items-center">
                <span className="w-1.5 h-6 bg-blue-500 mr-3 rounded-md"></span>
                <h3
                  className={`text-lg font-semibold text-left ${
                    openIndex === index ? "text-blue-600" : "text-gray-900"
                  }`}
                >
                  {faq.question}
                </h3>
              </div>
              {openIndex === index ? (
                <FaAngleUp className="text-blue-600" />
              ) : (
                <FaAngleDown className="text-gray-500" />
              )}
            </div>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section5;
