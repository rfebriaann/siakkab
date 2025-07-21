"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Pintu() {
  const [entered, setEntered] = useState(false);
  const containerRef = useRef(null);
  const doorRef = useRef(null);
  const linesRef = useRef([]);

  useEffect(() => {
    linesRef.current.forEach((line) => {
      gsap.set(line, {
        scale: 1,
        transformOrigin: "center",
      });
    });
  }, []);

  const handleEnter = () => {
    setEntered(true);

    const tl = gsap.timeline({
      defaults: {
        ease: "power2.inOut",
        duration: 1.5,
      },
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          onComplete: () => {
            setEntered("finished");
          },
        });
      },
    });

    tl.to(doorRef.current, {
      scale: 20,
      rotateX: -30,
      transformOrigin: "center center",
    }).to(
      doorRef.current,
      {
        opacity: 0,
      },
      "-=1"
    );
  };

  return (
    <main className="w-screen h-screen overflow-hidden bg-black text-white">
      {entered !== "finished" && (
        <div
          ref={containerRef}
          className="w-full h-full relative flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          <div
            ref={doorRef}
            onClick={handleEnter}
            className="w-[100px] h-[180px] bg-white z-10 cursor-pointer"
            style={{
              transformStyle: "preserve-3d",
              borderRadius: "4px",
            }}
          />
        </div>
      )}
      {entered === "finished" && (
        <section className="w-full h-full flex items-center justify-center bg-red-500 text-black text-3xl font-bold transition-opacity duration-1000"></section>
      )}
    </main>
  );
}
