const TopMenu = () => {
  return (
    <>
      {/* 상단 메뉴입니다 */}
      <div className="TopMenu-div">
        <ul className="TopMenu">
          <li className="mainMenu">
            소개
            <ul className="subMenu">
              <li>지점</li>
            </ul>
          </li>

          <li className="mainMenu">
            지원
            <ul className="subMenu">
              <li>미용</li>
              <li>봉사</li>
            </ul>
          </li>

          <li className="mainMenu">
            기부
            <ul className="subMenu">
              <li>용품</li>
              <li>현금</li>
            </ul>
          </li>

          <li className="mainMenu">
            강아지
            <ul className="subMenu">
              <li>소형견</li>
              <li>중형견</li>
              <li>대형견</li>
            </ul>
          </li>

          <li className="mainMenu">
            고양이
            <ul className="subMenu">
              <li>소형묘</li>
              <li>중형묘</li>
              <li>대형묘</li>
            </ul>
          </li>

          <li className="mainMenu">
            문의하기
            <ul className="subMenu">
              <li>자주하는 질문</li>
              <li>1:1 질문하기</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  );
};

export default TopMenu;
