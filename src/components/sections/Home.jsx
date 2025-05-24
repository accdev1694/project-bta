import DonateBtn from "../DonateBtn";
import JoinUs from "../JoinUs";

const Home = () => {
  return (
    <section className="mt-36 hero-image mx-[15%] pb-30">
      <h1 className="text-md text-white my-4 text-center font-inria mx-auto text-shadow-xl">
        COMFORT ABOJE FOUNDATION
      </h1>
      <div className="flex flex-col justify-center text-center items-center bg-green-500/20 px-[20%] mt-28 pt-12 ">
        <h2 className="text-6xl font-inria text-white mb-4 font-bold">Project Bta</h2>
        <p className="text-lg text-white mt-2 mb-6 font-dosis tracking-wider">
          An NGO dedicated to creating a world where every child, regardless of
          circumstances, has access to opportunities for a better future,
          fostering sustainability and empowerment through creativity and
          innovation.
        </p>
        <JoinUs />
      </div>
      <div className="flex justify-center items-center">
        <DonateBtn />
      </div>
    </section>
  );
};

export default Home;
