"use client";
import Image from "next/image";
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

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper.current,
      content: smoothContent.current,
      smooth: 1.5,
      effects: true,
    });

    ScrollTrigger.create({
      trigger: jumbo.current,
      start: "top top",
      end: "+=800vh",
      pinSpacing: false,
      pin: true,
    });

    gsap.fromTo(
      [masjid.current, jembatan.current, balai.current, tanjak.current],
      { y: 1190 },
      {
        y: 0,
        stagger: 0.3,
        duration: 2,
        ease: "power2.out",
      }
    );

    gsap.fromTo(
      istana.current,
      { y: 0 },
      {
        y: -140,
        scale: 1.2,
        scrollTrigger: {
          trigger: istana.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 3,
          markers: true,
        },
      }
    );

    return () => {
      smoother.kill();
    };
  }, []);

  return (
    <div ref={smoothWrapper} className="overflow-hidden">
      <div ref={smoothContent}>
        <div ref={jumbo}>
          <Jumbotorn
            istana={istana}
            masjid={masjid}
            jembatan={jembatan}
            balai={balai}
            tanjak={tanjak}
          />
        </div>
        <div className="h-screen"></div>
        <div className="h-screen"></div>
      </div>
    </div>
  );
}