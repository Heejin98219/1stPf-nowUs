const ShowId = ({ foundId, goBack }) => {
  return (
    <>
      <div className="userId-div">
        <h1 className="userIdIs">회원님의 아이디는 </h1>
        <p className="userId">
          <strong>{foundId}</strong> <p className="userId-p">입니다</p>
        </p>
      </div>

      {/* <button
        className="findIdBtn"
        onClick={goBack}
        style={{ marginTop: "20px" }}
      >
        처음으로
      </button>
      <div className="extraMenues-div">
        <ul className="extraMenues-ul">
          <li>회원가입&nbsp;|&nbsp;</li>
          <li>비밀번호 &nbsp;|&nbsp;</li>
          <li>로그인</li>
        </ul>
      </div> */}
    </>
  );
};

export default ShowId;
