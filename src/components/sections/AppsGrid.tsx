"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "../ui/ScrollReveal";
import { GlassCard } from "../ui/GlassCard";
import { Dumbbell, Sun, Box, Smartphone, Heart, Gamepad2 } from "lucide-react";
import type { LucideIcon } from "lucide-react";

// Explicit icon mapping to avoid bundling all 1000+ icons
const iconMap: Record<string, LucideIcon> = {
    Dumbbell,
    Sun,
    Box,
    Smartphone,
    Heart,
    Gamepad2,
};

interface App {
    slug: string;
    title: string;
    tagline: string;
    icon: string;
    theme: {
        accent: string;
    };
}

interface AppsGridProps {
    apps: App[];
}

// Stagger animation variants
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
        },
    },
};

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export function AppsGrid({ apps }: AppsGridProps) {
    const getIcon = (iconName: string): LucideIcon => {
        return iconMap[iconName] || Box;
    };

    return (
        <section id="apps" className="py-32">
            <div className="max-w-6xl mx-auto px-6">
                <ScrollReveal>
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Apps</h2>
                        <p className="text-text-muted max-w-2xl mx-auto">
                            A showcase of mobile applications designed to make your life easier and more productive.
                        </p>
                    </div>
                </ScrollReveal>

                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {apps.map((app) => {
                        const IconComponent = getIcon(app.icon);

                        return (
                            <motion.div key={app.slug} variants={cardVariants}>
                                <a href={`/apps/${app.slug}`} className="block h-full">
                                    <GlassCard className="p-8 h-full">
                                        <div className="flex items-start gap-5">
                                            {/* App Icon */}
                                            <div
                                                className="flex-shrink-0 w-16 h-16 rounded-2xl flex items-center justify-center bg-white/5 border border-white/10"
                                                style={{
                                                    boxShadow: `0 0 20px -5px ${app.theme.accent}40`,
                                                }}
                                            >
                                                <IconComponent
                                                    className="w-8 h-8"
                                                    style={{ color: app.theme.accent }}
                                                />
                                            </div>

                                            {/* App Info */}
                                            <div className="flex-1 min-w-0">
                                                <h3 className="text-xl font-semibold mb-2">{app.title}</h3>
                                                <p className="text-text-muted text-sm leading-relaxed">
                                                    {app.tagline}
                                                </p>
                                            </div>
                                        </div>

                                        {/* View App Link */}
                                        <div className="mt-6 flex items-center justify-between">
                                            <span
                                                className="text-sm font-medium gradient-text"
                                            >
                                                View App →
                                            </span>
                                        </div>
                                    </GlassCard>
                                </a>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </div>
        </section>
    );
}
