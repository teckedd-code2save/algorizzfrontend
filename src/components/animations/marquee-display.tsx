"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    items?: string[];
    speed?: number;
    className?: string;
}

export default function Marquee({
    items = ["SoftRx", "BrandAfrik", "TechNova", "InnoWave", "QuantumWorks"],
    speed = 30,
    className = "",
}: MarqueeProps) {
    return (
        <div className={`relative overflow-hidden w-full  py-4 ${className}`}>
            {/* Left Fade */}
            <div className="absolute top-0 bottom-0 left-0 w-24 bg-gradient-to-r from-gray-900 to-transparent z-10"></div>
            
            {/* Scrolling Content */}
            <motion.div
                className="flex whitespace-nowrap"
                initial={{ x: "100%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
            >
                {items.concat(items).map((item, index) => (
                    <span key={index} className="text-white text-xl mx-6 font-semibold">
                        {item}
                    </span>
                ))}
            </motion.div>
            
            {/* Right Fade */}
            <div className="absolute top-0 bottom-0 right-0 w-24 bg-gradient-to-l from-gray-900 to-transparent z-10"></div>
        </div>
    );
}
