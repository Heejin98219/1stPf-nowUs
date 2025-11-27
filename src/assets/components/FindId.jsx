import { useState } from "react";
import { supabase } from "../../supabaseClient";

const FindId = ({ onIdFound }) => {
  const [name, setName] = useState("");
  const [tel, setTel] = useState("");
  const [email, setEmail] = useState("");

  const FuncFindId = async () => {
    if (!name || !tel || !email) {
      alert("모든 필드를 입력해 주세요");
      return;
    }

    const { data, error } = await supabase
      .from("users")
      .select("id")
      .eq("name", name)
      .eq("tel", tel)
      .eq("email", email)
      .single();

    if (error || !data) {
      alert("존재하지 않는 정보입니다");
    } else {
      onIdFound(data.id);
    }
  };

  return (
    <div>
      <h1>아이디 찾기</h1>
      <input
        placeholder="이름"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="전화번호"
        value={tel}
        onChange={(e) => setTel(e.target.value)}
      />
      <input
        placeholder="이메일"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button onClick={FuncFindId}>아이디 찾기</button>
    </div>
  );
};

export default FindId;
