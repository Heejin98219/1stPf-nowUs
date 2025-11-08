const FindId = () => {
  return (
    <>
      {/* 아이디 찾기 입니다 */}
      <div>
        <div>
          <h1 className="title">아이디 찾기</h1>
        </div>
        <div className="inputs">
          <input
            type="text"
            placeholder="이름을 입력해 주세요"
            className="findId-nameTbx"
            readOnly
          ></input>
          <br />
          <input
            type="text"
            placeholder="전화번호를 입력해 주세요"
            className="findId-telTbx"
            readOnly
          ></input>
          <br />
          <input
            type="text"
            placeholder="이메일을 입력해 주세요"
            className="findId-emailTbx"
            readOnly
          ></input>
          <br />

          <button className="findIdBtn">아이디 찾기</button>
        </div>
      </div>
    </>
  );
};

export default FindId;
