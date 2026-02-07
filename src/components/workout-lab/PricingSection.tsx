"use client";

import { Check, X, Zap } from "lucide-react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Free",
    price: "€0",
    period: "forever",
    description: "Perfect for getting started",
    features: [
      { text: "Log workouts", included: true },
      { text: "Basic tracking", included: true },
      { text: "Offline support", included: false },
      { text: "Data analytics", included: false },
      { text: "Add custom exercises", included: false },
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Monthly",
    price: "€3",
    period: "per month",
    description: "Full access, cancel anytime",
    features: [
      { text: "Everything in Free", included: true },
      { text: "100% offline support", included: true },
      { text: "Advanced analytics", included: true },
      { text: "Custom exercises", included: true },
      { text: "Goal tracking & delta", included: true },
    ],
    cta: "Start Free Trial",
    highlight: false,
  },
  {
    name: "Yearly",
    price: "€30",
    period: "per year",
    description: "Save 17% with annual billing",
    badge: "BEST VALUE",
    features: [
      { text: "Everything in Monthly", included: true },
      { text: "17% discount", included: true },
      { text: "€2.50/month equivalent", included: true },
      { text: "Priority support", included: true },
    ],
    cta: "Start Free Trial",
    highlight: true,
  },
  {
    name: "Lifetime",
    price: "€90",
    period: "one-time",
    description: "Pay once, own forever",
    features: [
      { text: "Everything in Yearly", included: true },
      { text: "Lifetime access", included: true },
      { text: "All future updates", included: true },
      { text: "No recurring payments", included: true },
    ],
    cta: "Buy Lifetime",
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{ color: "var(--color-text)" }}
          >
            Simple, Transparent Pricing
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Start free, upgrade when you need analytics and offline support.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className={`rounded-2xl p-6 relative ${
                plan.highlight ? "ring-2" : ""
              }`}
              style={{
                backgroundColor: "var(--color-bg)",
                border: "2px solid var(--color-border)",
                ringColor: plan.highlight ? "var(--color-primary)" : undefined,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              {plan.badge && (
                <div
                  className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-xs font-bold text-white"
                  style={{ backgroundColor: "var(--color-primary)" }}
                >
                  {plan.badge}
                </div>
              )}

              <div className="mb-6">
                <h3
                  className="text-2xl font-bold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1 mb-2">
                  <span
                    className="text-4xl font-bold"
                    style={{ color: "var(--color-primary)" }}
                  >
                    {plan.price}
                  </span>
                  <span style={{ color: "var(--color-text-muted)" }}>
                    /{plan.period}
                  </span>
                </div>
                <p
                  className="text-sm"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    {feature.included ? (
                      <Check
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "var(--color-success)" }}
                      />
                    ) : (
                      <X
                        className="w-5 h-5 flex-shrink-0 mt-0.5"
                        style={{ color: "var(--color-text-muted)", opacity: 0.3 }}
                      />
                    )}
                    <span
                      className="text-sm"
                      style={{
                        color: feature.included
                          ? "var(--color-text)"
                          : "var(--color-text-muted)",
                        opacity: feature.included ? 1 : 0.5,
                      }}
                    >
                      {feature.text}
                    </span>
                  </li>
                ))}
              </ul>

              <button
                className="w-full py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: plan.highlight
                    ? "var(--color-primary)"
                    : "var(--color-bg-light)",
                  color: plan.highlight ? "#FFFFFF" : "var(--color-primary)",
                  border: plan.highlight
                    ? "none"
                    : "2px solid var(--color-border)",
                }}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </div>

        {/* Additional info */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            All plans include: No ads • No tracking • Privacy-first design
          </p>
        </motion.div>
      </div>
    </section>
  );
}
