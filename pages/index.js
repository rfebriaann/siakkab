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
  const title1section = useRef(null);

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
      x: -95,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
    zoomTimeline.to(pintukanan.current, {
      // rotateX: 90,
      x: 37,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    }, "<");

    // 2️⃣ Setelah itu, baru istana zoom
    zoomTimeline.to(istana.current, {
      scale: 20,
      // opacity: 0,
      ease: "power2.inOut",
    });
    
    zoomTimeline.to([masjid.current, jembatan.current, balai.current, tanjak.current], {
      opacity: 0,
      ease: "power2.inOut",
    },"<");
    
    zoomTimeline.to(pintukiri.current, {
      scale: 28,
      x: -920,
      y: 12,
      opacity: 1,
      ease: "power2.inOut",
    }, "<");
    zoomTimeline.to(pintukanan.current, {
      scale: 28,
      x: 829,
      y: 12,
      opacity: 1,
      ease: "power2.inOut",
    }, "<");

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
        start: "top center",     // ❗ sebelum masuk layar
        end: "+=400vh",
        scrub: 1,
        markers: true,
      },
    });

    // 2️⃣ Spread - Saat masuk layar penuh
    
    gsap.timeline({
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
    .to(cards, {
      y: "-=300",        // naik 300px
      opacity: 0,        // fade out
      stagger: 0.2,      // satu per satu
      ease: "power2.inOut",
    }, "+=0.5");  

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
        {/* <section
          ref={nextSection}
          className="overflow-hidden relative py-10 px-20 min-h-screen flex flex-col items-start justify-between 
          bg-[radial-gradient(ellipse_at_top,_#F79E00_10%,_#F79E00_80%,_#FFB331_20%,_#CC8201_100%)]
        text-white leading-none z-10 -mt-2"
        >
          <div className="basis-4/5 w-3/4 flex flex-col gap-5">
            <h1 className="font-Spartam text-[#39100c] font-bold text-[72px] leading-none">
              Kenalan dulu yuk dengan siapa kita & apa yang kita lakukan
            </h1>
            <h4 className="font-figtree text-[42px] text-[#39100c] font-semibold">
              Siak bukan cuma nama di peta tapi rumah bagi ribuan cerita, sejarah, dan kebersamaan.
            </h4>
          </div>
          <div className="basis-3/5 w-full flex bg-[#150000] border-[#FDFABB] border-t-4 py-10 px-10 gap-5">
            <div className="w-3/5 flex items-start justify-start">
              <img
                src="/image/quote.svg"
                alt="quote"
                width={30}
              />
              <div>
                <h4 className="font-figtree text-[26px] text-[#FDFABB] font-semibold">
                  Dari Istana Siak sampai musik Zapin yang terus mengalun, warisan budaya kami bukan hanya untuk dikenang tapi juga untuk dijalani bersama generasi baru.
                </h4>
              </div>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <h2 className="font-Spartam text-[#F79E00] font-bold text-[32px]">Komunitas yang ramah & aktif</h2>
              <h4 className="font-figtree text-[18px] text-[#F79E00] font-medium">
                  Dari Istana Siak sampai musik Zapin yang terus mengalun, warisan budaya kami bukan hanya untuk dikenang tapi juga untuk dijalani bersama generasi baru.
                </h4>
            </div>
            <div className="w-1/3 flex flex-col gap-2">
              <h2 className="font-Spartam text-[#F79E00] font-bold text-[32px]">Daerah yang terbuka untuk ide baru</h2>
              <h4 className="font-figtree text-[18px] text-[#F79E00] font-medium">
                  Di Siak, kami terbuka untuk ide, kolaborasi, dan teknologi. Mulai dari layanan publik digital sampai ruang kreatif anak muda semua bisa bertumbuh bareng.
                </h4>
            </div>
          </div>
        </section> */}
        <section
          ref={nextSection}
          className="guided-section overflow-hidden relative py-10 px-20 min-h-screen flex flex-col items-start justify-between 
          bg-[#FFFFFF]
        text-white leading-none z-10 -mt-2"
        >
          <h2 ref={title1section} className="absolute inset-0 flex items-center justify-center z-10 font-funnel text-5xl text-black text-center">
            Cerita-cerita dari Negeri Istana
          </h2>
          <div className="cards-wrapper absolute inset-0 flex items-end justify-center pointer-events-none">
            <div className="cards-wrapper absolute inset-0 flex items-end justify-center pointer-events-none">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="card bg-white w-[250px] h-[350px] shadow-lg rounded-sm absolute overflow-hidden flex items-center justify-center"
                >
                  <img
                    src={`/image/wpp/bg${i}.jpg`}
                    alt={`Gambar ${i}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="h-screen w-full bg-[#FFFFFF] flex items-center justify-center text-white text-center">
          📜 About Us
        </section>
      </div>
    </div>
  );
}
