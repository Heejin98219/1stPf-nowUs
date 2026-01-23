import { useState, useEffect } from "react";

const slides = [
  {
    content: (
      <img
        src="../public/image/CarouselImg01.jpg"
        alt="1"
        className="carousel-img"
      />
    ),
  },
  {
    content: (
      <img
        src="../public/image/CarouselImg02.jpg"
        alt="2"
        className="carousel-img"
      />
    ),
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-div">
      <div
        style={{
          display: "flex",
          transition: "transform 1s ease",
          transform: `translateX(-${index * 100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            style={{
              width: "100%",
              flexShrink: 0,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
}
