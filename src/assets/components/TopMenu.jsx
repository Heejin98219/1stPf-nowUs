const TopMenu = () => {
  return (
    <>
      {/* 상단 메뉴입니다 */}
      <div>
        <div>
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
              자주하는 질문
              <ul className="subMenu">
                <li>문의하기</li>
              </ul>
            </li>
            <li className="mainMenu">
              로그인
              <ul className="subMenu">
                <li>회원가입</li>
                <li>아이디 찾기</li>
                <li>비밀번호 찾기</li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TopMenu;
