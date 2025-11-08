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
  const [loading, setLoading] = useState(false); // ✅ 추가

  const checkBlank = async () => {
    if (loading) return; // 이미 요청 중이면 무시
    setLoading(true);

    const inputs = {
      이름: name,
      아이디: id,
      이메일: email,
      전화번호: tel,
      힌트: hint,
      비밀번호: pw,
    };

    for (const key in inputs) {
      if (inputs[key] === "") {
        alert(`${key}를 입력해 주세요`);
        setLoading(false); // 중간에 반환 시 로딩 해제
        return;
      }
    }

    if (pw !== pw2) {
      alert("비밀번호를 다시 확인해 주세요");
      setLoading(false); // 로딩 해제
      return;
    }

    // 1️⃣ Auth 회원가입
    const { data: authData, error: authError } = await supabase.auth.signUp({
      email: email,
      password: pw,
    });

    if (authError) {
      alert("회원가입에 실패했습니다");
      console.log(authError);
      setLoading(false);
      return;
    }

    // 2️⃣ 테이블(users)에 정보 저장
    const { data: tableData, error: tableError } = await supabase
      .from("users")
      .insert({
        name,
        user_id: uuidv4(),
        email,
        tel,
        hint,
        auth_id: authData.user?.id, // 안전하게 optional chaining
      });

    if (tableError) {
      alert("회원가입(테이블)에 실패했습니다");
      console.log("Table insert error:", tableError);
    } else {
      alert("회원가입 완료!");
      setName("");
      setId("");
      setTel("");
      setEmail("");
      setHint("");
      setPw("");
      setPw2("");
    }

    setLoading(false); // 모든 로직 끝나면 로딩 해제
  };

  return (
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
          placeholder="전화번호를 입력해 주세요"
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
        />
        <br />
        <button className="joinBtn" onClick={checkBlank} disabled={loading}>
          {loading ? "가입 중..." : "회원가입"}
        </button>
      </div>
    </div>
  );
};

export default Join;
