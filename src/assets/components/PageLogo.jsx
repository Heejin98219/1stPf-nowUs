import { Link } from "react-router-dom";

const PageLogo = () => {
  return (
    <header className="header">
      {/* 중앙 로고 */}
      <div className="logo-center">
        <img src="/image/LogoImg.jpg" className="pageLogo" alt="로고 이미지" />
      </div>

      {/* 우측 로그인 메뉴 */}
      <div className="login-menues">
        <Link to="/login">로그인</Link>
        &nbsp;|&nbsp;
        <Link to="/join">회원가입</Link>
        &nbsp;|&nbsp;
        <Link to="/findId">아이디 찾기</Link>
      </div>
    </header>
  );
};

export default PageLogo;
