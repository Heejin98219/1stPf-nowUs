import { useState, useEffect } from "react";

const slides = [
  {
    content: (
      <>
        💰
        <span
          style={{
            fontWeight: "bold",
            color: "#000",
            fontFamily: "ChusaSarang",
            marginTop: "25px",
            fontSize: "80px",
          }}
        >
          지역 화폐
        </span>
        &nbsp;사용 가능
      </>
    ),
    bg: "#FFD700",
  },
  {
    content: (
      <>
        💊
        <span
          style={{
            fontWeight: "bolder",
            color: "#fff",
            fontFamily: "FounderYooGeonWook",
            marginTop: "30px",
            fontSize: "70px",
          }}
        >
          병원비 20% ~ 40%
        </span>
        &nbsp;지원
      </>
    ),
    bg: "#FF6347",
  },
  {
    content: (
      <>
        ✂️🛁 병원 및 미용 비용&nbsp;
        <span
          style={{
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "FounderYooGeonWook",
            marginTop: "30px",
            fontSize: "75px",
          }}
        >
          적립금
        </span>
        &nbsp; 사용 가능
      </>
    ),
    bg: "#8A2BE2",
  },
  {
    content: (
      <>
        🏨🎓 유치원 및 호텔
        <span
          style={{
            fontWeight: "bolder",
            color: "#000",
            fontFamily: "FounderYooGeonWook",
            marginTop: "32.5px",
            fontSize: "75px",
          }}
        >
          &nbsp;할인
        </span>
      </>
    ),
    bg: "#00CED1",
  },
  {
    content: (
      <>
        🐾👨‍🏫
        <span
          style={{
            fontWeight: "bold",
            color: "#fff",
            fontFamily: "GanaChocolate",
            marginTop: "10px",
            fontSize: "75px",
          }}
        >
          전문 훈련사
        </span>
        &nbsp;상주
      </>
    ),
    bg: "#FF69B4",
  },
  {
    content: (
      <>
        🩺
        <span
          style={{
            fontWeight: "bolder",
            color: "#000",
            fontFamily: "YeogiOttaeJalnan",
            marginTop: "15px",
            fontSize: "50px",
          }}
        >
          기초 검진
        </span>
        무료
      </>
    ),
    bg: "#90EE90",
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
        width: "100%",
        height: "225px",
      }}
    >
      <div
        className="slider-track"
        style={{
          display: "flex",
          transition: isTransitioning ? "transform 1s ease" : "none",
          transform: `translateX(${(slides.length - 1 - index) * -100}%)`, // 오른쪽으로 이동 효과
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
