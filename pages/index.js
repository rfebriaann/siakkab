"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
  const containerRef = useRef(null);
  const maskRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = 1 + scrollY / 500;

      if (maskRef.current) {
        gsap.to(maskRef.current, {
          scale,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-[200vh] bg-white">
      {/* Content di belakang masking */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Masking layer */}
      <div className="fixed inset-0 z-10 flex items-center justify-center">
        <div ref={maskRef} className="w-full h-full bg-black mask-style"></div>
      </div>

      {/* Konten scroll */}
      <div
        ref={containerRef}
        className="relative z-20 w-full h-full bg-black text-black mt-[100vh] px-10 py-20"
      >
        <h1 className="text-5xl font-bold">Scroll to Zoom the Mask</h1>
        <p className="mt-10 text-xl">
          Halaman ini memiliki efek zoom menggunakan GSAP saat scroll.
        </p>
      </div>

      <style jsx>{`
        .mask-style {
          -webkit-mask-image: url("/image/mask.svg");
          mask-image: url("/image/mask.svg");
          -webkit-mask-repeat: no-repeat;
          mask-repeat: no-repeat;
          -webkit-mask-position: center;
          mask-position: center;
          -webkit-mask-size: contain;
          mask-size: contain;
          transition: transform 0.3s ease;
        }
      `}</style>
    </div>
  );
}
