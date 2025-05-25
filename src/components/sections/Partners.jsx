import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";
import { partners } from "../../utils.js";

const Partners = () => {
  if (!partners || partners.length < 1) {
    return;
  }

  return (
    <section id="partners" className="min-h-screen pt-21 text-center bg-white px-[15%]">
      <HeadingOne
        title="Meet the passionate individuals behind our mission."
        className="mb-24"
      />
      <HeadingTwo title="Our Partners" className="text-secondary" />
      <div className="grid grid-cols-4 mt-4">
        {partners.map((partner) => (
          <div
            key={partner.id}
            className="flex flex-col items-center justify-between mt-12"
          >
            <img
              className="rounded-full w-18 border-secondary"
              src={partner.image}
              alt={partner.name}
            />
            <h3 className="mt-2 font-bold text-sm font-abel tracking-wide">
              {partner.name}
            </h3>
            <p className="text-sm font-inria">{partner.position}</p>
            <p className="text-xs font-inria w-48 mt-4">
              {partner.description}
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <a href={partner.handles.instagram}>
                <img
                  className="w-4"
                  src="/images/instagram.png"
                  alt="Instagram logo"
                />
              </a>
              <a href={partner.handles.facebook}>
                <img
                  className="w-4"
                  src="/images/facebook.png"
                  alt="Facebook logo"
                />
              </a>
              <a href={partner.handles.twitter}>
                <img
                  className="w-4"
                  src="/images/twitter.png"
                  alt="Twitter logo"
                />
              </a>
              <a href={partner.handles.linkedin}>
                <img
                  className="w-4"
                  src="/images/linkedin.png"
                  alt="LinkedIn logo"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Partners;
