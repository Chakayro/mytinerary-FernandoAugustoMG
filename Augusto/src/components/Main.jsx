import BackGround from "../assets/bg-co.jpg";

function Main() {
  return (
    <>
      <div
        className="bg-cover h-screen"
        style={{
          backgroundImage: `url(${BackGround})`,
          backgroundPosition: "center ",
        }}
      ></div>
    </>
  );
}

export default Main;
