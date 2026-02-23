import { useEffect, useState } from "react";

type Props = {
  className?: string;
  alt?: string;
};

export default function Logo({ className = "w-full h-full", alt = "KARIB'IA" }: Props) {
  const [imgOk, setImgOk] = useState<boolean | null>(null);

  useEffect(() => {
    const img = new Image();
    img.src = "/logo.png";
    img.onload = () => setImgOk(true);
    img.onerror = () => setImgOk(false);
  }, []);

  if (imgOk) {
    return <img src="/logo.png" alt={alt} className={className} />;
  }

  // Fallback SVG (same as original site logo)
  return (
    <svg viewBox="0 0 100 100" className={className}>
      <path d="M35 25 V75 M35 50 L65 25 M45 42 L65 75" strokeLinecap="square" />
      <circle cx="35" cy="25" r="3" fill="currentColor" />
      <circle cx="35" cy="75" r="3" fill="currentColor" />
      <circle cx="65" cy="25" r="3" fill="currentColor" />
      <circle cx="65" cy="75" r="3" fill="currentColor" />
      <circle cx="35" cy="50" r="3" fill="currentColor" />
      <circle cx="50" cy="38" r="3" fill="currentColor" />
      <circle cx="55" cy="58" r="3" fill="currentColor" />
    </svg>
  );
}
