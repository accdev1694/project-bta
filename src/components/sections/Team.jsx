import HeadingOne from "../HeadingOne.jsx";
import HeadingTwo from "../HeadingTwo.jsx";
import { team } from "../../utils.js";

const Team = () => {
  if (!team || team.length < 1) {
    return;
  }

  return (
    <section id="team" className="min-h-screen pt-14 md:pt-21 text-center bg-white px-[5%] lg:px-[15%]">
      <HeadingOne
        title="Meet the passionate individuals behind our mission."
        className="mb-6 lg:mb-24 text-secondary"
      />
      <HeadingTwo title="Our Team" className="text-secondary" />
      <div className="grid lg:grid-cols-2">
        {team.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center justify-between mt-8 lg:mt-12"
          >
            <img
              className="rounded-full w-12 lg:w-18 border-secondary"
              src={member.image}
              alt={member.name}
            />
            <h3 className="mt-2 font-bold text-sm font-abel tracking-wide">
              {member.name}
            </h3>
            <p className="text-sm font-inria">{member.position}</p>
            <p className="text-[12px] font-inria lg:w-48 mt-2">
              {member.description}
            </p>
            <div className="flex justify-center items-center gap-4 mt-4">
              <a href={member.handles.instagram} target="_blank">
                <img
                  className="w-4"
                  src="/images/instagram.png"
                  alt="Instagram logo"
                  
                />
              </a>
              <a href={member.handles.facebook} target="_blank">
                <img
                  className="w-4"
                  src="/images/facebook.png"
                  alt="Facebook logo"
                  target="_blank"
                />
              </a>
              <a href={member.handles.twitter} target="_blank">
                <img
                  className="w-4"
                  src="/images/twitter.png"
                  alt="Twitter logo"
                />
              </a>
              <a href={member.handles.linkedin} target="_blank">
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

export default Team;
