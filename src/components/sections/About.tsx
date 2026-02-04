"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { Code, Palette, Zap } from "lucide-react";

export function About() {
    const skills = [
        {
            icon: Code,
            title: "Native Development",
            description: "React Native & Swift for high-performance cross-platform apps.",
        },
        {
            icon: Palette,
            title: "Design-First",
            description: "Every pixel matters. We craft interfaces users love to use.",
        },
        {
            icon: Zap,
            title: "Performance",
            description: "Optimized for speed, battery life, and smooth animations.",
        },
    ];

    return (
        <section id="about" className="py-32 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Bio */}
                    <ScrollReveal>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                About the Studio
                            </h2>
                            <p className="text-text-muted leading-relaxed mb-6">
                                ClearMetrics Lab is a boutique mobile app development studio focused on
                                creating exceptional user experiences. We believe in building apps that
                                are not just functional, but genuinely delightful to use.
                            </p>
                            <p className="text-text-muted leading-relaxed">
                                From fitness tracking to productivity tools, each app is crafted with
                                attention to detail, performance, and user privacy at its core.
                            </p>
                        </div>
                    </ScrollReveal>

                    {/* Skills */}
                    <div className="space-y-6">
                        {skills.map((skill, index) => (
                            <ScrollReveal key={skill.title} delay={index * 0.1} direction="left">
                                <div className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10 hover:border-accent/30 glow-border hover:scale-[1.02] transition-all duration-300 cursor-default group">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300">
                                        <skill.icon className="w-5 h-5 text-accent" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors duration-300">{skill.title}</h3>
                                        <p className="text-sm text-text-muted">{skill.description}</p>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
