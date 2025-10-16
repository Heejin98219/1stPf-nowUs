import { useState } from "react";

const Reservation = () => {
  const [selectedBranch, setSelectedBranch] = useState("");
  const [selectedAnimals, setSelectedAnimals] = useState("");

  const BranchValueChange = (e) => {
    setSelectedBranch(e.target.value);
  };
  const AnimalsValueChange = (e) => {
    setSelectedAnimals(e.target.value);
  };

  return (
    <>
      {/* 예약 입니다 */}
      <form>
        <ul className="content">
          <div className="reservationTitle">방문 및 예약 상담 신청</div>
          <br />
          <li>
            <label>이름</label>
            <input
              type="text"
              placeholder="이름을 입력해 주세요"
              className="nameTbx"
            ></input>
          </li>
          <li>
            <label>전화번호</label>
            <input
              type="text"
              placeholder="숫자만 입력해 주세요"
              className="phoneNumTbx"
            ></input>
          </li>
          <li>
            <label>방문지점</label>
            <select
              id="branch-select"
              value={selectedBranch}
              onChange={BranchValueChange}
            >
              <option>선택해주세요</option>
              <option>서울</option>
              <option>대전</option>
              <option>대구</option>
              <option>부산</option>
              <option>동탄</option>
            </select>
          </li>
          <li>
            <label>방문 및 상담시간</label>
            <input type="time" className="input-time"></input>
          </li>
          <li>
            <label>찾으시는 동물</label>
            <select
              id="species-select"
              value={selectedAnimals}
              onChange={AnimalsValueChange}
            >
              <option>선택해주세요</option>
              <option>강아지</option>
              <option>고양이</option>
              <option>토끼</option>
              <option>햄스터</option>
              <option>새</option>
            </select>
          </li>
          <li>
            <label>대형</label>
            <input type="radio" name="size" value="large" />
            <label>중형</label>
            <input type="radio" name="size" value="medium" />
            <label>소형</label>
            <input type="radio" name="size" value="small" />
          </li>

          <li>
            <label>
              <b>문의 사항</b>
            </label>
            <br />
            <textarea className="largeTbx"></textarea>
          </li>
          <button className="submit">완료</button>
        </ul>
      </form>
    </>
  );
};

export default Reservation;
