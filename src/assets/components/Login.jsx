import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      {/* 로그인 입니다 */}
      <div>
        <div>
          <h1 className="title">로그인</h1>
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="아이디를 입력해 주세요"
            className="login-idTbx"
          ></input>
          <br />
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            className="login-pwTbx"
          ></input>
          <br />
          <button className="loginBtn">로그인</button>
          <div>
            <ul className="extraMenu">
              <li>
                <Link to="/join">회원가입&nbsp;|&nbsp;</Link>
              </li>
              <li>
                <Link to="/findId"> 아이디 찾기&nbsp;|&nbsp;</Link>
              </li>
              <li>
                <Link to="/findPw"> 비밀번호 찾기</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

// 아이디 찾기, 회원가입 추가하기

export default Login;
