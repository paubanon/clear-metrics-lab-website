"use client";

import { useState } from "react";
import { Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "./Button";

interface ContactFormProps {
    webhookUrl?: string;
}

export function ContactForm({
    webhookUrl = "/api/contact",
}: ContactFormProps) {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        appInterest: "General Inquiry",
        message: "",
    });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        setErrorMessage("");

        try {
            const response = await fetch(webhookUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error("Failed to send message");
            }

            setStatus("success");
            setFormData({ name: "", email: "", appInterest: "General Inquiry", message: "" });

            // Reset to idle after 3 seconds
            setTimeout(() => setStatus("idle"), 3000);
        } catch {
            setStatus("error");
            setErrorMessage("Failed to send message. Please try again.");
        }
    };

    const inputStyles = `
    w-full px-4 py-3 rounded-lg
    bg-surface border border-border
    text-text-primary placeholder:text-text-muted
    focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50
    transition-colors duration-200
  `;

    return (
        <form onSubmit={handleSubmit} className="space-y-4" aria-label="Contact form">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                    Name <span className="text-red-400" aria-label="required">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    aria-required="true"
                    aria-label="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputStyles}
                    placeholder="Your name"
                    disabled={status === "loading"}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                    Email <span className="text-red-400" aria-label="required">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    aria-required="true"
                    aria-label="Your email address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputStyles}
                    placeholder="you@example.com"
                    disabled={status === "loading"}
                />
            </div>

            <div>
                <label htmlFor="appInterest" className="block text-sm font-medium text-text-muted mb-2">
                    App Interest
                </label>
                <select
                    id="appInterest"
                    name="appInterest"
                    aria-label="Select which app you're interested in"
                    value={formData.appInterest}
                    onChange={(e) => setFormData({ ...formData, appInterest: e.target.value })}
                    className={inputStyles}
                    disabled={status === "loading"}
                >
                    <option value="General Inquiry">General Inquiry</option>
                    <option value="Workout Lab">Workout Lab</option>
                    <option value="Vitamin D Tracker">Vitamin D Tracker</option>
                    <option value="Other">Other</option>
                </select>
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                    Message <span className="text-red-400" aria-label="required">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    required
                    aria-required="true"
                    aria-label="Your message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputStyles} resize-none`}
                    placeholder="Tell me about your project..."
                    disabled={status === "loading"}
                />
            </div>

            {status === "error" && (
                <div role="alert" aria-live="assertive" className="text-red-400 text-sm">
                    {errorMessage}
                </div>
            )}

            {status === "success" && (
                <div role="status" aria-live="polite" className="text-green-400 text-sm">
                    Message sent successfully! I'll get back to you soon.
                </div>
            )}

            <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full"
                aria-label={
                    status === "loading"
                        ? "Sending message, please wait"
                        : status === "success"
                        ? "Message sent successfully"
                        : "Send message"
                }
            >
                {status === "loading" && (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />
                        Sending...
                    </>
                )}
                {status === "success" && (
                    <>
                        <CheckCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                        Sent!
                    </>
                )}
                {(status === "idle" || status === "error") && (
                    <>
                        <Send className="w-4 h-4 mr-2" aria-hidden="true" />
                        Send Message
                    </>
                )}
            </Button>
        </form>
    );
}
