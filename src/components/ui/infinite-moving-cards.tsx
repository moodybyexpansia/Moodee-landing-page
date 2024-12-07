import { cn } from "@/lib/utils";
import type { TestimonialType } from "@/types/sanityTypes";
import { Star } from "lucide-react";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: TestimonialType[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  pauseOnHover?: boolean;
  className?: string;
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const scrollerRef = React.useRef<HTMLUListElement>(null);

  useEffect(() => {
    addAnimation();
  }, []);
  const [start, setStart] = useState(false);
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards",
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse",
        );
      }
    }
  };
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };
  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
        className,
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex w-max min-w-full shrink-0 flex-nowrap gap-12 py-4",
          start && "animate-scroll",
          pauseOnHover && "hover:[animation-play-state:paused]",
        )}
      >
        {items.map((item, idx) => (
          <li
            className="group relative flex w-80 max-w-full flex-shrink-0 flex-col justify-between space-y-4 rounded-3xl bg-white px-8 py-6 text-blue shadow-sm transition-colors hover:bg-blue hover:text-white sm:w-96 md:w-[500px]"
            key={idx}
          >
            <h3 className="text-xl font-bold">
              {item.title || "Titre non défini"}
            </h3>

            <blockquote className="text-sm font-light leading-5">
              {item.content}
            </blockquote>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {item.authorImageUrl && (
                  <img
                    src={item.authorImageUrl}
                    className="h-16 w-16 rounded-full border border-gray-200 object-cover"
                    width={64}
                    height={64}
                    alt={item.author}
                  />
                )}
                <div className="flex flex-col">
                  <p className="text-base font-bold">{item.author}</p>
                  <p className="text-sm text-gray-500 group-hover:text-gray-200">
                    {item.position}
                  </p>
                </div>
              </div>
              <div>
                <p className="italic">Note :</p>
                <div className="flex gap-2 font-bold">
                  <Star size={24} className="fill-yellow-300 text-yellow-300" />
                  {item.note}
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
