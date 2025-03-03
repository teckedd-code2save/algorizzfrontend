"use client";

import { motion } from "framer-motion";

interface MarqueeProps {
    items?: string[];
    speed?: number;
    className?: string;
}

export default function PartnersMarquee({
    items = ["SoftRx", "BrandAfrik", "TechNova", "InnoWave", "QuantumWorks"],
    speed = 30,
    className = "",
}: MarqueeProps) {
    return (
        <div className={`relative overflow-hidden  p-4 big_card_img ${className}`}>
            {/* Left Fade */}
             
            {/* Scrolling Content */}
            <motion.div
                className="flex whitespace-nowrap"
                initial={{ x: "5%" }}
                animate={{ x: "-100%" }}
                transition={{ repeat: Infinity, duration: speed, ease: "linear" }}
            >
                {items.concat(items).map((item, index) => (
                    <span key={index} className="text-white text-xl mx-6 font-semibold">
                        {item}
                    </span>
                ))}
            </motion.div>
            
   
        </div>
    );
}
