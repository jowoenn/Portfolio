"use client";
import { useState, useRef } from "react";
import Image from "next/image";

interface ImageCarouselProps {
  images: { src: string; alt: string }[];
  width?: number;
  height?: number;
  visibleCount?: number;
}

export default function ImageCarousel({
  images,
  width = 300,
  height = 400,
  visibleCount = 3,
}: ImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragging, setDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const getIndex = (offset: number) => (current + offset + images.length) % images.length;
  const half = Math.floor(visibleCount / 2);

  // Type guards for events
  function isTouchEvent(e: React.MouseEvent | React.TouchEvent): e is React.TouchEvent {
    return 'touches' in e;
  }
  function isTouchEndEvent(e: React.MouseEvent | React.TouchEvent): e is React.TouchEvent {
    return 'changedTouches' in e;
  }

  // Drag handlers
  const onDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    setDragging(true);
    if (isTouchEvent(e)) {
      setDragStartX(e.touches[0].clientX);
    } else {
      setDragStartX((e as React.MouseEvent).clientX);
    }
  };

  const onDragMove = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || dragStartX === null) return;
    // Optional: add visual feedback here
  };

  const onDragEnd = (e: React.MouseEvent | React.TouchEvent) => {
    if (!dragging || dragStartX === null) return;
    let clientX: number;
    if (isTouchEndEvent(e)) {
      clientX = e.changedTouches[0].clientX;
    } else if (isTouchEvent(e)) {
      clientX = e.touches[0]?.clientX ?? dragStartX;
    } else {
      clientX = (e as React.MouseEvent).clientX;
    }
    const diff = clientX - dragStartX;
    setDragging(false);
    setDragStartX(null);
    if (diff > 50) {
      setCurrent((c) => (c - 1 + images.length) % images.length);
    } else if (diff < -50) {
      setCurrent((c) => (c + 1) % images.length);
    }
  };

  return (
    <div className="relative flex flex-col items-center w-full px-2">
      <div
        ref={containerRef}
        className="relative h-[260px] md:h-[400px] w-full max-w-xs md:max-w-md flex items-center justify-center select-none mx-auto"
        style={{ perspective: 1200, cursor: dragging ? "grabbing" : "grab" }}
        onMouseDown={onDragStart}
        onMouseMove={onDragMove}
        onMouseUp={onDragEnd}
        onMouseLeave={onDragEnd}
        onTouchStart={onDragStart}
        onTouchMove={onDragMove}
        onTouchEnd={onDragEnd}
      >
        {Array.from({ length: visibleCount }).map((_, i) => {
          const offset = i - half;
          const idx = getIndex(offset);
          let style: React.CSSProperties = {
            position: "absolute",
            left: "50%",
            top: "50%",
            width: "90%",
            maxWidth: 320,
            height: offset === 0 ? 260 : 200,
            maxHeight: 420,
            transform: `translate(-50%, -50%) scale(${offset === 0 ? 1 : 0.85}) rotateY(${offset * 20}deg) translateX(${offset * 60}px)`,
            zIndex: offset === 0 ? 2 : 1,
            boxShadow: offset === 0 ? "0 8px 32px rgba(0,0,0,0.3)" : "0 2px 8px rgba(0,0,0,0.15)",
            transition: "transform 0.5s, box-shadow 0.5s",
            borderRadius: 16,
            overflow: "hidden",
            background: "#222",
          };
          return (
            <div key={idx} style={style}>
              <Image
                src={images[idx].src}
                alt={images[idx].alt}
                width={width}
                height={height}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
                draggable={false}
              />
              </div>
          );
        })}
        {Array.from({ length: visibleCount }).map((_, i) => {
          const offset = i - half;
          const idx = getIndex(offset);
          return (
            <div
              key={`desc-${idx}`}
              className="absolute text-white text-center text-sm font-extralight"
              style={{
                bottom: "15px",
                left: "50%",
                transform: `translateX(-50%) scale(${offset === 0 ? 1 : 0.85})`,
                zIndex: offset === 0 ? 2 : 1,
                opacity: offset === 0 ? 1 : 0,
                transition: "transform 0.5s, opacity 0.5s",
                pointerEvents: "none", 
              }}
            >
                {images[idx].alt}
              </div>
          );
        })}
        {/* Navigation buttons (only show on md and up) */}
        <button
          onClick={() => setCurrent((c) => (c - 1 + images.length) % images.length)}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full z-10 hidden md:block"
        >
          &#8592;
        </button>
        <button
          onClick={() => setCurrent((c) => (c + 1) % images.length)}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/70 px-3 py-2 rounded-full z-10 hidden md:block"
        >
          &#8594;
        </button>
      </div>
      {/* Dots */}
      <div className="flex mt-4 space-x-2">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`w-2 h-2 rounded-full ${idx === current ? "bg-blue-500" : "bg-gray-300"}`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
} 