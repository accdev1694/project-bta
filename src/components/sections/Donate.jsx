import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";
import DonateLink from "../DonateLink";
import Contact from "../Contact";

const Donate = () => {
  return (
    <section id="donate" className="min-h-screen text-center pt-21">
      <HeadingOne
        title="Join us in transforming lives through your generous donations and volunteer efforts."
        className="mb-30 text-secondary"
      />
      <HeadingTwo title="Make a Difference Today" className="text-primary" />
      <p className="text-primary mt-12">
        Please Make a donation of{" "}
        <span className="font-bold text-secondary">Items</span> or{" "}
        <span className="font-bold text-secondary">Cash</span>
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

      <div className="flex justify-center gap-12 mt-12">
        <Contact
          href="https://www.facebook.com/share/1MLFweY9ZP/"
          src="/images/facebook.png"
          alt="Facebook Logo"
          className="w-12 "
        />
        <Contact
          href="https://www.instagram.com/projectbta_?igsh=cHpoODZiOW12MTVy"
          src="/images/instagram.png"
          alt="Instagram Logo"
          className="w-12"
        />
        <Contact
          href="https://x.com/ProjectBta?t=HBuuqyki-9am-goReDEwzw&s=09"
          src="/images/twitter.png"
          alt="Twitter Logo"
          className="w-12"
        />
        <Contact
          href={null}
          src="/images/linkedin.png"
          alt="Linkedin Logo"
          className="w-12"
        />
      </div>
    </section>
  );
};

export default Donate;
