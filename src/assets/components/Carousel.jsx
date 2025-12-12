import { useState, useEffect } from "react";

const slides = [
  {
    content: (
      <>
        {/* 상단 메뉴입니다 */}
        💰
        <span className="carousel1st">지역 화폐</span>
        &nbsp;사용 가능
      </>
    ),
    bg: "#ffd700",
  },
  {
    content: (
      <>
        💊
        <span className="carousel2nd">병원비 20% ~ 40%</span>
        &nbsp;지원
      </>
    ),
    bg: "#FF6347",
  },
  {
    content: (
      <>
        ✂️🛁 병원 및 미용 비용&nbsp;
        <span className="carousel3rd">적립금</span>
        &nbsp; 사용 가능
      </>
    ),
    bg: "#8A2BE2",
  },
  {
    content: (
      <>
        🏨🎓 유치원 및 호텔
        <span className="carousel4th">&nbsp;할인</span>
      </>
    ),
    bg: "#00CED1",
  },
  {
    content: (
      <>
        🐾👨‍🏫
        <span className="carousel5th">전문 훈련사</span>
        &nbsp;상주
      </>
    ),
    bg: "#FF69B4",
  },
  {
    content: (
      <>
        🩺
        <span className="carousel6th">기초검진</span>
        &nbsp;무료
      </>
    ),
    bg: "#90EE90",
  },
  {
    content: (
      <>
        <img
          src="../public/image/CarouselImg01.jpg"
          alt="캐러셀 이미지01"
          className="carousel-img"
        ></img>
      </>
    ),
  },
  {
    content: (
      <>
        <img
          src="../public/image/CarouselImg02.jpg"
          alt="캐러셀 이미지02"
          className="carousel-img"
        ></img>
      </>
    ),
  },
];

export default function Carousel() {
  const [index, setIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (index === slides.length - 1) {
        setIsTransitioning(false);
        setIndex(0);
      } else {
        setIsTransitioning(true);
        setIndex((prev) => prev + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return (
    <div
      className="slider-container"
      style={{
        overflow: "hidden",
        width: "67%",
        margin: "0 auto",
      }}
    >
      <div
        className="slider-track"
        style={{
          display: "flex",
          transition: isTransitioning ? "transform 1s ease" : "none",
          transform: `translateX(${(slides.length - 1 - index) * -100}%)`,
        }}
      >
        {slides.map((slide, i) => (
          <div
            key={i}
            className="slide"
            style={{
              background: slide.bg,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "3.5rem",
              width: "100%",
              flexShrink: 0,
              padding: "15px 0 15px 0",
            }}
          >
            {slide.content}
          </div>
        ))}
      </div>
    </div>
  );
}
