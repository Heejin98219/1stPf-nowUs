import { Link } from "react-router-dom";
import { useState } from "react";
import { supabase } from "../../supabaseClient";

const Login = () => {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [loading, setLoading] = useState(false);

  // Enter 키 감지
  const checkEnter = (e) => {
    if (e.key === "Enter") {
      FuncLogin();
    }
  };

  // 로그인 함수
  const FuncLogin = async () => {
    if (loading) return;
    setLoading(true);

    if (!id || !pw) {
      alert("아이디와 비밀번호를 입력해 주세요");
      setLoading(false);
      return;
    }

    // users 테이블에서 id로 이메일 찾기
    const { data: userData, error: userError } = await supabase
      .from("users")
      .select("email")
      .eq("id", id)
      .single();

    if (userError || !userData) {
      alert("존재하지 않는 아이디입니다");
      setLoading(false);
      return;
    }

    // Supabase 로그인
    const { error } = await supabase.auth.signInWithPassword({
      email: userData.email,
      password: pw,
    });

    if (error) {
      alert("없는 정보입니다");
    } else {
      alert("로그인 성공!");
    }

    setLoading(false);
  };

  return (
    <>
      <div>
        <h1 className="title">로그인</h1>

        <div className="inputs">
          {/* 아이디 입력 */}
          <input
            type="text"
            placeholder="아이디를 입력해 주세요"
            className="login-idTbx"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />

          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            className="login-pwTbx"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            onKeyDown={checkEnter}
          />
          <br />

          {/* 로그인 버튼 */}
          <button className="loginBtn" onClick={FuncLogin}>
            로그인
          </button>

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
