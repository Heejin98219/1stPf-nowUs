const FindPw = () => {
  return (
    <>
      {/* 아이디 찾기 입니다 */}
      <div>
        <div>
          <h1 className="title">비밀번호 찾기</h1>
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="이름을 입력해 주세요"
            className="findPw-nameTbx"
          ></input>
          <br />
          <input
            type="text"
            placeholder="아이디를 입력해 주세요"
            className="findPw-mailTbx"
          ></input>
          <br />
          <input
            type="text"
            placeholder="비밀번호를 입력해 주세요"
            className="findPw-idTbx"
          ></input>
          <br />
          <input
            type="text"
            placeholder="비밀번호 힌트를 입력해 주세요"
            className="findPw-idTbx"
          ></input>
          <br />
          <input
            type="text"
            placeholder="비밀번호를 입력해 주세요"
            className="findPw-idTbx"
          ></input>
          <br />
          <input
            type="text"
            placeholder="비밀번호를 입력해 주세요"
            className="findPw-idTbx"
          ></input>
          <br />
          <button className="findPwBtn">비밀번호 찾기</button>
        </div>
      </div>
    </>
  );
};

export default FindPw;
