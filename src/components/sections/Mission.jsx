import Goals from "../Goals";
import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";

const Mission = () => {
  return (
    <div
      id="mission"
      className="text-center min-h-screen bg-dark-green w-screen text-white mt-24"
    >
      <HeadingOne title="THERE IS SOMETHING YOU CAN DO" />
      <HeadingTwo title="Our Mission" />
      <div className="grid grid-cols-3">
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
    </div>
  );
};

export default Mission;
