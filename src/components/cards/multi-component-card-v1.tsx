"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import TextBtn from "../buttons/text-btn-icon";
import BigHeader from "../texts/big-header-text";

interface MultiComponentCardProps {
  title: string;
  image: string;
  className: string;
  body: string;
  dir: "row" | "col";
  parentRef: React.RefObject<HTMLDivElement | null>;
  totalCards?: number; // Optional prop for total number of cards
}

export default function MultiComponentCardV1({
  title,
  image,
  body,
  className,
  dir,
  parentRef,
  totalCards = 1, // Default to 1 if not provided
}: MultiComponentCardProps) {
  const [zoom, setZoom] = useState(1);
  const [trans, setTrans] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const ZOOM_SPEED = 0.003;
  const TRANS_SPEED = 0.01;

  const cardRef = useRef<HTMLDivElement>(null);
  const prevTransRef = useRef(trans);
  const animationFrameRef = useRef<number | null>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Smooth animation handler
  const smoothUpdate = (deltaY: number) => {
    if (animationFrameRef.current) return;

    const update = () => {
      setZoom((prevZoom) => {
        let newZoom = deltaY > 0 ? prevZoom + ZOOM_SPEED / 2 : prevZoom - ZOOM_SPEED;
        return Math.max(1, Math.min(newZoom, 2));
      });

      setTrans((prevTrans) => {
        let newTrans = deltaY > 0 ? prevTrans + TRANS_SPEED * 1.5 : prevTrans - TRANS_SPEED * 2.5;
        return Math.max(0.2, Math.min(newTrans, 3.8));
      });

      animationFrameRef.current = null;
    };

    animationFrameRef.current = requestAnimationFrame(update);
  };

  // Wheel event handler
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return; // Allow default scrolling when card scrolling is active

      e.preventDefault();
      smoothUpdate(e.deltaY);

      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(() => {
        // Only reset if we've reached the bounds and scrolled all cards
        if (parentRef.current) {
          const scrollLeft = parentRef.current.scrollLeft;
          const maxScroll = parentRef.current.scrollWidth - parentRef.current.clientWidth;
          if ((trans <= 0.2 && scrollLeft <= 0) || (trans >= 3.8 && scrollLeft >= maxScroll)) {
            setIsScrolling(false);
          }
        }
      }, 50000);
    };

    const currentCard = cardRef.current;
    if (currentCard) {
      currentCard.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (currentCard) {
        currentCard.removeEventListener("wheel", handleWheel);
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling, parentRef]);

  // Scroll handling effect
  useEffect(() => {
    if (!parentRef.current || !cardRef.current) return;

    const cardWidth = cardRef.current.clientWidth;
    const maxScroll = (totalCards - 1) * cardWidth;

    const scrollHandler = () => {
      if (!parentRef.current) return;

      const scrollLeft = parentRef.current.scrollLeft;
      // Reset only when at bounds
      if ((trans <= 0.2 && scrollLeft <= 0) || (trans >= 3.8 && scrollLeft >= maxScroll)) {
        setIsScrolling(false);
        setZoom(1);
        setTrans(0);
      }
    };

    const handleScrollComplete = () => {
      if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      scrollTimeoutRef.current = setTimeout(scrollHandler, 300);
    };

    if (prevTransRef.current < 3.8 && trans >= 3.8) {
      // Scroll forward
      setIsScrolling(true);
      parentRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
      parentRef.current.addEventListener("scroll", handleScrollComplete);
    } 
    else if (prevTransRef.current > 0.2 && trans <= 0.2) {
      // Scroll backward or up
      setIsScrolling(true);
      if (parentRef.current.scrollLeft <= 0) {
        // Only scroll page up if at first card
        const cardHeight = cardRef.current.clientHeight;
        parentRef.current.parentElement!.scrollBy({
          top: -cardHeight,
          behavior: "smooth",
        });
      } else {
        parentRef.current.scrollBy({
          left: -cardWidth,
          behavior: "smooth",
        });
      }
      parentRef.current.addEventListener("scroll", handleScrollComplete);
    }

    prevTransRef.current = trans;

    return () => {
      if (parentRef.current) {
        parentRef.current.removeEventListener("scroll", handleScrollComplete);
      }
    };
  }, [trans, parentRef, totalCards]);

  return (
    <div
      ref={cardRef}
      className={`multi_card_component flex gap-4 p-2 h-full w-full justify-between border border-[0.4px] border-[#2D2D2D] rounded-md ${className} ${
        dir === "row" ? "flex-row" : "flex-col"
      }`}
    >
      <div className="relative big_card_img w-1/2 h-full ml-2 overflow-hidden">
        <Image
          src={image}
          alt="Product Image"
          fill
          style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
          className="object-cover transition-transform duration-100"
          priority
        />
      </div>

      <div className="flex flex-col w-1/2 justify-end">
        <div
          className="flex flex-col p-2 justify-end w-full gap-2"
          style={{ transform: `translateY(-${trans * 100}px)` }}
        >
          <div className="justify-center w-full gap-2">
            <BigHeader text={title} />
            <p className="font-thin text-gray-300 text-sm max-w-4/5 overflow-wrap">{body}</p>
          </div>
        </div>

        <div className="flex flex-col justify-end w-full gap-2 p-2">
          <hr />
          <TextBtn title="Get Started" />
        </div>
      </div>
    </div>
  );
}