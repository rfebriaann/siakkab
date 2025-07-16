import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export function Animation({
  istana,
  masjid,
  jembatan,
  balai,
  tanjak,
  pintu,
  pintukiri,
  pintukanan,
  jumbo,
  nextSection,
}) {
  const smoother = ScrollSmoother.create({
    wrapper: ".smooth-wrapper",
    content: ".smooth-content",
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
    },
  });
  // zoomTimeline.to(jumbo.current, {
  //   y: -100,
  //   duration: 1,
  //   ease: "power1.inOut",
  // });
  gsap.set(pintukiri.current, {
    transformOrigin: "right center",
  });

  gsap.set(pintukanan.current, {
    transformOrigin: "left center",
  });

  zoomTimeline.to(pintukiri.current, {
    // rotateX: 90,
    x: -95,
    opacity: 1,
    duration: 1.5,
    ease: "power2.inOut",
  });
  zoomTimeline.to(
    pintukanan.current,
    {
      // rotateX: 90,
      x: 37,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    },
    "<"
  );

  // 2️⃣ Setelah itu, baru istana zoom
  zoomTimeline.to(istana.current, {
    scale: 20,
    // opacity: 0,
    ease: "power2.inOut",
  });

  zoomTimeline.to(
    [masjid.current, jembatan.current, balai.current, tanjak.current],
    {
      opacity: 0,
      ease: "power2.inOut",
    },
    "<"
  );

  zoomTimeline.to(
    pintukiri.current,
    {
      scale: 28,
      x: -920,
      y: 12,
      opacity: 1,
      ease: "power2.inOut",
    },
    "<"
  );
  zoomTimeline.to(
    pintukanan.current,
    {
      scale: 28,
      x: 829,
      y: 12,
      opacity: 1,
      ease: "power2.inOut",
    },
    "<"
  );

  // Zoom pintu depan BERSAMAAN
  zoomTimeline.to(
    pintu.current,
    {
      scale: 22,
      y: 12,
      ease: "power2.inOut",
    },
    "<="
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

  const cards = gsap.utils.toArray(".card");

  cards.forEach((card, i) => {
    gsap.set(card, {
      y: (cards.length - i) * 50,
      scale: 0.9 + i * 0.03,
      zIndex: i,
    });
  });

  gsap.to(cards, {
    y: -250,
    scale: 1.2,
    stagger: 0.3,
    ease: "power2.out",
    scrollTrigger: {
      trigger: ".guided-section",
      start: "top center", // ❗ sebelum masuk layar
      end: "+=400vh",
      scrub: 1,
      markers: true,
    },
  });

  // 2️⃣ Spread - Saat masuk layar penuh

  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".guided-section",
        start: "top top",
        end: "+=1500",
        scrub: 2,
        pin: true,
        markers: true,
      },
    })
    .to(cards, {
      x: (i) => [-450, 0, 450, -650, 500][i],
      y: (i) => [-350, 200, -400, 150, 80][i],
      scale: () => gsap.utils.random(0.5, 1.2),
      // scale: 1,
      rotate: 0,
      stagger: 0.2,
      ease: "power2.out",
    })
    .to(
      cards,
      {
        y: "-=300", // naik 300px
        opacity: 0, // fade out
        stagger: 0.2, // satu per satu
        ease: "power2.inOut",
      },
      "+=0.5"
    );

  return () => {
    smoother.kill();
  };
}
