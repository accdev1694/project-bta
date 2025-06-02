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
      className=" text-center min-h-screen bg-default w-screen text-white pt-16 px-[5%] xl:px-[15%] pb-12"
    >
      <HeadingTwo
        title="Our Campaigns"
        className="text-left text-dark-green mb-2 sm:mb-18"
      />
      <div className="flex flex-col md:flex-row gap-4 sm:gap-18">
        {/* Coming Event */}
        <CampaignCard
          className="text-secondary "
          eventTitle="Coming Event"
          mission={comingEvent[0].mission}
          location={comingEvent[0].location}
          date={comingEvent[0].date}
          src={comingEvent[0].url}
          alt={comingEvent[0].alt}
        />

        {/* Past Events */}

        <CampaignCard
          className="text-accent  "
          eventTitle="Past Event"
          mission={pastEvents[past].mission}
          location={pastEvents[past].location}
          date={pastEvents[past].date}
          src={pastEvents[past].url}
          alt={pastEvents[past].alt}
        />
      </div>
    </section>
  );
};

export default Campaigns;
