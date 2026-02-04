"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const HexPath = "M50 0 L93.3 25 L93.3 75 L50 100 L6.7 75 L6.7 25 Z";

// Generate a random hexagon with MORE size variety
const createRandomHex = (id: number) => ({
    id,
    x: Math.random() * 100,
    y: Math.random() * 350,
    size: 8 + Math.random() * 40, // 8-48px (more variety)
    color: Math.random() > 0.5 ? "rgb(56, 189, 248)" : "rgb(34, 211, 238)",
});

export function BackgroundEngine() {
    const [activeHexagons, setActiveHexagons] = useState<ReturnType<typeof createRandomHex>[]>([]);

    const { scrollYProgress } = useScroll();

    const gridY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

    // Dynamic color morph (cyan -> violet -> emerald)
    const glowHue = useTransform(scrollYProgress, [0, 0.4, 0.75, 1], [190, 260, 280, 160]);
    const glowSaturation = useTransform(scrollYProgress, [0, 0.5, 1], [85, 75, 70]);
    const glowLightness = useTransform(scrollYProgress, [0, 0.5, 1], [60, 55, 50]);

    // Cycle random hexagons every 3 seconds
    useEffect(() => {
        const generateBatch = () => {
            const count = 15 + Math.floor(Math.random() * 10);
            return Array.from({ length: count }, (_, i) => createRandomHex(Date.now() + i));
        };

        setActiveHexagons(generateBatch());

        const interval = setInterval(() => {
            setActiveHexagons(generateBatch());
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-zinc-950">

            {/* Aurora System: 1 Central + 2 Wandering Satellites */}
            <div className="fixed inset-0">

                {/* CENTRAL ORB - stays mostly centered with gentle breathing */}
                <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] rounded-full blur-[180px]"
                    style={{
                        background: useTransform(
                            [glowHue, glowSaturation, glowLightness],
                            ([h, s, l]) => `radial-gradient(ellipse, hsla(${h}, ${s}%, ${l}%, 0.45) 0%, transparent 65%)`
                        ),
                    }}
                    animate={{
                        scale: [1, 1.08, 1, 0.95, 1],
                        x: [0, 20, 0, -20, 0],
                        y: [0, -15, 0, 15, 0],
                    }}
                    transition={{
                        duration: 15,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* WANDERING SATELLITE 1 - roams upper-right to lower-left */}
                <motion.div
                    className="absolute w-[400px] h-[300px] rounded-full blur-[140px]"
                    style={{
                        background: useTransform(
                            [glowHue, glowSaturation, glowLightness],
                            ([h, s, l]) => `radial-gradient(ellipse, hsla(${Number(h) + 50}, ${s}%, ${Number(l) - 5}%, 0.55) 0%, transparent 65%)`
                        ),
                    }}
                    animate={{
                        x: ["60vw", "-30vw", "60vw"],
                        y: ["-20vh", "40vh", "-20vh"],
                        scale: [0.8, 1.2, 0.8],
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />

                {/* WANDERING SATELLITE 2 - roams lower-right to upper-left */}
                <motion.div
                    className="absolute w-[350px] h-[250px] rounded-full blur-[120px]"
                    style={{
                        background: useTransform(
                            [glowHue, glowSaturation, glowLightness],
                            ([h, s, l]) => `radial-gradient(ellipse, hsla(${Number(h) - 40}, ${s}%, ${Number(l) + 10}%, 0.50) 0%, transparent 65%)`
                        ),
                    }}
                    animate={{
                        x: ["-50vw", "50vw", "-50vw"],
                        y: ["30vh", "-30vh", "30vh"],
                        scale: [1.1, 0.7, 1.1],
                    }}
                    transition={{
                        duration: 30,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 5,
                    }}
                />
            </div>

            {/* Hexagonal Grid */}
            <motion.div
                className="absolute inset-0"
                style={{ y: gridY }}
            >
                <svg
                    className="absolute inset-0 w-full h-[400vh] opacity-[0.10]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern
                            id="hexGrid"
                            width="100"
                            height="86.6"
                            patternUnits="userSpaceOnUse"
                            patternTransform="scale(0.8)"
                        >
                            <path
                                d={HexPath}
                                fill="none"
                                stroke="white"
                                strokeWidth="0.5"
                                transform="scale(0.5) translate(0, 0)"
                            />
                            <path
                                d={HexPath}
                                fill="none"
                                stroke="white"
                                strokeWidth="0.5"
                                transform="scale(0.5) translate(50, 43.3)"
                            />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#hexGrid)" />
                </svg>

                {/* Cycling random hexagons with varied sizes */}
                <AnimatePresence mode="popLayout">
                    {activeHexagons.map((hex) => (
                        <motion.div
                            key={hex.id}
                            className="absolute"
                            style={{
                                left: `${hex.x}%`,
                                top: `${hex.y}vh`,
                                width: hex.size,
                                height: hex.size,
                            }}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 0.5, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ duration: 1.5, ease: "easeInOut" }}
                        >
                            <motion.svg
                                viewBox="0 0 100 100"
                                className="w-full h-full"
                                animate={{ opacity: [0.3, 0.6, 0.3] }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            >
                                <path
                                    d={HexPath}
                                    fill={hex.color}
                                    fillOpacity="0.5"
                                    stroke={hex.color}
                                    strokeWidth="1.5"
                                />
                            </motion.svg>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
