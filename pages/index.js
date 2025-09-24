"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Home() {
<<<<<<< HEAD
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
  const awan = useRef(null);
=======
  const containerRef = useRef(null);
  const maskRef = useRef(null);
>>>>>>> b8332ae940f4059d357d35977c4b68935237397c

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scale = 1 + scrollY / 500;

<<<<<<< HEAD
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

    // Random Text Animation Function
    const animateRandomText = () => {
      const textElement = title1section.current;
      if (!textElement) return;

      const text = "Cerita-cerita dari Negeri Istana";
      
      // Split text into individual characters
      const chars = text.split('').map((char, index) => {
        if (char === ' ') {
          return '<span class="animated-char" data-char="' + index + '">&nbsp;</span>';
        }
        return '<span class="animated-char" data-char="' + index + '">' + char + '</span>';
      });

      // Set the HTML with wrapped characters
      textElement.innerHTML = chars.join('');

      // Get all character spans
      const charElements = textElement.querySelectorAll('.animated-char');

      // Set initial state for all characters
      gsap.set(charElements, {
        opacity: 0,
        filter: 'blur(25px)',
        scale: 0.2,
        y: 60,
        transformOrigin: "center center"
      });

      // Create array of indices and shuffle them for random order
      const indices = Array.from({ length: charElements.length }, (_, i) => i);
      
      // Fisher-Yates shuffle algorithm for truly random order
      for (let i = indices.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [indices[i], indices[j]] = [indices[j], indices[i]];
      }

      // Create timeline for the animation with ScrollTrigger
      const textTimeline = gsap.timeline({
        scrollTrigger: {
          trigger: nextSection.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
          markers: false
        }
      });

      // Animate characters in random order
      indices.forEach((index, i) => {
        if (text[index] === ' ') {
          textTimeline.to(charElements[index], {
            opacity: 1,
            duration: 0.1
          }, i * 0.08);
        } else {
          textTimeline.to(charElements[index], {
            opacity: 1,
            filter: 'blur(0px)',
            scale: 1,
            y: 0,
            duration: 0.8,
            ease: "power1.inOut"
          }, i * 0.08);
        }
      });
    };

    // Call the text animation function
    animateRandomText();

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

    gsap.set(pintukiri.current, {
      transformOrigin: "right center"
    });

    gsap.set(pintukanan.current, {
      transformOrigin: "left center"
    });

    zoomTimeline.to(pintukiri.current, {
      x: -95,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    });
    
    zoomTimeline.to(pintukanan.current, {
      x: 37,
      opacity: 1,
      duration: 1.5,
      ease: "power2.inOut",
    }, "<");

    // Setelah itu, baru istana zoom
    zoomTimeline.to(istana.current, {
      scale: 20,
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

    // Section baru muncul
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
        start: "top center", 
        end: "+=400vh",
        scrub: 1,
        markers: false,
      },
    });

    // Spread - Saat masuk layar penuh
    gsap.timeline({
      scrollTrigger: {
        trigger: ".guided-section",
        start: "top top",
        end: "+=1500",
        scrub: 2,
        pin: true,
        markers: false,
      },
    })
    .to(cards, {
      x: (i) => [-450, 0, 450, -650, 500][i],
      y: (i) => [-350, 200, -400, 150, 80][i],
      scale: () => gsap.utils.random(0.5, 1.2),
      rotate: 0,
      stagger: 0.2,
      ease: "power2.out",
    })
    .to(cards, {
      y: "-=300",
      opacity: 0,
      stagger: 0.2,
      ease: "power2.inOut",
    }, "+=0.5");

    return () => {
      smoother.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
=======
      if (maskRef.current) {
        gsap.to(maskRef.current, {
          scale,
          duration: 0.3,
          ease: "power2.out",
        });
      }
>>>>>>> b8332ae940f4059d357d35977c4b68935237397c
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
<<<<<<< HEAD
    <div>
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
              awan={awan}
            />
          </div>

          <section
            ref={nextSection}
            className="guided-section overflow-hidden relative py-10 px-20 min-h-screen flex flex-col items-start justify-between bg-[#85B55D] text-white leading-none z-10 -mt-2"
          >
            <h2 
              ref={title1section} 
              className="absolute inset-0 flex items-center justify-center z-10 font-Rammetto text-5xl text-black text-center"
              
            >
              {/* Text will be dynamically inserted here */}
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
          
          <section className="h-screen w-full bg-white flex items-center justify-center text-black text-center">
            📜 About Us
          </section>
        </div>
      </div>

      <style jsx global>{`
        .animated-char {
          display: inline-block;
          position: relative;
          white-space: pre;
        }
        
        .animated-char:hover {
          transform: scale(1.1);
          transition: transform 0.2s ease;
=======
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
>>>>>>> b8332ae940f4059d357d35977c4b68935237397c
        }
      `}</style>
    </div>
  );
}