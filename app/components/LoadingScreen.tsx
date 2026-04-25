"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { images } from "../lib/images";

export function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 1800);
    const hideTimer = setTimeout(() => setVisible(false), 2400);
    return () => { clearTimeout(fadeTimer); clearTimeout(hideTimer); };
  }, []);

  if (!visible) return null;

  return (
    <div
      className={`fixed inset-0 z-[100] bg-[#1a0a3c] flex flex-col items-center justify-center gap-6 transition-opacity duration-600 ${fading ? "opacity-0" : "opacity-100"}`}
    >
      {/* Mascot bounce */}
      <div className="animate-bounce">
        <Image
          src={images.mascot}
          alt="Mascota Tours Tlaxcala"
          width={160}
          height={160}
          className="object-contain drop-shadow-2xl"
          priority
        />
      </div>

      {/* Logo */}
      <Image
        src={images.logo}
        alt="Tours Tlaxcala"
        width={180}
        height={80}
        className="object-contain"
        priority
      />

      {/* Dots loader */}
      <div className="flex gap-2 mt-2">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="w-2 h-2 rounded-full bg-orange-400 animate-pulse"
            style={{ animationDelay: `${i * 200}ms` }}
          />
        ))}
      </div>
    </div>
  );
}
