import Carousel from "../components/Carousel";
import MyTinerary from "../components/MyTinerary";
import CallToAction from "../components/CallToAction";

function Home() {
  return (
    <div>
      <div className="myTinerary-container">
        <MyTinerary />
      </div>
      <CallToAction />
      <Carousel />
    </div>
  );
}

export default Home;
