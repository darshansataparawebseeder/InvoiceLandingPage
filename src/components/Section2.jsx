import React from "react";
import star from "../images/star.png";
import section2Table from "../images/Section2Table.png";
import card3 from "../images/card3.png";
import card2 from "../images/card2.png";
import card1 from "../images/card1.png";
const features = [
  {
    id: 1,
    title: "Click Invoice Sent",
    image: card1,
    description:
      "All the essential elements of an invoice are prepped just for you: customer details, products and prices, tax rates, etc.",
  },
  {
    id: 2,
    title: "Your invoices in your pocket",
    image: card2,
    description:
      "Use the mobile app to issue invoices to your customers, update payment status, or even create batch payments for your vendor bills!",
  },
  {
    id: 3,
    title: "Get paid in a flash",
    image: card3,
    description:
      "Online payments. Redirect your clients to a flawless customer portal, and let them pay with their preferred online payment method.",
  },
];

const Section2 = () => {
  return (
    <section className="py-12 px-4 md:px-10 lg:px-20">
      {/* Section Heading */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center bg-gray-100 text-gray-600 px-4 py-1 rounded-full text-sm font-medium">
          <img src={star} className="h-[2vh] mr-2" alt="star" />
          Hey accountants, check out our Accounting app!
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Stop chasing, Start earning
        </h2>
        <p className="text-gray-600 mt-2">
          Track your open payments with clear statuses and due dates. Set
          reminders for entries that need follow-up.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-md p-6 rounded-xl border border-gray-200 hover:shadow-lg transition"
          >
            <div className="flex items-center">
              <img src={feature.image} className="h-[3vh] mr-2" alt="star" />
              <h3 className="font-semibold text-lg">{feature.title}</h3>
            </div>
            <p className="text-gray-500 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Table Image */}
      <div className="mt-10 ">
        <img
          src={section2Table}
          alt="Invoices Table"
          className="w-[500vw]  rounded-xl shadow-md"
        />
      </div>
    </section>
  );
};

export default Section2;
