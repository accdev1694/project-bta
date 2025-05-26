import Description from "../Description";
import DonateLink from "../DonateLink";
import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";

const Home = () => {
  return (
    <section
      id="home"
      className=" min-h-[calc(100vh-84px)] mt-21 hero-image mx-[15%]"
    >
      <div className="  flex flex-col justify-between">
        <HeadingOne title="Comfort Aboje Foundation" />
        <div className="flex flex-col justify-center text-center items-center bg-transparent-green px-[20%] pt-12 mt-60">
          <HeadingTwo title="Project Bta" className="text-white" />
          <Description text="An NGO dedicated to creating a world where every child, regardless of circumstances, has access to opportunities for a better future, fostering sustainability and empowerment through creativity and innovation." />
        </div>
      </div>

      <div className="flex justify-center items-center">
        <DonateLink href="#donate" title="Donate" className="bg-secondary text-white" />
      </div>
    </section>
  );
};

export default Home;
