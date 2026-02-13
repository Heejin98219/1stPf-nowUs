import { useState } from "react";
import { supabase } from "../../supabaseClient";
import ShowId from "./ShowId";

const FindId = () => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");
  const [newPage, setNewPage] = useState(false);
  const [foundId, setFoundId] = useState("");
  const [foundName, setFoundName] = useState("");
  const [foundTel, setFoundTel] = useState("");

  // Enter 키 감지 함수
  const checkEnter = (e) => {
    if (e.key === "Enter") {
      FuncFindId();
    }
  };

  // 아이디 찾기
  const FuncFindId = async () => {
    const inputs = {
      이름: name,
      전화번호: tel,
      이메일: email,
    };

    for (const key in inputs) {
      if (inputs[key] === "") {
        alert(`${key}를 입력해 주세요`);
        return;
      }
    }

    const { data, error } = await supabase
      .from("users")
      .select("id, name, tel")
      .eq("name", name)
      .eq("tel", tel)
      .eq("email", email)
      .single();

    if (error || !data) {
      alert("존재하지 않는 정보입니다");
    } else {
      setFoundName(data.name);
      setFoundId(data.id);
      setFoundTel(data.tel);
      setNewPage(true);
    }
  };

  if (newPage) {
    return (
      <ShowId
        foundId={foundId}
        foundName={foundName}
        foundTel={foundTel}
        goBack={() => setNewPage(false)}
      />
    );
  }

  return (
    <>
      {/* 아이디 찾기 입니다 */}
      <div>
        <h1 className="title">아이디 찾기</h1>
        <div className="inputs">
          <input
            placeholder="이름"
            className="findId-nameTbx"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            placeholder="전화번호"
            className="findId-telTbx"
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <br />
          <input
            placeholder="이메일"
            className="findId-emailTbx"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={checkEnter}
          />
          <br />
          <button className="findIdBtn btn" onClick={FuncFindId}>
            아이디 찾기
          </button>
        </div>
      </div>
    </>
  );
};

export default FindId;
