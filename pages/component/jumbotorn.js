"use client";
import Image from "next/image";
import { forwardRef } from "react";

const Jumbotorn = forwardRef((props, ref) => {
  const { istana, masjid, jembatan, balai, tanjak, pintu, pintukiri, pintukanan, awan } =
    props;

  return (
    <div
      className="relative min-h-screen overflow-hidden bg-white"
        style={{
          backgroundImage: "url('/image/bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          perspective: "1000px", 
        }}
      >
      {/* Istana utama */}
      <img
          ref={awan}
          src="/image/awan.webp"
          className="absolute -bottom-60 left-1/2 -translate-x-[27%] z-50  mix-blend-screen hidden"
          width={1200}
          height={1200}
          alt="awan"
          style={{ transformOrigin: "center bottom" }}
      />
      <img
        ref={istana}
        src="/image/istana3.png"
        alt="istana"
        className="absolute -bottom-2 left-1/2 -translate-x-1/2 z-20"
        style={{ transformOrigin: "center bottom" }}
      />
      <img
          ref={pintukiri}
          src="/image/pintukiri.svg"
          className="absolute -bottom-4 left-1/2 -translate-x-[115%] z-40"
          width={48}
          height={48}
          alt="Pintu"
          style={{ transformOrigin: "center bottom" }}
      />
      <img
          ref={pintukanan}
          src="/image/pintukanan.svg"
          className="absolute -bottom-4 left-1/2 -translate-x-[20%] z-40"
          width={48}
          height={48}
          alt="Pintu"
          style={{ transformOrigin: "center bottom" }}
      />
      <img
          ref={pintu}
          src="/image/pintuputih.svg"
          className="absolute -bottom-2 left-1/2 -translate-x-[57%] z-30"
          width={86}
          height={86}
          alt="Pintu"
          style={{ transformOrigin: "center bottom" }}
      />
      <img
        ref={masjid}
        className="absolute z-10 scale-75 -left-24 top-7"
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
  );
});

export default Jumbotorn;
