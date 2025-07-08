"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import Jumbotorn from "./component/jumbotorn";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Home() {
  const istana = useRef(null);
  const masjid = useRef(null);
  const jembatan = useRef(null);
  const balai = useRef(null);
  const tanjak = useRef(null);
  const smoothWrapper = useRef(null);
  const smoothContent = useRef(null);
  const jumbo = useRef(null);
  const nextSection = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper.current,
      content: smoothContent.current,
      smooth: 1.5,
      effects: true,
    });

    // Zoom + animasi buka pintu
    const zoomTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: jumbo.current,
        start: "top top",
        end: "+=250vh",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    zoomTimeline.to(istana.current, {
      scale: 30,
      ease: "power2.inOut",
    });

    zoomTimeline.to(
      [masjid.current, balai.current],
      {
        scale: 0.5,
        opacity: 1,
        ease: "power2.out",
      },
      "<"
    );

    zoomTimeline.to(
      [jembatan.current, masjid.current, balai.current, tanjak.current],
      {
        y: -100,
        ease: "power2.out",
      },
      "<"
    );
    gsap.fromTo(
      nextSection.current,
      { opacity: 0, scale: 1 },
      {
        opacity: 1,
        scale: 1,
        duration: 1.5,
        ease: "power2.out",
      }
    );
    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div ref={smoothWrapper} className="overflow-hidden relative">
      <div ref={smoothContent} className="relative">
        {/* SECTION 1 - Jumbotron */}
        <div ref={jumbo} className="relative z-20 min-h-screen overflow-hidden">
          <Jumbotorn
            istana={istana}
            masjid={masjid}
            jembatan={jembatan}
            balai={balai}
            tanjak={tanjak}
          />
        </div>

        {/* SECTION 2 - Muncul setelah zoom */}
        <section
          ref={nextSection}
          className="relative min-h-screen flex items-center justify-center bg-black text-white text-4xl opacity-0 z-10 -mt-20"
        >
          🚀 Section Baru
        </section>

        {/* SECTION 3 */}
        <section className="relative h-screen bg-white text-black flex items-center justify-center text-4xl">
          📜 About Us
        </section>
      </div>
    </div>
  );
}
