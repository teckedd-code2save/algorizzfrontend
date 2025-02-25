// components/HorizontalScroll.tsx
"use client";
import { useEffect, useRef, useState, useCallback } from 'react';

export default function HorizontalScroll() {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<NodeListOf<HTMLElement>>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [allowVerticalScroll, setAllowVerticalScroll] = useState(false);

  // Initialize Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setAllowVerticalScroll(true);
          } else {
            setAllowVerticalScroll(false);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (containerRef.current) {
      cardsRef.current = containerRef.current.querySelectorAll('.card');
      if (cardsRef.current.length > 0) {
        observer.observe(cardsRef.current[cardsRef.current.length - 1]);
      }
    }

    return () => observer.disconnect();
  }, []);

  // Handle scroll events
  const handleWheel = useCallback((e: WheelEvent) => {
    if (allowVerticalScroll) return;
    e.preventDefault();

    if (!isScrolling && containerRef.current) {
      const delta = Math.sign(e.deltaY);
      const newIndex = Math.max(0, Math.min(currentIndex + delta, (cardsRef.current?.length || 1) - 1));
      
      if (newIndex !== currentIndex) {
        setIsScrolling(true);
        setCurrentIndex(newIndex);
        
        containerRef.current.style.transform = `translateX(-${newIndex * 100}%)`;
        
        setTimeout(() => {
          setIsScrolling(false);
        }, 500);
      }
    }
  }, [currentIndex, isScrolling, allowVerticalScroll]);

  // Add event listeners
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const wheelHandler = (e: WheelEvent) => handleWheel(e);
    const touchHandler = (e: TouchEvent) => {
      if (!allowVerticalScroll) e.preventDefault();
    };

    window.addEventListener('wheel', wheelHandler, { passive: false });
    window.addEventListener('touchmove', touchHandler, { passive: false });

    return () => {
      window.removeEventListener('wheel', wheelHandler);
      window.removeEventListener('touchmove', touchHandler);
    };
  }, [handleWheel, allowVerticalScroll]);

  // Card hover effects
  const handleCardHover = (card: HTMLElement) => {
    card.style.transform = 'scale(1.05) translateY(-10px)';
    card.style.boxShadow = '0 20px 40px rgba(0,0,0,0.2)';
  };

  const handleCardLeave = (card: HTMLElement) => {
    card.style.transform = 'scale(1)';
    card.style.boxShadow = 'none';
  };

  return (
    <div 
      ref={containerRef}
      className="flex h-screen w-screen overflow-x-hidden transition-transform duration-500 ease-in-out"
    >
      {[1, 2, 3].map((num) => (
        <div 
          key={num}
          className="card relative h-screen w-screen flex-shrink-0 flex items-center justify-center scroll-snap-start p-8"
          onMouseEnter={(e) => handleCardHover(e.currentTarget)}
          onMouseLeave={(e) => handleCardLeave(e.currentTarget)}
          style={{
            transition: 'all 0.3s ease-in-out',
            backgroundColor: '#f3f4f6',
            transformOrigin: 'center center'
          }}
        >
          <div className="text-4xl font-bold text-gray-800">Card {num}</div>
        </div>
      ))}
    </div>
  );
}