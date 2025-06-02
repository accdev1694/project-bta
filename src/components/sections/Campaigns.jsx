import HeadingTwo from "../HeadingTwo";
import { useEffect, useState } from "react";
import { comingEvent, pastEvents } from "../../utils"; // Assuming you have a campaignsData.js file with these exports
import CampaignCard from "../CampaignCard";
const Campaigns = () => {
  const [past, setPast] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const prevNum = Math.floor(Math.random() * pastEvents.length);
      setPast(prevNum);
    }, 6000);
    return () => clearInterval(interval);
  }, [pastEvents.length]);

  return (
    <section
      id="campaigns"
      className=" text-center min-h-screen bg-default w-screen text-white pt-21 px-[5%] xl:px-[15%] pb-12"
    >
      <HeadingTwo title="Our Campaigns" className="text-left text-dark-green mb-8 sm:mb-18" />
      <div className="flex flex-col md:flex-row gap-12 sm:gap-18">
        {/* Coming Event */}
        <CampaignCard
        color="text-secondary"
          eventTitle="Coming Event"
          mission={comingEvent[0].mission}
          location={comingEvent[0].location}
          date={comingEvent[0].date}
          src={comingEvent[0].url}
          alt={comingEvent[0].alt}
        />

        {/* Past Events */}

        <CampaignCard
        color="text-accent"
          eventTitle="Past Event"
          mission={pastEvents[past].mission}
          location={pastEvents[past].location}
          date={pastEvents[past].date}
          src={pastEvents[past].url}
          alt={pastEvents[past].alt}
        />

        {/* <div className="text-left flex flex-col items-start text-primary gap-4">
          <div className="">
            <h2 className="text-accent font-bold text-2xl md:text-4xl">
              Past Events
            </h2>
            <p className="">
              <span className="font-bold">Mission:</span>{" "}
              {pastEvents[past].mission}
            </p>
            <p>
              <span className="font-bold">Location:</span>{" "}
              {pastEvents[past].location}
            </p>
            <p>
              <span className="font-bold">Date:</span> {pastEvents[past].date}
            </p>
          </div>
          <div className="">
            <img
              className=" transition"
              src={pastEvents[past].url}
              alt={pastEvents[past].alt}
            />
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Campaigns;
