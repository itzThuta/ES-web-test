import { useEffect, useMemo, useRef, useState } from "react";
import Logo from "../assets/logo.png";

function Slide({ title, subtitle }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 py-14 sm:py-16 lg:py-24">
      <div className="order-1 lg:order-2 flex items-center justify-center">
        <div className="relative">
          <div className="absolute -inset-6 bg-brand-200 blur-2xl rounded-full opacity-60"></div>
          <img
            src={Logo}
            alt="ExpireSense logo"
            className="relative w-40 h-40 sm:w-56 sm:h-56 object-contain select-none mx-auto"
            draggable="false"
          />
        </div>
      </div>
      <div className="order-2 lg:order-1 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-brand-900">
          {title}
        </h1>
        <p className="mt-4 text-base sm:text-lg text-slate-700">{subtitle}</p>
        <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
          <a href="#contact" className="btn-brand">Contact Us</a>
          <a href="#how-it-works" className="btn-brand-outline">How it works</a>
        </div>
      </div>
    </div>
  );
}

export default function HeroCarousel() {
  const slides = useMemo(
    () => [
      {
        title: "Smart food tracking to reduce waste",
        subtitle:
          "Perfect for busy people and students. Never miss an expiry again.",
      },
      {
        title: "Scan receipts with OCR",
        subtitle: "We auto-detect food items and suggest expiry dates for you.",
      },
      {
        title: "Get alerts & recipe ideas",
        subtitle: "Notifications before spoilage and creative ways to use items.",
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const timerRef = useRef(null);
  const isHovering = useRef(false);
  const touchStartX = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!isHovering.current) setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timerRef.current);
  }, [slides.length]);

  const goTo = (i) => setIndex(i);
  const next = () => setIndex((i) => (i + 1) % slides.length);
  const prev = () => setIndex((i) => (i - 1 + slides.length) % slides.length);

  return (
    <div
      className="hero-surface"
      onMouseEnter={() => { isHovering.current = true; }}
      onMouseLeave={() => { isHovering.current = false; }}
      onTouchStart={(e) => { touchStartX.current = e.changedTouches[0].clientX; }}
      onTouchEnd={(e) => {
        const dx = e.changedTouches[0].clientX - (touchStartX.current ?? 0);
        if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
        touchStartX.current = null;
      }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${index * 100}%)` }}
            >
              {slides.map((s, i) => (
                <div key={i} className="min-w-full">
                  <Slide title={s.title} subtitle={s.subtitle} />
                </div>
              ))}
            </div>
          </div>

          <button
            aria-label="Previous slide"
            onClick={prev}
            className="hidden sm:flex absolute -left-2 md:-left-6 lg:-left-12 xl:-left-34 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-3 py-2 text-slate-900 shadow"
          >
            ‹
          </button>
          <button
            aria-label="Next slide"
            onClick={next}
            className="hidden sm:flex absolute -right-2 md:-right-6 lg:-right-12 xl:-right-10 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white px-3 py-2 text-slate-900 shadow"
          >
            ›
          </button>

        
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => goTo(i)}
                className={`h-2.5 w-2.5 rounded-full transition ${
                  i === index ? "bg-brand-700" : "bg-brand-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
