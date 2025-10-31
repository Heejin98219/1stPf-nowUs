import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div>
        <h1 className="title">로그인</h1>

        <div className="inputs">
          {/* 아이디 입력칸 */}
          <input
            name="userId"
            type="text"
            placeholder="아이디를 입력해 주세요"
            className="login-idTbx"
          />
          <br />

          {/* 비밀번호 입력칸 */}
          <input
            name="userPw"
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            className="login-pwTbx"
          />
          <br />

          {/* 로그인 버튼 */}
          <button className="loginBtn">로그인</button>

          {/* 추가 메뉴 */}
          <div>
            <ul className="extraMenu">
              <li>
                <Link to="/join">회원가입&nbsp;|&nbsp;</Link>
              </li>
              <li>
                <Link to="/findId">아이디 찾기&nbsp;|&nbsp;</Link>
              </li>
              <li>
                <Link to="/findPw">비밀번호 찾기</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
