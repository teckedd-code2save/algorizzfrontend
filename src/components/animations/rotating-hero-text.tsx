"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface RotatingHeroTextProps {
    messages?: string[]; // Optional array of messages
    className?: string; // Optional custom classNames
    rotationDuration?: number; // Optional rotation duration in seconds
    textGradient?: string; // Optional gradient for text
}

export default function RotatingHeroText({
    messages = [
        "DevOps Solutions",
        "Custom AI Solutions",
        "Business Software Solutions",
    ],
    className = "",
    rotationDuration = 2,
    textGradient = "bg-gradient-to-r  from-[#5754AD] to-white",
}: RotatingHeroTextProps) {
    const [index, setIndex] = useState(0);
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % messages.length);
            setRotation((prevRotation) => 360); // Rotate by 180 degrees
        }, 3000); // Change message every 3 seconds
        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className="">
            <motion.div
                className={`${textGradient} bg-clip-text text-transparent flex items-center justify-center ${className}`}
                initial={{ rotateX: 0 }}
                animate={{ rotateX: rotation ,scaleX:1.2,scaleY:1.2}}
                transition={{ duration: rotationDuration, ease: "easeInOut" }}
                style={{ transformOrigin: "center" }}
            >
                {messages[index]}
            </motion.div>
        </div>
    );
}
