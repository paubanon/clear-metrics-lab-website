"use client";

import { Zap, Rocket, LineChart, Target, Wrench } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Zap,
    title: "Unmatched Flow",
    description: "Seamless supersets and edit exercises on-the-fly. No other app comes close to this level of flexibility during your workout.",
    image: "/images/apps/workout-lab/screenshots/active-workout-light-theme.jpg",
    highlight: false,
  },
  {
    icon: Rocket,
    title: "Log Any Exercise, Any Way",
    description: "Strength, cardio, mobility, strongman, calisthenics - track Load, Reps, Time, Distance, Range of Motion, and more. Complete flexibility.",
    image: "/images/apps/workout-lab/screenshots/exercise-farmers-carry.jpg",
    highlight: false,
  },
  {
    icon: LineChart,
    title: "Data Analysis & Predictive Metrics",
    description: "Laboratory-style visualizations with Max/Avg/Min metrics, 1RM evolution tracking, dual Y-axis charts, and volume/intensity analysis.",
    image: "/images/apps/workout-lab/screenshots/Exercise_analysis.jpg",
    highlight: false,
  },
  {
    icon: Target,
    title: "Proprietary Goal Algorithm",
    description: "Multi-metric goals with real-time progress tracking and delta of improvement. See exactly how much you've progressed (+6%, +3%) towards your targets.",
    image: "/images/apps/workout-lab/screenshots/delta-improvement-dark-theme.png",
    highlight: true, // Standout feature
  },
];

const essentialFeatures = [
  "Dark Mode",
  "100% Offline Support",
  "Smart Bodyweight Tracking",
  "Exercise Notes",
  "Timer & Tempo Controls",
  "Rest Period Tracking",
  "No Ads or Tracking",
  "Privacy-First Design",
];

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
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
            Built for Serious Athletes
          </h2>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Every feature designed with one goal: help you track, analyze, and improve your training with scientific precision.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="space-y-12 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              className={`rounded-2xl p-8 ${
                feature.highlight ? "ring-2" : ""
              }`}
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
                ringColor: feature.highlight ? "var(--color-primary)" : undefined,
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div
                    className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6"
                    style={{
                      backgroundColor: `${
                        feature.highlight
                          ? "var(--color-primary)"
                          : "var(--color-bg-light)"
                      }`,
                    }}
                  >
                    <feature.icon
                      className="w-8 h-8"
                      style={{
                        color: feature.highlight ? "#FFFFFF" : "var(--color-primary)",
                      }}
                    />
                  </div>
                  <h3
                    className="text-3xl md:text-4xl font-bold mb-4"
                    style={{ color: "var(--color-text)" }}
                  >
                    {feature.title}
                  </h3>
                  {feature.highlight && (
                    <div
                      className="inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4"
                      style={{
                        backgroundColor: "var(--color-primary)",
                        color: "#FFFFFF",
                      }}
                    >
                      STANDOUT FEATURE
                    </div>
                  )}
                  <p
                    className="text-xl md:text-2xl leading-relaxed"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {feature.description}
                  </p>
                </div>
                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full max-w-sm mx-auto rounded-xl shadow-lg"
                    style={{ border: "1px solid var(--color-border)" }}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Essential features grid */}
        <motion.div
          className="rounded-2xl p-8"
          style={{
            backgroundColor: "var(--color-bg)",
            border: "1px solid var(--color-border)",
          }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <Wrench
              className="w-6 h-6"
              style={{ color: "var(--color-primary)" }}
            />
            <h3
              className="text-2xl font-bold"
              style={{ color: "var(--color-text)" }}
            >
              Essential Features
            </h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {essentialFeatures.map((feature, index) => (
              <motion.div
                key={feature}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ backgroundColor: "var(--color-primary)" }}
                />
                <span style={{ color: "var(--color-text-muted)" }}>
                  {feature}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
