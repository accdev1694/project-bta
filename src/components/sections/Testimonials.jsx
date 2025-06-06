import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";
import { reviews } from "../../utils.js";
import { useEffect, useState } from "react";

const Testimonials = () => {
  const [x, setX] = useState(0); // x = 0 initially

  useEffect(() => {
    const interval = setInterval(() => {
      
      setX(prevX=>(
        prevX === reviews.length-1 ? 0 : prevX+1
      ));
      
    }, 6000);
    return () => clearInterval(interval);
  }, [reviews.length]);

  return (
    <section className="min-h-screen text-center bg-dark-green px-[5%] lg:px-[15%]">
      <HeadingOne
        title="What our Beneficiaries say ..."
        className="mb-21 pt-21 text-secondary"
      />
      <HeadingTwo title="Testimonials" className="text-white" />
      <div className="mt-12">
        <p className="text-default text-center mb-6 sm:text-lg">{`"${reviews[x].message}"`}</p>
        <img
          className="m-auto rounded-full mb-2"
          src={reviews[x].image}
          alt={reviews[x].name}
        />
        <p className="text-white text-secondary">{reviews[x].name}</p>
        <p className="text-white">{reviews[x].position}</p>
      </div>
    </section>
  );
};

export default Testimonials;
