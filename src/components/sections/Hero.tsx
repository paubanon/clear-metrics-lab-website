"use client";

import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";

const headlineWords = ["Building", "the", "next", "generation", "of", "apps."];

export function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 via-transparent to-transparent pointer-events-none" />

            {/* Ambient glow */}
            <div
                className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-3xl opacity-20 pointer-events-none"
                style={{
                    background: "radial-gradient(ellipse, rgb(56, 189, 248) 0%, transparent 70%)"
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    <span className="inline-block px-4 py-1.5 mb-8 text-sm font-medium text-accent bg-white/5 border border-white/10 rounded-full backdrop-blur-sm">
                        Mobile App Development Studio
                    </span>
                </motion.div>

                {/* Word-by-word staggered headline */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 leading-[1.15]">
                    {headlineWords.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: 0.1 + index * 0.08,
                                ease: [0.25, 0.1, 0.25, 1],
                            }}
                            className={`inline-block mr-[0.25em] ${word === "next" || word === "generation"
                                ? "gradient-text"
                                : ""
                                }`}
                        >
                            {word}
                        </motion.span>
                    ))}
                </h1>

                <motion.p
                    className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-12"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
                >
                    Crafting beautiful, performant mobile experiences that users love.
                    From concept to App Store, we bring your ideas to life.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4"
                >
                    {/* Glass button with glow border */}
                    <a
                        href="#apps"
                        className="inline-flex items-center px-6 py-3 text-white font-medium rounded-lg
              bg-white/10 backdrop-blur-sm border border-white/20
              glow-border
              hover:bg-white/15 transition-all duration-300"
                    >
                        View Apps
                    </a>
                    <a
                        href="#contact"
                        className="inline-flex items-center px-6 py-3 text-text-muted hover:text-text-primary
              border border-white/10 hover:border-white/20 rounded-lg transition-all duration-300"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
            >
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <ArrowDown className="w-5 h-5 text-text-muted" />
                </motion.div>
            </motion.div>
        </section>
    );
}
