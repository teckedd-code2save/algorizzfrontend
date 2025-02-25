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
  // State for zoom and translation
  const [zoom, setZoom] = useState(1);
  const [trans, setTrans] = useState(0);
  const ZOOM_SPEED = 0.003;
  const TRANS_SPEED = 0.009;

  // Ref for the card container to attach event listener and get card width
  const cardRef = useRef<HTMLDivElement>(null);

  // Ref to store the previous trans value
  const prevTransRef = useRef(trans);

  // Wheel event handler effect
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      // Prevent default scroll behavior (optional, adjust based on requirements)
      e.preventDefault();

      // Update zoom state
      setZoom((prevZoom) => {
        let newZoom = e.deltaY > 0 ? prevZoom + ZOOM_SPEED/2 : prevZoom - ZOOM_SPEED;
        newZoom = Math.max(1, Math.min(newZoom, 2.5)); // Clamp zoom between 1 and 2.5
        return newZoom;
      });

      // Update translation state
      setTrans((prevTrans) => {
        let newTrans = e.deltaY > 0 ? prevTrans + TRANS_SPEED : prevTrans - TRANS_SPEED * 2.5;
        newTrans = Math.max(0.2, Math.min(newTrans, 4)); // Clamp translation between 0.2 and 3
        return newTrans;
      });
    };

    // Attach wheel event listener to the container
    const currentCard = cardRef.current;
    if (currentCard) {
      currentCard.addEventListener("wheel", handleWheel, { passive: false });
    }

    // Cleanup: Remove event listener on unmount
    return () => {
      if (currentCard) {
        currentCard.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  // Effect to scroll to the next card when trans reaches maximum
  useEffect(() => {
    // Check if trans has crossed from below 3 to 3 or above
    if (
      prevTransRef.current < 4 &&
      trans >= 4 &&
      parentRef.current &&
      cardRef.current
    ) {
      const cardWidth = cardRef.current.clientWidth;
      parentRef.current.scrollBy({
        left: cardWidth,
        behavior: "smooth",
      });
    }
    else if (
      prevTransRef.current > 0.2 &&
      trans <= 0.2 &&
      parentRef.current &&
      cardRef.current
    ) {
      const cardWidth = cardRef.current.clientWidth;
      parentRef.current.scrollBy({
        left: -cardWidth,
        behavior: "smooth",
      });
    }
    // Update prevTransRef for the next render
    prevTransRef.current = trans;
  }, [trans, parentRef, cardRef]);

  return (
    <div
      ref={cardRef}
      className={`multi_card_component flex gap-4 p-2 h-full w-full justify-between border border-[0.4px] border-[#2D2D2D] rounded-md ${className} ${
        dir === "row" ? "flex-row" : "flex-col"
      }`}
    >
      {/* Image */}
      <div
        className="relative big_card_img w-1/2 h-full ml-2"
        style={{ transform: `scale(${zoom})`, transformOrigin: "center" }}
      >
        <Image
          src={image}
          alt="Product Image"
          fill
          className="object-cover"
          priority // Preload image since it's above the fold
        />
      </div>

      {/* Text Content */}
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