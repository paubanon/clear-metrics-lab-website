"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { GraduationCap, Dumbbell, Brain } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: GraduationCap,
      title: "PhD in Theoretical Physics",
      description: "Specialized in general relativity, differential geometry, and nonlinear dynamics. Developed new formalism for GR based on Clifford algebras.",
    },
    {
      icon: Dumbbell,
      title: "Founder of Enso Movers",
      description: "9 years teaching hundreds of customers how to train, move, and use their bodies better.",
    },
    {
      icon: Brain,
      title: "Data-Driven Approach",
      description: "Obsessed with learning, data analysis, and understanding human movement from first principles.",
    },
  ];

  return (
    <section id="about" className="py-32 border-t border-white/5" role="region" aria-labelledby="about-heading">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Bio */}
          <ScrollReveal>
            <div>
              <h2 id="about-heading" className="text-3xl md:text-4xl font-bold mb-6">
                About the Developer
              </h2>
              <p className="text-text-muted leading-relaxed mb-6">
                I'm a PhD in theoretical physics with a deep obsession for learning, data analysis, and discovering new ways to use the human body. My academic work focused on developing a new formalism for general relativity based on Clifford algebras, with expertise spanning differential geometry, chaotic systems, and nonlinear dynamics.
              </p>
              <p className="text-text-muted leading-relaxed mb-6">
                This curiosity led me to found <strong className="text-white">Enso Movers</strong>, a startup I've been running parallel to my physics studies for 9 years. I've taught hundreds of satisfied customers how to train, move, and use their bodies better—bridging scientific rigor with practical fitness applications.
              </p>
              <p className="text-text-muted leading-relaxed mb-8">
                ClearMetrics Lab represents the intersection of these passions: building scientifically-grounded mobile tools that combine evidence-based approaches with elegant design.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-accent-blue to-accent hover:from-accent-blue/80 hover:to-accent/80 transition-all duration-300 font-semibold"
              >
                Get in Touch
              </a>
            </div>
          </ScrollReveal>

          {/* Professional Photo and Highlights */}
          <div className="space-y-6">
            <ScrollReveal delay={0.1} direction="left">
              <div className="relative w-full aspect-square max-w-md mx-auto rounded-2xl overflow-hidden border border-white/10 bg-zinc-900/40">
                <img
                  src="/images/profile-placeholder.jpg"
                  alt="Professional headshot of the developer"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                    const parent = e.currentTarget.parentElement;
                    if (parent) {
                      parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-text-muted">Professional Photo</div>';
                    }
                  }}
                />
              </div>
            </ScrollReveal>

            {highlights.map((highlight, index) => (
              <ScrollReveal key={highlight.title} delay={(index + 2) * 0.1} direction="left">
                <div className="flex items-start gap-4 p-5 rounded-xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10 hover:border-accent/30 glow-border hover:scale-[1.02] transition-all duration-300 cursor-default group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/5 group-hover:bg-accent/10 flex items-center justify-center transition-colors duration-300">
                    <highlight.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 group-hover:text-accent transition-colors duration-300">
                      {highlight.title}
                    </h3>
                    <p className="text-sm text-text-muted">{highlight.description}</p>
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
