"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { type ReactNode, useRef, type MouseEvent } from "react";

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hover?: boolean;
}

export function GlassCard({
    children,
    className = "",
    hover = true,
}: GlassCardProps) {
    const cardRef = useRef<HTMLDivElement>(null);

    // Mouse position for spotlight effect
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation
    const spotlightX = useSpring(mouseX, { stiffness: 500, damping: 50 });
    const spotlightY = useSpring(mouseY, { stiffness: 500, damping: 50 });

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    const handleMouseLeave = () => {
        // Reset to center
        mouseX.set(cardRef.current?.offsetWidth ? cardRef.current.offsetWidth / 2 : 0);
        mouseY.set(cardRef.current?.offsetHeight ? cardRef.current.offsetHeight / 2 : 0);
    };

    return (
        <motion.div
            ref={cardRef}
            className={`
        relative overflow-hidden rounded-2xl
        bg-zinc-900/40 backdrop-blur-2xl
        border border-white/10
        ${hover ? "group cursor-pointer" : ""}
        ${className}
      `}
            onMouseMove={hover ? handleMouseMove : undefined}
            onMouseLeave={hover ? handleMouseLeave : undefined}
            whileHover={
                hover
                    ? {
                        scale: 1.02,
                        borderColor: "rgba(56, 189, 248, 0.3)",
                    }
                    : undefined
            }
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
            }}
        >
            {/* Mouse spotlight effect */}
            {hover && (
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                        background: `radial-gradient(
              400px circle at ${spotlightX.get()}px ${spotlightY.get()}px,
              rgba(56, 189, 248, 0.15),
              transparent 40%
            )`,
                    }}
                />
            )}

            {/* Animated spotlight with motion values */}
            {hover && (
                <motion.div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300"
                    style={{
                        background: useMotionValue(`radial-gradient(
              400px circle at 50% 50%,
              rgba(56, 189, 248, 0.12),
              transparent 40%
            )`),
                    }}
                >
                    <motion.div
                        className="absolute w-[400px] h-[400px] rounded-full"
                        style={{
                            background: "radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, transparent 60%)",
                            x: spotlightX,
                            y: spotlightY,
                            translateX: "-50%",
                            translateY: "-50%",
                        }}
                    />
                </motion.div>
            )}

            <div className="relative z-10">{children}</div>
        </motion.div>
    );
}
