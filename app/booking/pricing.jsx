"use client";
import React from "react";

// Luxury Pricing Card Component
const PricingCard = ({ title, price, duration, features, popular = false }) => {
  return (
    <div className={`relative overflow-hidden rounded-2xl p-4 border ${popular ? "border-green-400/20" : "border-white/10"} bg-gradient-to-br from-white/5 to-white/3 backdrop-blur-2xl shadow-lg`}>
      {/* subtle floating blob for liquid effect */}
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-tr from-green-400/8 to-emerald-400/6 opacity-60 blur-3xl pointer-events-none animate-blob"></div>

      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-green-400 to-emerald-500 text-black text-[8px] font-medium px-1.5 py-0.5 rounded-full shadow-sm">
            POPULAR
          </span>
        </div>
      )}
      
      {/* Luxury Header */}
      <div className="text-center mb-2 relative z-10">
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
      <ul className="space-y-1 mb-2 relative z-10">
        {features.slice(0, 3).map((feature, index) => (
          <li key={index} className="flex items-center text-[10px] text-gray-300">
            <div className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center mr-2">
              <span className="w-0.5 h-0.5 bg-black rounded-full"></span>
            </div>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {/* Luxury Button */}
      <button
        className={`w-full py-2 px-3 rounded-md font-medium text-[12px] relative z-10 ${
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
      price: "28",
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
      price: "58",
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
    <div className="space-y-4 px-3">
      <div className="text-center">
        <h2 className="text-base font-serif neon-text mb-1">Pricing</h2>
        <p className="text-gray-400 text-[12px]">
          Choose a plan for professional consultation.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-4">
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

      <div className="text-center text-[12px] text-gray-400">
        <p>
          Custom solution?{' '}
          <span className="text-green-400 cursor-pointer hover:underline">Contact</span>
        </p>
      </div>

      {/* Styled-JSX for minimal liquid/glass animations */}
      <style jsx>{`
        .neon-text {
          background-image: linear-gradient(90deg, #00ff99, #00eaff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .animate-blob {
          animation: blob 6s infinite;
        }
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); opacity: 0.65; }
          33% { transform: translate(-8px, 6px) scale(1.05); opacity: 0.5; }
          66% { transform: translate(6px, -4px) scale(0.95); opacity: 0.55; }
          100% { transform: translate(0px, 0px) scale(1); opacity: 0.65; }
        }
      `}</style>
    </div>
  );
}