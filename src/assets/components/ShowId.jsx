import { Link } from "react-router-dom";

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

        <div className="midBorder">
          <ul className="userInfoes-ul">
            <li className="userName">
              <ul className="userInfo-ul">
                <li>이&nbsp;름</li>
                <li>{foundName}</li>
              </ul>
            </li>
            <li className="userTel">
              <ul className="userInfo-ul">
                <li>전화번호</li>
                <li>{AddHyphen(foundTel)}</li>
              </ul>
            </li>
            <li className="userId">
              <ul className="userInfo-ul">
                <li>아이디</li>
                <li>{foundId}</li>
              </ul>
            </li>
          </ul>
        </div>
        <div className="bottomMenues">
          <ul className="otherMenues">
            <li>
              <Link to="/login">회원가입</Link>
            </li>
            <li>로그인</li>

            <li>비밀번호 찾기</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ShowId;
