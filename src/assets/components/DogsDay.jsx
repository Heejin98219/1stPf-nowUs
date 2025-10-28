const DogsDay = () => {
  return (
    <>
      {/* 강아지의 날 입니다 */}
      <div className="dogsDay">
        <img src="./public/image/Dog.jpg" className="dogImg" alt="이미지"></img>
        <div className="ment">
          <span className="date">3월 23일</span>
          <span style={{ fontFamily: "inherit", fontSize: "20px" }}>은</span>
          <br />
          <span className="day">강아지의 날&nbsp;</span>
          <span style={{ fontFamily: "inherit", fontSize: "20px" }}>
            입니다
          </span>
          <br />
          <span className="promise">
            지금, 우리는 모든 동물들이 행복할 수 있는 그 날까지
            <br />
            계속 함께하겠습니다
            <br />
          </span>
          <ul className="together">
            <li>&#35;함께해요</li>
            <li>&#35;동물</li>
            <li>&#35;입양</li>
          </ul>
        </div>
        <br />
      </div>
    </>
  );
};

export default DogsDay;
