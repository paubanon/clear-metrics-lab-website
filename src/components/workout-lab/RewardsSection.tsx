"use client";

import { Gift, Star, Users, Bug, Share2 } from "lucide-react";
import { motion } from "framer-motion";

const rewards = [
  {
    icon: Star,
    title: "Write a Review",
    reward: "+1 Month Free",
    description: "Leave a review on Google Play, App Store, or any platform",
  },
  {
    icon: Users,
    title: "Refer Friends",
    reward: "+1 Month Free",
    description: "Each friend who subscribes earns you another month",
  },
  {
    icon: Bug,
    title: "Report Bugs",
    reward: "+1 Month Free",
    description: "Help improve the app by reporting valid bugs",
  },
  {
    icon: Share2,
    title: "Spread the Word",
    reward: "Earn Free Time",
    description: "Share on social media, write blog posts, create content",
  },
];

export function RewardsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <Gift className="w-8 h-8" style={{ color: "var(--color-primary)" }} />
            <h2
              className="text-4xl md:text-5xl font-bold"
              style={{ color: "var(--color-text)" }}
            >
              Earn Free Months
            </h2>
          </div>
          <p
            className="text-xl max-w-2xl mx-auto"
            style={{ color: "var(--color-text-muted)" }}
          >
            Help us grow and earn unlimited free premium access. Every contribution is rewarded.
          </p>
        </motion.div>

        {/* Rewards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {rewards.map((reward, index) => (
            <motion.div
              key={reward.title}
              className="rounded-2xl p-6 text-center"
              style={{
                backgroundColor: "var(--color-bg)",
                border: "2px solid var(--color-border)",
              }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4"
                style={{ backgroundColor: "var(--color-bg-light)" }}
              >
                <reward.icon
                  className="w-8 h-8"
                  style={{ color: "var(--color-primary)" }}
                />
              </div>

              <h3
                className="text-xl font-bold mb-2"
                style={{ color: "var(--color-text)" }}
              >
                {reward.title}
              </h3>

              <div
                className="inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3"
                style={{
                  backgroundColor: "var(--color-primary)",
                  color: "#FFFFFF",
                }}
              >
                {reward.reward}
              </div>

              <p
                className="text-sm"
                style={{ color: "var(--color-text-muted)" }}
              >
                {reward.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-12 p-8 rounded-2xl"
          style={{
            backgroundColor: "var(--color-bg)",
            border: "2px solid var(--color-border)",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3
            className="text-2xl font-bold mb-2"
            style={{ color: "var(--color-text)" }}
          >
            Stack Your Free Months
          </h3>
          <p
            className="text-lg mb-4"
            style={{ color: "var(--color-text-muted)" }}
          >
            Earn multiple free months by combining rewards. Review + Refer + Report = 3+ free months!
          </p>
          <p
            className="text-sm"
            style={{ color: "var(--color-text-muted)" }}
          >
            All rewards are credited automatically to your account within 24 hours.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
