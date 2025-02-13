import React from "react";
import card2 from "../images/card2.png";
import s3card2 from "../images/card2.png";
import s3card3 from "../images/s3card3.png";
import s3card4 from "../images/s3card4.png";
import s3card5 from "../images/s3card5.png";
import s3card6 from "../images/s3card6.png";
const features = [
  {
    id: 1,
    title: "All the features done right.",
    description:
      "Set the frequency of invoicing for subscriptions of recurring services and products.",
    icon: card2, // Replace with actual icons if available
  },
  {
    id: 2,
    title: "Issue refunds",
    description: "Create credit notes and manage reimbursements....",
    icon: s3card2,
  },
  {
    id: 3,
    title: "Sales reports",
    description:
      "Get direct access to key information with dynamic and customisable dashboards.",
    icon: s3card3,
  },
  {
    id: 4,
    title: "Multiple currencies",
    description:
      "Issue invoices and receive payments in different currencies with an automatic update of the conversion rate...",
    icon: s3card4,
  },
  {
    id: 5,
    title: "Your invoice, your style",
    description: "Customize your invoices according to your branding....",
    icon: s3card5,
  },
  {
    id: 6,
    title: "Snail mail",
    description:
      "Automate the sending of invoices and payment follow-ups by post....",
    icon: s3card6,
  },
];

const Section3 = () => {
  return (
    <section className="py-12 px-6 md:px-12 lg:px-20 text-center">
      {/* Section Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
        All the features done right.
      </h2>

      {/* Feature Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
        {features.map((feature) => (
          <div
            key={feature.id}   
            className="bg-white shadow-md p-6 rounded-xl border border-gray-200 hover:shadow-lg transition flex flex-col items-center text-center"
          >
            <div className="flex items-center">
              <img src={feature.icon} className="h-[3vh] mr-2" alt="star" />
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* CTA Button */}
      <button className="mt-8 px-6 py-2 text-sm font-medium text-white bg-black rounded-full hover:bg-gray-800 transition">
        See all features
      </button>
    </section>
  );
};

export default Section3;
