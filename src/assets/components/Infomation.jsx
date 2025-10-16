const Information = () => {
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
          <li>개인정보취급방침</li>
          <li>이메일무단수집거부</li>
        </ul>
      </div>
    </>
  );
};

export default Information;
