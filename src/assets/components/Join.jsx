const Join = () => {
  return (
    <div>
      <h1 className="title">회원가입</h1>
      <div className="inputs">
        <input placeholder="이름을 입력해 주세요" className="join-nameTbx" />
        <br />
        <input placeholder="아이디를 입력해 주세요" className="join-idTbx" />
        <br />
        <input placeholder="전화번호를 입력해 주세요" className="join-telTbx" />
        <br />
        <input placeholder="이메일을 입력해 주세요" className="join-emailTbx" />
        <br />
        <input
          placeholder="비밀번호 힌트를 입력해 주세요"
          className="join-pwHintTbx"
        />
        <br />
        <input
          placeholder="비밀번호를 입력해 주세요"
          type="password"
          className="join-pwTbx"
        />
        <br />
        <input
          placeholder="비밀번호를 다시 입력해 주세요"
          type="password"
          className="join-pwTbx2"
        />
        <br />
        <button className="joinBtn">회원가입</button>
      </div>
    </div>
  );
};

export default Join;
