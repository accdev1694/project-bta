import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";
import DonateLink from "../DonateLink";

const Donate = () => {
  return (
    <section id="donate" className="min-h-screen text-center">
      <HeadingOne
        title="Join us in transforming lives through your generous donations and volunteer efforts."
        className="mb-56"
      />
      <HeadingTwo title="Make a Difference Today" className="text-primary" />
      <p className="text-primary mt-12">
        Please Make a donation of Cash, Preloved Items or Food
      </p>
      <div className="flex justify-center items-center mt-4">
        <DonateLink title="Items" className="text-primary cursor-pointer" />{" "}
        {/*Form, Map and Calender for collection*/}
        <DonateLink
          title="Cash"
          className="bg-secondary text-white cursor-pointer"
        />{" "}
        {/*Stripe Integration*/}
      </div>
      <p className="mt-12 font-dancing-script text-2xl mb-2">
        "There can be no keener revelation of a society's soul than the way in
        which it treats its children."
      </p>
      <p>- Nelson Mandela</p>
    </section>
  );
};

export default Donate;
