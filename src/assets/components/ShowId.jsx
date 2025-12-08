const ShowId = ({ foundId, foundName, foundTel, goBack }) => {
  const makeUserIdSecret = (id) => {
    if (!id) return "";
    return id.slice(0, id.length - 3) + "***";
  };

  // 전화번호에 하이픈 추가하는 함수
  const AddHyphen = (tel) => {
    if (!tel) return "";

    const onlyNum = tel.replace(/[^0-9]/g, "");

    // 010-XXXX-XXXX 형식
    if (onlyNum.length === 11) {
      return onlyNum.replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3");
    }

    // 그 외 : 그대로 반환
    return tel;
  };

  return (
    <>
      <div className="found-div">
        <div className="foundTitle-div">
          <p className="idCompleted">아이디 찾기가 완료되었습니다.</p>
          <p className="idNum">
            가입된 아이디가 총{" "}
            <span className="joinedId">{foundId ? 1 : 0}</span>개 있습니다.
          </p>
        </div>

        <div className="grayBorder">
          <ul className="userInfo-ul">
            <li className="userName">이&nbsp;&nbsp;름{foundName}</li>
            <li className="userTel">
              전&nbsp;화&nbsp;번&nbsp;호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{AddHyphen(foundTel)}</span>
            </li>
            <li className="userId">
              아&nbsp;&nbsp;이&nbsp;&nbsp;디
              {makeUserIdSecret(foundId)}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowId;
