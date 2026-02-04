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
            setFormData({ name: "", email: "", message: "" });

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
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label htmlFor="name" className="block text-sm font-medium text-text-muted mb-2">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={inputStyles}
                    placeholder="Your name"
                    disabled={status === "loading"}
                />
            </div>

            <div>
                <label htmlFor="email" className="block text-sm font-medium text-text-muted mb-2">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={inputStyles}
                    placeholder="you@example.com"
                    disabled={status === "loading"}
                />
            </div>

            <div>
                <label htmlFor="message" className="block text-sm font-medium text-text-muted mb-2">
                    Message
                </label>
                <textarea
                    id="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`${inputStyles} resize-none`}
                    placeholder="Tell me about your project..."
                    disabled={status === "loading"}
                />
            </div>

            {status === "error" && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
            )}

            <Button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full"
            >
                {status === "loading" && (
                    <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Sending...
                    </>
                )}
                {status === "success" && (
                    <>
                        <CheckCircle className="w-4 h-4 mr-2" />
                        Sent!
                    </>
                )}
                {(status === "idle" || status === "error") && (
                    <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                    </>
                )}
            </Button>
        </form>
    );
}
