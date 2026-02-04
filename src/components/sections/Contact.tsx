"use client";

import { ScrollReveal } from "../ui/ScrollReveal";
import { ContactForm } from "../ui/ContactForm";
import { Mail } from "lucide-react";

interface ContactProps {
    webhookUrl?: string;
}

export function Contact({ webhookUrl }: ContactProps) {
    return (
        <section id="contact" className="py-32 border-t border-white/5">
            <div className="max-w-6xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Info */}
                    <ScrollReveal>
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                                Get in Touch
                            </h2>
                            <p className="text-text-muted leading-relaxed mb-8">
                                Have an app idea? Want to collaborate? I'd love to hear from you.
                                Drop me a message and I'll get back to you as soon as possible.
                            </p>

                            <div className="flex items-center gap-4 p-5 rounded-xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10">
                                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center">
                                    <Mail className="w-5 h-5 text-accent" />
                                </div>
                                <div>
                                    <p className="text-sm text-text-muted">Email</p>
                                    <p className="font-medium">hello@clearmetricslab.com</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    {/* Form */}
                    <ScrollReveal delay={0.1}>
                        <div className="p-6 rounded-2xl bg-zinc-900/40 backdrop-blur-2xl border border-white/10">
                            <ContactForm webhookUrl={webhookUrl} />
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
}
