const reviews = [
  {
    id: 1,
    img: "https://www.zooseyo.or.kr/dog_sale/photo_free/202402/1708892155_69668500.jpg",
    name: "kyuzizi",
    text: "작은 거 하나에도 좋아하는 모습 볼 때마다 마음이 따듯해져요 ㅎㅎ",
  },
  {
    id: 2,
    img: "https://cdn.imweb.me/upload/S20241015a7b4a02f012a7/361159dad5377.png",
    name: "베이니플",
    text: "덕분에 집이 집이 더 따뜻해 졌어요ㅠㅠ",
  },
  {
    id: 3,
    img: "https://changwon.go.kr/animal/atcfile/25550712550102760.jpg",
    name: "미족",
    text: "항상 제게 위안이 되고 있어요ㅎㅎ ",
  },
  {
    id: 4,
    img: "https://mediahub.seoul.go.kr/wp-content/uploads/2020/02/2f6ae5e9b4c59861183ae1cb80d5722d.jpg",
    name: "Kuzi",
    text: "한 걸음 걷는 것만 봐도 미소가 절로 나요 ㅎㅎ",
  },
  {
    id: 5,
    img: "https://cdn.imweb.me/upload/S201806265b31e9f9b9a03/167b351986d5a.jpg",
    name: "제너럴지크",
    text: "처음보는 순간 운명이라고 생각했어요 ㅋㅋ",
  },
  {
    id: 6,
    img: "https://cdn.imweb.me/upload/S201711105a050488bde89/a7475a6f010e1.jpg",
    name: "gitMERGE",
    text: "금수저 안 부러워요 ㅋㅋ",
  },
  {
    id: 7,
    img: "https://flexible.img.hani.co.kr/flexible/normal/970/728/imgdb/original/2020/1104/20201104503342.jpg",
    name: "나의 지구",
    text: "하루 하루가 소중해 졌어요ㅠㅠ",
  },
  {
    id: 8,
    img: "https://gnews.gg.go.kr/OP_UPDATA/UP_DATA/_FILEZ/202404/20240426012358819526104.jpg",
    name: "INSPRT",
    text: "눈 마주칠 때마다 녹아내릴 거 같아요ㅠㅠ",
  },
  {
    id: 9,
    img: "https://cdn.imweb.me/upload/S20241015a7b4a02f012a7/91020a5edcb71.png",
    name: "N1zoral",
    text: "입양, 정말 잘 한 거 같아요!!",
  },
];

const Review = () => {
  return (
    <>
      {/* 입양 후기 입니다 */}
      <div>
        <h2 className="reviewTitle">따뜻한 가족들을 만난 친구들의 이야기</h2>
        <div className="Grid">
          {reviews.map((review) => (
            <div className="reviewDiv" key={review.id}>
              <img src={review.img} alt={review.name} className="img" />
              <h3 className="Name">{review.name}</h3>
              <p className="Detail">{review.text}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Review;
