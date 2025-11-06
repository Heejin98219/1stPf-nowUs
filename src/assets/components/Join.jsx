import { useState } from "react";
import { supabase } from "../../supabaseClient";

const Join = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [hint, setHint] = useState("");
  const [pw, setPw] = useState("");

  // ✅ async 추가!
  const checkBlank = async () => {
    const inputs = {
      이름: name,
      아이디: id,
      이메일: email,
      전화번호: tel,
      힌트: hint,
      비밀번호: pw,
    };

    // 비어 있는 칸 확인
    for (const key in inputs) {
      if (inputs[key] === "") {
        alert(`${key}를 입력해 주세요`);
        return;
      }
    }

    // Supabase에 데이터 저장
    const { error } = await supabase.from("users").insert({
      name: name,
      user_id: id,
      email: email,
      tel: tel,
      hint: hint,
      password: pw,
    });

    if (error) {
      alert("저장 실패 😢");
      console.log(error);
    } else {
      alert("회원가입 성공 🎉");
      setName("");
      setId("");
      setEmail("");
      setTel("");
      setHint("");
      setPw("");
    }
  };

  return (
    <>
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
          <button className="joinBtn" onClick={checkBlank}>
            회원가입
          </button>
        </div>
      </div>
    </>
  );
};

export default Join;
