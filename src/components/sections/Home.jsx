import Description from "../Description";
import DonateLink from "../DonateLink";
import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";

const Home = () => {
  return (
    <section
      id="home"
      className=" min-h-[calc(100vh-84px)] mt-14 md:mt-21 hero-image  flex flex-col justify-between"
    >
      <HeadingOne title="Comfort Aboje Foundation" className="text-tertiary"/>
      <div className="flex flex-col justify-center text-center items-center bg-gradient  pb-12">
        <HeadingTwo title="Project BTA" className="text-white mb-4" />
        <Description className="text-white text-md sm:text-xl px-[5%] xl:px-[20%] lg:text-3xl xxl:text-3xl" text="An NGO dedicated to creating a world where every child, regardless of circumstances, has access to opportunities for a better future, fostering sustainability and empowerment through creativity and innovation." />
        <DonateLink
          href="#donate"
          title="Donate"
          className="bg-secondary text-white mt-8"
        />
      </div>
    </section>
  );
};

export default Home;
