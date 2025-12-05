const ShowId = ({ foundId, foundName, foundTel, goBack }) => {
  return (
    <>
      <div className="found-div">
        <div className="foundTitle-div">
          <p className="id-completed">아이디 찾기가 완료되었습니다.</p>
          <p className="idNum">
            가입된 아이디가 총{" "}
            <span className="joinedId">{foundId ? 1 : 0}</span>개 있습니다.
          </p>
        </div>
      </div>

      {/* <p className="userId">
          <strong>{foundId}</strong> <p className="userId-p"></p>
        </p>
        <p className="userId">
          <strong>{foundName}</strong> <p className="userId-p"></p>
        </p>
        <p className="userId">
          <strong>{foundTel}</strong> <p className="userId-p"></p>
        </p> */}

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
