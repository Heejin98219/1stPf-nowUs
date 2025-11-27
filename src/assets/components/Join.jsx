import { useState } from "react";
import { supabase } from "../../supabaseClient";
import { v4 as uuidv4 } from "uuid";

const Join = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [hint, setHint] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [loading, setLoading] = useState(false);

  // Enter 키 감지 함수
  const checkEnter = (e) => {
    if (e.keyCode === 13) {
      checkBlank();
    }
  };

  // 회원가입 함수
  const checkBlank = async () => {
    if (loading) return;
    setLoading(true);

    const inputs = {
      이름: name,
      아이디: id,
      이메일: email,
      전화번호: tel,
      힌트: hint,
      비밀번호: pw,
    };

    // 빈칸 체크
    for (const key in inputs) {
      if (inputs[key] === "") {
        alert(`${key}를 입력해 주세요`);
        setLoading(false);
        return;
      }
    }

    // 비밀번호 일치 확인
    if (pw !== pw2) {
      alert("비밀번호를 다시 확인해 주세요");
      setLoading(false);
      return;
    }

    // supabase Auth 회원가입
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: pw,
    });

    if (authError) {
      alert("회원가입에 실패했습니다");
      setLoading(false);
      return;
    }

    // users 테이블에 데이터 저장
    const { data: tableData, error: tableError } = await supabase
      .from("users")
      .insert({
        name,
        id: id,
        tel,
        email,
        hint,
        auth_id: authData.user?.id,
        user_id: uuidv4(),
      });

    if (tableError) {
      alert("회원가입에 실패했습니다");
    } else {
      alert("회원가입이 완료되었습니다");
      setName("");
      setId("");
      setTel("");
      setEmail("");
      setHint("");
      setPw("");
      setPw2("");
    }

    setLoading(false);
  };

  return (
    <>
      {/* 회원가입 입니다 */}
      <div>
        <h1 className="title">회원가입</h1>
        <div className="inputs">
          <input
            placeholder="이름을 입력해 주세요"
            className="join-nameTbx"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            placeholder="아이디를 입력해 주세요"
            className="join-idTbx"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />
          <input
            placeholder="전화번호를 입력해 주세요 ( - 제외)"
            className="join-telTbx"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <br />
          <input
            placeholder="이메일을 입력해 주세요"
            className="join-emailTbx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            placeholder="비밀번호 힌트를 입력해 주세요"
            className="join-pwHintTbx"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
          />
          <br />
          <input
            placeholder="비밀번호를 입력해 주세요"
            type="password"
            className="join-pwTbx"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <br />
          <input
            placeholder="비밀번호를 다시 입력해 주세요"
            type="password"
            className="join-pwTbx2"
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            onKeyDown={checkEnter}
          />
          <br />
          <button className="joinBtn" onClick={checkBlank}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Join;
