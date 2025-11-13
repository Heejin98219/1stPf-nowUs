import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopBtn = () => {
  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 상단으로 이동하는 버튼입니다 */}
      <div>
        <button onClick={ScrollUp}>
          <FontAwesomeIcon icon={faArrowUp} size="2xl"></FontAwesomeIcon>
        </button>
      </div>
    </>
  );
};

export default ScrollTopBtn;
