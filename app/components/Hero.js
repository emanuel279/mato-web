"use client";
import { useState, useEffect, useRef } from "react";

const slides = [
  { type: "image", src: "/ramen-img/imagen inicio.png", duration: 5000 },
  { type: "video", src: "/ramen-img/comercial 1.mp4", duration: 38000 },
  { type: "video", src: "/ramen-img/comercial 2.mp4", duration: 151000 },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [soundOn, setSoundOn] = useState(false);
  const videoRefs = useRef([]);

  useEffect(() => {
    const currentSlide = slides[currentIndex];
    const timer = setTimeout(() => {
      goToNext();
    }, currentSlide.duration);

    slides.forEach((slide, i) => {
      if (slide.type === "video" && videoRefs.current[i]) {
        if (i === currentIndex) {
          videoRefs.current[i].currentTime = 0;
          videoRefs.current[i].muted = !soundOn;
          videoRefs.current[i].play().catch(() => {
            console.log("Autoplay bloqueado");
          });
        } else {
          videoRefs.current[i].pause();
        }
      }
    });

    return () => clearTimeout(timer);
  }, [currentIndex, soundOn]);

  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);
  const goToPrev = () => setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <section className="relative h-[90vh] sm:h-screen flex flex-col justify-center items-center text-center bg-black text-white pt-20 overflow-hidden">
      {/* Slides */}
      <div className="w-full h-full relative">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100 z-20" : "opacity-0 z-10"
            }`}
          >
            {slide.type === "image" ? (
              <img src={slide.src} alt={`Slide ${index}`} className="w-full h-full object-cover" />
            ) : (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={slide.src}
                className="w-full h-full object-cover"
                muted={!soundOn}
                playsInline
              />
            )}
          </div>
        ))}
      </div>

      {/* Botones navegación */}
      <div className="absolute inset-x-0 flex justify-between px-3 sm:px-6 top-1/2 -translate-y-1/2 z-30">
        <button
          onClick={goToPrev}
          className="bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 text-lg sm:text-2xl"
        >
          ◀
        </button>
        <button
          onClick={goToNext}
          className="bg-black/40 text-white p-2 sm:p-3 rounded-full hover:bg-black/70 text-lg sm:text-2xl"
        >
          ▶
        </button>
      </div>

      {/* Botón de sonido */}
      <button
        onClick={() => setSoundOn(!soundOn)}
        className="absolute bottom-6 right-4 sm:right-6 bg-black/50 text-white px-3 sm:px-4 py-2 rounded-lg hover:bg-black/70 text-sm sm:text-base z-30"
      >
        {soundOn ? "🔊 Sonido" : "🔇 Silencio"}
      </button>
    </section>
  );
}
