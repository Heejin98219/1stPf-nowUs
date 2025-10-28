const Information = () => {
  // 개인정보취급방침 alert
  const personalInfo = () => {
    alert("개인정보취급방침에 따라 회원님의 정보는 안전하게 관리됩니다.");
  };

  // 이메일무단수집거부 alert
  const unauthorEmail = () => {
    alert(
      "본 사이트에 게시된 이메일 주소는 \n스팸 방지를 위해 무단 수집을 금지합니다."
    );
  };

  return (
    <>
      {/* 회사 정보입니다 */}
      <hr className="underline"></hr>

      <div className="companyInfo-div">
        <ul className="companyInfo-ul">
          <li>보호소 이름: 지금, 우리</li>
          <br />
          <li>운영 시간: 07&#126;익일&nbsp;1시</li>
          <br />
          <li>전화번호: 031&#41;219&#45;1001</li>
          <br />
          <li>이메일: animals@nowus.com</li>
          <br />
          <li>사업자등록번호: 218-008-02525 </li>
        </ul>
      </div>
      <div className="notice-div">
        <ul className="notice-ul">
          <li onClick={personalInfo}>개인정보취급방침</li>
          <li onClick={unauthorEmail}>이메일무단수집거부</li>
        </ul>
      </div>
    </>
  );
};

export default Information;
