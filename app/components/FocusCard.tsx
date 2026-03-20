"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

type Card = {
  title: string;
  src: string;
};

export const Card = React.memo(
  ({
    card,
    index,
    hovered,
    setHovered,
  }: {
    card: Card;
    index: number;
    hovered: number | null;
    setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  }) => {
    const handleOpen = () => {
      const el = document.getElementById(card.title);
      if (!el) return;

      const allAnimated = [el, ...Array.from(el.querySelectorAll("*"))];

      const saved = allAnimated.map((node) => {
        const classes = Array.from(node.classList).filter((c) =>
          c.startsWith("animate-")
        );
        classes.forEach((c) => node.classList.remove(c));
        return { node, classes };
      });

      el.classList.add("hide");

      requestAnimationFrame(() => {
        el.classList.remove("hide");
        requestAnimationFrame(() => {
          saved.forEach(({ node, classes }) => {
            classes.forEach((c) => node.classList.add(c));
          });
        });
      });
    };

    return (
      <div
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(null)}
        onPointerUp={handleOpen}
        className={cn(
          "rounded-lg relative cursor-pointer bg-gray-100 dark:bg-neutral-900 overflow-hidden h-60 md:h-96 w-full transition-all duration-300 ease-out",
          hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
        )}
      >
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background: `url('${card.src}')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div
          className={cn(
            "absolute inset-0 bg-black/50 flex items-end py-8 px-4 transition-opacity duration-300",
            hovered === index ? "opacity-100" : "opacity-0"
          )}
        >
          <div className="text-xl md:text-2xl font-medium bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-200">
            {card.title}
          </div>
        </div>
      </div>
    );
  }
);

Card.displayName = "Card";

export function FocusCards({ cards }: { cards: Card[] }) {
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-5 gap-3 lg:gap-8 max-w-[80%] my-[10%] mx-auto w-full">
      {cards.map((card, index) => (
        <Card
          key={card.title}
          card={card}
          index={index}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}