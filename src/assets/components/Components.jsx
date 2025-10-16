import Congrats from "./Congrats";
import TopMenu from "./TopMenu";
import Carousel from "./Carousel";
import DogsDay from "./DogsDay";
import Review from "./Review";
import Reservation from "./Reservation";
import Information from "./Infomation";
import Sns from "./Sns";
import MakeHappy from "./MakeHappy";
// import Login from "./Login";
// import FindId from "./FindId";

// import Join from "./Join";

// import FindPw from "./FindPw";

const Components = () => {
  return (
    <>
      {/* 모든 컴포넌트 입니다 */}
      <Congrats />
      <TopMenu />
      <Carousel />
      <DogsDay />
      <Review />
      <Reservation />
      <MakeHappy />
      <Information />

      <Sns />
      {/* <Login />
      <FindId />
      <FindPw />
      <Join /> */}
    </>
  );
};

export default Components;
