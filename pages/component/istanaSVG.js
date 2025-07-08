export default function IstanaSVG() {
  return (
    <svg
      id="istana-svg"
      viewBox="0 0 800 600"
      className="w-full h-auto"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Bangunan utama */}
      <rect x="100" y="100" width="600" height="400" fill="#d4af37" />

      {/* Pintu kiri */}
      <rect
        id="pintu-kiri"
        x="300"
        y="300"
        width="50"
        height="150"
        fill="#8b4513"
      />

      {/* Pintu kanan */}
      <rect
        id="pintu-kanan"
        x="450"
        y="300"
        width="50"
        height="150"
        fill="#8b4513"
      />
    </svg>
  );
}
