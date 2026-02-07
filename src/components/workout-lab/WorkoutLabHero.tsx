"use client";

import { motion } from "framer-motion";
import { Download, ChevronDown } from "lucide-react";

export function WorkoutLabHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Subtle background accent - very minimal */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse at top, var(--color-primary) 0%, transparent 50%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block px-4 py-2 mb-6 rounded-full"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "1px solid var(--color-border)",
              }}
            >
              <span
                className="text-sm font-semibold"
                style={{ color: "var(--color-primary)" }}
              >
                For Serious Athletes
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
              style={{ color: "var(--color-text)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Ultimate Flexible{" "}
              <span style={{ color: "var(--color-primary)" }}>Workout Tracker</span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl mb-8 leading-relaxed"
              style={{ color: "var(--color-text-muted)" }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Track any exercise, any way. Seamless supersets, powerful data analysis,
              and proprietary goal algorithm.
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a
                href="https://play.google.com/store/apps/details?id=com.clearmetricslab.workoutlab"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{
                  backgroundColor: "var(--color-primary)",
                }}
              >
                <Download className="w-5 h-5" />
                Download for Android
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105"
                style={{
                  backgroundColor: "var(--color-bg)",
                  color: "var(--color-text)",
                  border: "1px solid var(--color-border)",
                }}
              >
                See Features
                <ChevronDown className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Key stats */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 pt-8"
              style={{ borderTop: "1px solid var(--color-border)" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  Free
                </div>
                <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  to Start
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  ∞
                </div>
                <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  Exercise Types
                </div>
              </div>
              <div>
                <div
                  className="text-3xl font-bold mb-1"
                  style={{ color: "var(--color-primary)" }}
                >
                  0
                </div>
                <div className="text-sm" style={{ color: "var(--color-text-muted)" }}>
                  Ads or Tracking
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: App screenshot */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative mx-auto max-w-sm">
              {/* Glow effect */}
              <div
                className="absolute inset-0 blur-3xl opacity-30"
                style={{ backgroundColor: "var(--color-primary)" }}
              />

              {/* Screenshot */}
              <div className="relative">
                <img
                  src="/images/apps/workout-lab/screenshots/Start-page-light-and-dark-theme.png"
                  alt="Workout Lab app interface showing workout routines"
                  className="w-full h-auto rounded-3xl shadow-2xl"
                  style={{ border: "1px solid var(--color-border)" }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown
          className="w-6 h-6"
          style={{ color: "var(--color-text-muted)" }}
        />
      </motion.div>
    </section>
  );
}
