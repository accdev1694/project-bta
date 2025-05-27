import Description from "../Description";
import Goals from "../Goals";
import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";

const Mission = () => {
  return (
    <section
      id="mission"
      className="text-center min-h-screen bg-dark-green w-screen text-white px-[15%] mt-21 pt-21"
    >
      <HeadingOne
        title="There is Something You Can Do"
        className="mb-12 text-secondary"
      />
      <HeadingTwo title="Our Mission" />
      <Description
        className="text-lg text-default"
        text="Our mission is to empower underprivileged children by giving them access to the resources, opportunities, and support they need to thrive. We are dedicated to removing barriers in education, healthcare, and personal development to help every child reach their full potential.

We believe that all children deserve a fair chance at success, regardless of their background. Through focused programs and community partnerships, we provide education, mentorship, and life skills that foster growth and long-term impact. By investing in children today, we’re helping shape a brighter, more equitable tomorrow."
      />
      <div className=" w-full flex justify-between items-center mt-12">
        <Goals
          text="To support underprivileged children in orphanages and IDP camps."
          icon="images/goal1.png"
          alt="Loving Handshake"
          
        />
        <Goals
          text=" Providing essential relief materials just so they can focus on their learning. "
          icon="images/goal2.png"
          alt="Bowl of food"
        />
        <Goals
          text="Enabling them to earn a living from upcycling and sustainable practices"
          icon="images/goal3.png"
          alt="doll made from old clothes"
        />
      </div>
    </section>
  );
};

export default Mission;
