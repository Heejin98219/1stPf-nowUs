// import { useState } from "react";

// const Reservation = () => {
//   const [name, setName] = useState("");
//   const [tel, setTel] = useState("");
//   const [branch, setBranch] = useState("");
//   const [time, setTime] = useState("");
//   const [animal, setAnimal] = useState("");
//   const [questions, setQuestions] = useState("");

//   const ChangeNameValue = (e) => {
//     setName(e.target.value);
//     alert(setName);
//   };

//   const ChangeTelValue = (e) => {
//     setTel(e.target.value);
//     alert(setTel);
//   };

//   const ChangeBranchValue = (e) => {
//     setBranch(e.target.value);
//     alert(setBranch);
//   };

//   const ChangeTimeValue = (e) => {
//     setTime(e.target.value);
//     alert(setTime);
//   };

//   const ChangeAnimalValue = (e) => {
//     setAnimal(e.target.value);
//     alert(setAnimal);
//   };

//   const ChangeQuestionValue = (e) => {
//     setQuestions(e.target.value);
//     alert(setQuestions);
//   };

//   // 예약완료 얼럿창
//   const CompleteReservation = (e) => {
//     setQuestions(e.target.value);
//     alert(setQuestions);
//   };

//   return (
//     <>
//       {/* 예약 입니다 */}
//       <form>
//         <ul className="content">
//           <div className="reservationTitle">방문 및 예약 상담 신청</div>
//           <br />
//           <li>
//             <label>이름</label>
//             <input
//               type="text"
//               placeholder="이름을 입력해 주세요"
//               className="nameTbx"
//               value={name}
//               readOnly
//             ></input>
//           </li>
//           <li>
//             <label>전화번호</label>
//             <input
//               type="text"
//               placeholder="숫자만 입력해 주세요"
//               className="phoneNumTbx"
//               value={tel}
//               readOnly
//             ></input>
//           </li>
//           <li>
//             <label>방문지점</label>
//             <select id="branch-select" value={branch} readOnly>
//               <option readOnly>선택해주세요</option>
//               <option readOnly>서울</option>
//               <option readOnly>대전</option>
//               <option readOnly>대구</option>
//               <option readOnly>부산</option>
//               <option readOnly>동탄</option>
//             </select>
//           </li>
//           <li>
//             <label>방문 및 상담시간</label>
//             <input
//               type="time"
//               className="input-time"
//               value={time}
//               readOnly
//             ></input>
//           </li>
//           <li>
//             <label>찾으시는 동물</label>
//             <select id="species-select" value={animal} readOnly>
//               <option readOnly>선택해주세요</option>
//               <option readOnly>강아지</option>
//               <option readOnly>고양이</option>
//               <option readOnly>토끼</option>
//               <option readOnly>햄스터</option>
//               <option readOnly>새</option>
//             </select>
//           </li>
//           <li>
//             <label>대형</label>
//             <input type="radio" name="size" value="large" readOnly />
//             <label>중형</label>
//             <input type="radio" name="size" value="medium" readOnly />
//             <label>소형</label>
//             <input type="radio" name="size" value="small" readOnly />
//           </li>

//           <li>
//             <label>
//               <b>문의 사항</b>
//             </label>
//             <br />
//             <textarea
//               className="largeTbx"
//               value={questions}
//               readOnly
//             ></textarea>
//           </li>
//           <button className="submit" disabled>
//             완료
//           </button>
//         </ul>
//       </form>
//     </>
//   );
// };

// export default Reservation;

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

  const checkBlank = async () => {
    // 빈 값 체크
    const inputs = {
      이름: name,
      아이디: id,
      이메일: email,
      전화번호: tel,
      힌트: hint,
      비밀번호: pw,
    };
    for (const key in inputs) {
      if (!inputs[key]) {
        alert(`${key}를 입력해 주세요`);
        return;
      }
    }

    // 비밀번호 재확인
    if (pw !== pw2) {
      alert("비밀번호가 일치하지 않습니다");
      return;
    }

    try {
      // 1️⃣ Auth 가입
      const { data: authData, error: authError } = await supabase.auth.signUp({
        email,
        password: pw,
      });

      if (authError) {
        alert(`회원가입(Auth)에 실패했습니다: ${authError.message}`);
        return;
      }

      // 2️⃣ users 테이블에 추가 정보 저장
      const { error: tableError } = await supabase.from("users").insert({
        name,
        user_id: uuidv4(), // 테이블용 UUID
        email,
        tel,
        hint,
        auth_id: authData.user.id, // Auth에서 생성된 UUID
      });

      if (tableError) {
        alert(`회원가입(테이블)에 실패했습니다: ${tableError.message}`);
        return;
      }

      // 성공
      alert("회원가입 완료!");
      setName("");
      setId("");
      setTel("");
      setEmail("");
      setHint("");
      setPw("");
      setPw2("");

      // 콘솔 확인용
      console.log("Auth ID:", authData.user.id);
      console.log("회원가입 데이터:", {
        name,
        user_id: uuidv4(),
        email,
        tel,
        hint,
      });
    } catch (err) {
      console.error("회원가입 중 예외 발생:", err);
      alert("회원가입 중 오류가 발생했습니다");
    }
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
        <input
          placeholder="아이디"
          value={id}
          onChange={(e) => setId(e.target.value)}
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
        <input
          placeholder="비밀번호 힌트"
          value={hint}
          onChange={(e) => setHint(e.target.value)}
        />
        <input
          placeholder="비밀번호"
          type="password"
          value={pw}
          onChange={(e) => setPw(e.target.value)}
        />
        <input
          placeholder="비밀번호 확인"
          type="password"
          value={pw2}
          onChange={(e) => setPw2(e.target.value)}
        />
        <button onClick={checkBlank}>회원가입</button>
      </div>
    </div>
  );
};

export default Join;
