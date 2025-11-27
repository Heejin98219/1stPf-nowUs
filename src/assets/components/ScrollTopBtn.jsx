import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTop = () => {
  const ScrollUp = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* 상단으로 이동하는 버튼 */}
      <button className="arrow-up" onClick={ScrollUp}>
        <FontAwesomeIcon icon={faArrowUp} size="lg" />
      </button>
    </>
  );
};

export default ScrollTop;
