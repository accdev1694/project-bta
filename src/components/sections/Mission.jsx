import Goals from "../Goals";
import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";

const Mission = () => {
  return (
    <section
      id="mission"
      className="text-center min-h-screen bg-dark-green w-screen text-white px-[15%] mt-21 pt-21"
    >
      <HeadingOne title="There is Something You Can Do" className="mb-20"/>
      <HeadingTwo title="Our Mission" />
      <div className=" w-full flex justify-between items-center">
        <Goals
          text="To support underprivileged children in orphanages and IDP camps."
          icon="images/goal1.png"
          alt="Loving Handshake"
        />
        <Goals
          text=" Providing essential relief materials just so they can focus on learning, rather than struggling to survive. "
          icon="images/goal2.png"
          alt="Bowl of food"
        />
        <Goals
          text="Enabling them to create value and earn a living from upcycling and sustainable practices"
          icon="images/goal3.png"
          alt="doll made from old clothes"
        />
      </div>
    </section>
  );
};

export default Mission;
