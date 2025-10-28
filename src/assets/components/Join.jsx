const Join = () => {
  return (
    <>
      {/* 회원가입 입니다 */}
      <div>
        <div>
          <h1 className="title">회원가입</h1>
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="이름을 입력해 주세요"
            className="join-nameTbx"
          ></input>
          <br />
          <input
            type="text"
            placeholder="아이디를 입력해 주세요"
            className="join-idTbx"
          ></input>
          <br />
          <input
            type="text"
            placeholder="이메일을 입력해 주세요"
            className="join-idTbx"
          ></input>
          <br />
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            className="join-idTbx"
          ></input>
          <br />
          <input
            type="password"
            placeholder="비밀번호를 다시 입력해 주세요"
            className="join-idTbx"
          ></input>
          <br />

          <button className="joinBtn">회원가입</button>
        </div>
      </div>
    </>
  );
};

export default Join;
