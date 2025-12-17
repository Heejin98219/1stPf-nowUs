import { useState } from "react";
import { supabase } from "../../supabaseClient";

const FindPw = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [hint, setHint] = useState("");
  const [pw, setPw] = useState("");
  const [pw2, setPw2] = useState("");
  const [loading, setLoading] = useState(false);

  // Enter 키 감지
  const checkEnter = (e) => {
    if (e.key === "Enter") {
      FuncFindPw();
    }
  };

  // 비밀번호 변경
  const FuncFindPw = async () => {
    if (loading) return;
    setLoading(true);

    // 빈칸 체크
    const inputs = {
      이름: name,
      아이디: id,
      힌트: hint,
      비밀번호: pw,
      비밀번호확인: pw2,
    };

    for (const key in inputs) {
      if (inputs[key] === "") {
        alert(`${key}를 입력해 주세요`);
        setLoading(false);
        return;
      }
    }

    if (pw !== pw2) {
      alert("비밀번호가 일치하지 않습니다");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("users")
      .select("email")
      .eq("name", name)
      .eq("id", id)
      .eq("hint", hint)
      .single();

    if (error || !data) {
      alert("입력한 정보가 일치하지 않습니다");
      setLoading(false);
      return;
    }

    const { error: pwError } = await supabase.auth.updateUser({
      password: pw,
    });

    if (pwError) {
      alert("비밀번호 변경에 실패했습니다");
    } else {
      alert("비밀번호가 변경되었습니다");
      setName("");
      setId("");
      setHint("");
      setPw("");
      setPw2("");
    }

    setLoading(false);
  };

  return (
    <>
      <div>
        <h1 className="title">비밀번호 찾기</h1>

        <div className="inputs">
          <input
            placeholder="이름을 입력해 주세요"
            className="findPw-nameTbx"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />

          <input
            placeholder="아이디를 입력해 주세요"
            className="findPw-idTbx"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <br />

          <input
            placeholder="비밀번호 힌트를 입력해 주세요"
            className="findPw-hintTbx"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
          />
          <br />

          <input
            type="password"
            placeholder="새 비밀번호를 입력해 주세요"
            className="findPw-pwTbx"
            value={pw}
            onChange={(e) => setPw(e.target.value)}
          />
          <br />

          <input
            type="password"
            placeholder="새 비밀번호를 입력해 주세요"
            className="findPw-pwTbx"
            value={pw2}
            onChange={(e) => setPw2(e.target.value)}
            onKeyDown={checkEnter}
          />
          <br />

          <button className="findPwBtn" onClick={FuncFindPw}>
            비밀번호 변경
          </button>
        </div>
      </div>
    </>
  );
};

export default FindPw;
