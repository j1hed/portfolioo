"use client";
import React from "react";

// Luxury Pricing Card Component
const PricingCard = ({ title, price, duration, features, popular = false }) => {
  return (
    <div
      className={`relative p-3 rounded-lg border backdrop-blur-sm ${
        popular
          ? 'border-green-400 bg-gradient-to-br from-gray-900/80 to-gray-800/80 shadow-sm shadow-green-400/20'
          : 'border-gray-600 bg-gradient-to-br from-gray-800/80 to-gray-900/80'
      }`}
    >
      {popular && (
        <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black text-[8px] font-medium px-1.5 py-0.5 rounded-full shadow-sm">
            POPULAR
          </span>
        </div>
      )}
      
      {/* Luxury Header */}
      <div className="text-center mb-2">
        <h3 className="text-base font-bold bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
          {title}
        </h3>
        <div className="flex items-baseline justify-center space-x-1">
          <span className="text-xl font-bold text-white">${price}</span>
          <span className="text-gray-400 text-[8px]">/{duration}</span>
        </div>
        <div className="w-8 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 mx-auto rounded-full"></div>
      </div>
      
      {/* Features List */}
      <ul className="space-y-1 mb-2">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center text-[8px] text-gray-300">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-1">
              <span className="w-0.5 h-0.5 bg-black rounded-full"></span>
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Luxury Button */}
      <button
        className={`w-full py-1.5 px-2 rounded font-medium text-[10px] ${
          popular
            ? 'bg-gradient-to-r from-green-400 to-emerald-500 text-black'
            : 'bg-gradient-to-r from-gray-700 to-gray-800 text-white border border-gray-600'
        }`}
      >
        {popular ? 'Start' : 'Select'}
      </button>
    </div>
  );
};

// Main Pricing Component
export default function PricingComponent() {
  const pricingPlans = [
    {
      title: "Basic Consultation",
      price: "20",
      duration: "45 min",
      features: [
        "One-on-one consultation",
        "Basic project assessment",
        "Initial recommendations",
        "Email follow-up",
      ],
    },
    {
      title: "Standard Package",
      price: "50",
      duration: "1.5 hr",
      features: [
        "Detailed project analysis",
        "Technical recommendations",
        "Code review",
        "30-day email support",
        "Priority scheduling",
      ],
      popular: true,
    },
    {
      title: "Premium Solution",
      price: "100",
      duration: "3 hr",
      features: [
        "Comprehensive project audit",
        "Architecture planning",
        "Code optimization",
        "60-day priority support",
        "Weekly check-ins",
        "Custom implementation guide",
      ],
    },
  ];

  return (
    <div className="space-y-2 px-1">
      <div className="text-center">
        <h2 className="text-base font-serif neon-text mb-1">Pricing</h2>
        <p className="text-gray-400 text-[8px]">
          Choose a plan for professional consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {pricingPlans.map((plan, index) => (
          <PricingCard
            key={index}
            title={plan.title}
            price={plan.price}
            duration={plan.duration}
            features={plan.features}
            popular={plan.popular}
          />
        ))}
      </div>

      <div className="text-center text-[8px] text-gray-400">
        <p>
          Custom solution?{' '}
          <span className="text-green-400 cursor-pointer hover:underline">Contact</span>
        </p>
      </div>
    </div>
  );
}