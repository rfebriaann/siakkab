"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export default function Jumbotorn({
  istana,
  masjid,
  jembatan,
  balai,
  tanjak,
}) {
  return (
    <div>
      <div
        className="relative h-screen bg-[#83E5AB] overflow-hidden"
        style={{
          backgroundImage: "url('/image/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <img
          ref={istana}
          className="experience-middle z-20 absolute scale-105 -bottom-20 object-center w-full"
          src="/image/istana3d.png"
          alt="istana"
        />
        <img
          ref={masjid}
          className="absolute z-10 scale-75 -left-20 top-7"
          src="/image/masjid3d.png"
          width={700}
          height={700}
          alt="masjid"
        />
        <img
          ref={jembatan}
          className="absolute -top-40"
          src="/image/jembatan3d.png"
          width={500}
          height={500}
          alt="jembatan"
        />
        <img
          ref={balai}
          className="absolute z-10 scale-100 -right-28 top-24"
          src="/image/balai3d.png"
          width={900}
          height={900}
          alt="balai"
        />
        <img
          ref={tanjak}
          className="absolute scale-100 -right-28 -top-40"
          src="/image/tanjak3d.png"
          width={600}
          height={600}
          alt="tanjak"
        />
      </div>
    </div>
  );
}
