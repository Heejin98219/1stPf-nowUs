import Congrats from "./Congrats";
import TopMenu from "./TopMenu";
import Carousel from "./Carousel";
import DogsDay from "./DogsDay";
import Review from "./Review";
import Reservation from "./Reservation";
import Information from "./Infomation";
import Sns from "./Sns";
import MakeHappy from "./MakeHappy";
import ScrollTopBtn from "./ScrollTopBtn";
import Copyright from "./Copyright";

const Components = () => {
  return (
    <>
      {/* 모든 컴포넌트 입니다 */}
      <Congrats />
      <TopMenu />
      <Carousel />
      <DogsDay />
      <ScrollTopBtn />
      <Review />

      <Reservation />
      <MakeHappy />
      <Information />
      <Sns />
      <Copyright />
    </>
  );
};
export default Components;
