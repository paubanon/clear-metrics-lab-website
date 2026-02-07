"use client";

import { Download } from "lucide-react";
import { motion } from "framer-motion";

export function DownloadCTA() {
  return (
    <section className="py-20 px-6">
      <motion.div
        className="max-w-4xl mx-auto text-center rounded-3xl p-12"
        style={{
          backgroundColor: "var(--color-bg)",
          border: "2px solid var(--color-border)",
        }}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2
          className="text-4xl md:text-5xl font-bold mb-6"
          style={{ color: "var(--color-text)" }}
        >
          Ready to Transform Your Training?
        </h2>
        <p
          className="text-xl mb-8 max-w-2xl mx-auto"
          style={{ color: "var(--color-text-muted)" }}
        >
          Join athletes using Workout Lab to track, analyze, and optimize their workouts with scientific precision.
        </p>

        <motion.a
          href="https://play.google.com/store/apps/details?id=com.clearmetricslab.workoutlab"
          className="inline-flex items-center gap-3 px-10 py-5 rounded-2xl font-bold text-lg text-white shadow-lg hover:shadow-xl transition-all duration-300"
          style={{
            backgroundColor: "var(--color-primary)",
          }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Download className="w-6 h-6" />
          Download for Android
        </motion.a>

        <p
          className="mt-6 text-sm"
          style={{ color: "var(--color-text-muted)" }}
        >
          Free • No Ads • No Tracking • 100% Offline
        </p>
      </motion.div>
    </section>
  );
}
