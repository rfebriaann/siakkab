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
  const pintu = useRef(null);
  const pintukiri = useRef(null);
  const pintukanan = useRef(null);

  useEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: smoothWrapper.current,
      content: smoothContent.current,
      smooth: 1.5,
      effects: true,
    });

    const zoomTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: jumbo.current,
        start: "top top",
        end: "+=2000vh",
        scrub: true,
        pin: true,
        markers: false,
      },
    });

    // gsap.set(pintuhitam.current, {
    //   transformOrigin: "bottom center",
    //   perspective: 1200,
    // });

    // Animasi awal saat elemen muncul dari bawah
    gsap.fromTo(
      [masjid.current, jembatan.current, balai.current, tanjak.current],
      { y: 900, opacity: 1 },
      {
        y: 20,
        opacity: 1,
        stagger: 0.3,
        duration: 2,
        ease: "power2.out",
      }
    );

    // Animasi yang tetap stay saat scrollback
    const stayTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: jumbo.current,
        start: "top center",
        end: "bottom center",
        scrub: true,
        markers: false,
      }
    });
    // zoomTimeline.to(jumbo.current, {
    //   y: -100,
    //   duration: 1,
    //   ease: "power1.inOut",
    // });
    gsap.set(pintukiri.current, {
      transformOrigin: "right center"
    });

    gsap.set(pintukanan.current, {
      transformOrigin: "left center"
    });

    zoomTimeline.to(pintukiri.current, {
      // rotateX: 90,
      x: -90,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
    zoomTimeline.to(pintukanan.current, {
      // rotateX: 90,
      x: 39,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    }, "<");

    // 2️⃣ Setelah itu, baru istana zoom
    zoomTimeline.to(istana.current, {
      scale: 30,
      // opacity: 0,
      ease: "power2.inOut",
    });
    
    zoomTimeline.to([masjid.current, jembatan.current, balai.current, tanjak.current], {
      opacity: 0,
      ease: "power2.inOut",
    },"<");
    
    zoomTimeline.to(pintukiri.current, {
      scale: 40,
      x: -920,
      y: 12,
      opacity: 1,
      ease: "power2.inOut",
    }, "<");
    zoomTimeline.to(pintukanan.current, {
      scale: 40,
      x: 939,
      y: 12,
      opacity: 1,
      ease: "power2.inOut",
    }, "<");

    // Zoom pintu depan BERSAMAAN
    zoomTimeline.to(
      pintu.current,
      {
        scale: 30,
        y: 12,
        ease: "power2.inOut",
      },
      "<"
    );

    // 5️⃣ Section baru muncul
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
    <div ref={smoothWrapper} className="overflow-hidden relative bg-white">
      <div ref={smoothContent} className="relative">
        <div ref={jumbo} className="relative z-20 min-h-screen overflow-hidden">
          <Jumbotorn
            istana={istana}
            masjid={masjid}
            jembatan={jembatan}
            balai={balai}
            tanjak={tanjak}
            pintu={pintu}
            pintukiri={pintukiri}
            pintukanan={pintukanan}
          />
        </div>
        <section
          ref={nextSection}
          className="relative py-10 min-h-screen flex items-start justify-center bg-[#F79E00] text-white text-4xl opacity-0 z-10 -mt-2"
        >
          Hola, section ini masih belum siap
        </section>
        <section className="relative h-screen bg-[#F79E00] text-black flex items-center justify-center text-4xl">
          📜 About Us
        </section>
      </div>
    </div>
  );
}
