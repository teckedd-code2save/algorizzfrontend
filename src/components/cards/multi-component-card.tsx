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
}

export default function MultiComponentCard({
  title,
  image,
  body,
  className,
  dir,
  parentRef,
}: MultiComponentCardProps) {
  const [zoom, setZoom] = useState(1);
  const [trans, setTrans] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const ZOOM_SPEED = 0.003;
  const TRANS_SPEED = 0.02;

  const cardRef = useRef<HTMLDivElement>(null);
  const prevTransRef = useRef(trans);

  // Wheel event handler effect
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return; // Allow normal scrolling when true

      e.preventDefault();

      // Update zoom state
      setZoom((prevZoom) => {
        let newZoom = e.deltaY > 0 ? prevZoom + ZOOM_SPEED / 2 : prevZoom - ZOOM_SPEED;
        newZoom = Math.max(1, Math.min(newZoom, 2));
        return newZoom;
      });

      // Update translation state
      setTrans((prevTrans) => {
        let newTrans = e.deltaY > 0 ? prevTrans + TRANS_SPEED * 1.5 : prevTrans - TRANS_SPEED * 2.5;
        newTrans = Math.max(0.2, Math.min(newTrans, 3.8));
        return newTrans;
      });

      if (parentRef.current) {
        const scrollLeft = parentRef.current.scrollLeft;
        const maxScroll = parentRef.current.scrollWidth - parentRef.current.clientWidth;

        // Switch to normal scrolling only at bounds
        if (e.deltaY < 0 && trans <= 0.2 && scrollLeft <= 0) {
          setIsScrolling(true);
          console.log("Switching to normal scrolling (start of cards)");
        } else if (e.deltaY > 0 && trans >= 3.8 && scrollLeft >= maxScroll - 1) {
          setIsScrolling(true);
          console.log("Switching to normal scrolling (end of cards)");
        }
      }
    };

    const handleFocus = () => {
      setIsScrolling(false); // Disable normal scrolling when card is focused
      console.log("Card focused, disabling normal scrolling");
    };

    const currentCard = cardRef.current;

    if (currentCard) {
      currentCard.addEventListener("wheel", handleWheel, { passive: false });
      currentCard.addEventListener("mouseenter", handleFocus);
      // Make the card focusable
      currentCard.tabIndex = 0; // Add tabIndex to make it focusable
    }

    return () => {
      if (currentCard) {
        currentCard.removeEventListener("wheel", handleWheel);
        currentCard.removeEventListener("focus", handleFocus);
      }
    };
  }, [isScrolling, parentRef, trans]); // Include dependencies to update listener

  // Effect to scroll to the next card when trans reaches maximum
  useEffect(() => {
    if (!parentRef.current || !cardRef.current) return;

    const cardWidth = cardRef.current.clientWidth;

    // Scroll to next card
    if (prevTransRef.current < 3.8 && trans >= 3.8) {

      if (dir==="col") {
        const cardHeight = cardRef.current.clientHeight;
        parentRef.current.scrollBy({
          top: cardHeight,
          behavior: "smooth",
        });
      }

      parentRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
    // Scroll to previous card or page up if at start
    else if (prevTransRef.current > 0.2 && trans <= 0.2) {
      if (parentRef.current.scrollLeft > 0) {

        if (dir==="col") {
          const cardHeight = cardRef.current.clientHeight;
          parentRef.current.scrollBy({
            top: -cardHeight,
            behavior: "smooth",
          });
        }
        parentRef.current.scrollBy({
          left: -cardWidth,
          behavior: "smooth",
        });

      } else {
        const cardHeight = cardRef.current.clientHeight;
        parentRef.current.parentElement!.scrollBy({
          top: -cardHeight,
          behavior: "smooth",
        });
        setIsScrolling(true); // Enable normal scrolling only when scrolling up at start
      }
    }

    prevTransRef.current = trans;
  }, [trans, parentRef]);

  return (
    <div
      ref={cardRef}
      className={`multi_card_component flex gap-4 p-2 h-full w-full justify-between border border-[0.4px] border-[#2D2D2D] rounded-md ${className} ${
         "flex-row" 
      }`}
    >
      <div className="relative big_card_img w-1/2 h-full ml-2 overflow-hidden">
        <Image
          src={image}
          alt="Product Image"
          fill
          style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
          className="object-cover"
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
          <hr className="text-red-500"/>
          <TextBtn title="Get Started" />
        </div>
      </div>
    </div>
  );
}