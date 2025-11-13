import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ScrollTopBtn = () => {
  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 상단 올라가는 버튼입니다 */}
      <div>
        <button><FontAwesomeIcon icon={faArrowUp} size="2xl"></button>
      </div>
    </>
  );
};

export default ScrollTopBtn;
