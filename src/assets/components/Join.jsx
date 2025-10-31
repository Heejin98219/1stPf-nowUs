import { useState } from "react";
import { supabase } from "../../supabaseClient";

const Join = () => {
  const [name, setName] = useState("");
  const [userId, setUserId] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [pwHint, setPwHint] = useState("");
  const [password, setPassword] = useState("");
  const [passwordRe, setPasswordRe] = useState("");

  const handleJoin = async () => {
    if (password !== passwordRe) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      alert("회원가입 실패: " + error.message);
      return;
    }

    const { data: userData, error: userError } = await supabase
      .from("users")
      .insert([{ id: email, name, tel, pwHint, created_at: new Date() }]);

    if (userError) {
      alert("테이블 데이터 추가 실패: " + userError.message);
      return;
    }

    alert("회원가입 완료!");
  };

  return (
    <div>
      <h1 className="title">회원가입</h1>
      <div className="inputs">
        <input
          placeholder="이름"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <br />
        <input
          placeholder="아이디"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <br />
        <input
          placeholder="전화번호"
          value={tel}
          onChange={(e) => setTel(e.target.value)}
        />
        <br />
        <input
          placeholder="이메일"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          placeholder="비밀번호 힌트"
          value={pwHint}
          onChange={(e) => setPwHint(e.target.value)}
        />
        <br />
        <input
          placeholder="비밀번호"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <input
          placeholder="비밀번호 확인"
          type="password"
          value={passwordRe}
          onChange={(e) => setPasswordRe(e.target.value)}
        />
        <br />
        <button className="joinBtn" onClick={handleJoin}>
          회원가입
        </button>
      </div>
    </div>
  );
};

export default Join;
