"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps {
    children: ReactNode;
    delay?: number;
    className?: string;
    direction?: "up" | "down" | "left" | "right";
}

const getVariants = (direction: string): Variants => {
    const offset = 30;
    const directions: Record<string, { hidden: object; visible: object }> = {
        up: {
            hidden: { opacity: 0, y: offset },
            visible: { opacity: 1, y: 0 },
        },
        down: {
            hidden: { opacity: 0, y: -offset },
            visible: { opacity: 1, y: 0 },
        },
        left: {
            hidden: { opacity: 0, x: offset },
            visible: { opacity: 1, x: 0 },
        },
        right: {
            hidden: { opacity: 0, x: -offset },
            visible: { opacity: 1, x: 0 },
        },
    };
    return directions[direction] || directions.up;
};

export function ScrollReveal({
    children,
    delay = 0,
    className = "",
    direction = "up",
}: ScrollRevealProps) {
    const variants = getVariants(direction);

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.25, 0.1, 0.25, 1],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
}
