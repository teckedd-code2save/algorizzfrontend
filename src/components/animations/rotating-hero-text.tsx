"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RotatingHeroTextProps {
    messages?: string[]; // Optional array of messages
    children?: React.ReactNode; // Optional children
    className?: string; // Optional custom classNames
    rotationDuration?: number; // Optional rotation duration in seconds
    textGradient?: string; // Optional gradient for text
}

export default function RotatingHeroText({
    messages = [
        "With A Motivated Team",
        "With Efficient Algorithms",
        "With You as a partner",
    ],
    children,
    className = "",
    rotationDuration = 2,
    textGradient = "bg-gradient-to-r from-white to-blue-500",
}: RotatingHeroTextProps) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000); // Change message every 3 seconds
        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className="flex items-center justify-center text-white">
            <motion.div
                className={`text-4xl font-medium ${textGradient} bg-clip-text text-transparent flex items-center justify-center text-2xl font-bold ${className}`}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: 360 }}
                transition={{ duration: rotationDuration, ease: "easeInOut" }}
                style={{ transformOrigin: "center bottom" }}
            >
                {children ? children : messages[index]}
            </motion.div>
        </div>
    );
}