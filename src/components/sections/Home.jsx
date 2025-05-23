import Description from "../Description";
import DonateBtn from "../DonateBtn";
import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";
import JoinUs from "../JoinUs";

const Home = () => {
  return (
    <section id="home" className="mt-36 hero-image mx-[15%] pb-30">
      <HeadingOne title="COMFORT ABOJE FOUNDATION" />
      <div className="flex flex-col justify-center text-center items-center bg-transparent-green px-[20%] mt-28 ">
        <HeadingTwo title="Project Bta" />
        <Description text="An NGO dedicated to creating a world where every child, regardless of circumstances, has access to opportunities for a better future, fostering sustainability and empowerment through creativity and innovation." />
        <JoinUs />
      </div>
      <div className="flex justify-center items-center">
        <DonateBtn />
      </div>
    </section>
  );
};

export default Home;
