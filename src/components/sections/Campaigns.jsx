import HeadingTwo from "../HeadingTwo";
import { comingEvent, pastEvents } from "../../utils"; // Assuming you have a campaignsData.js file with these exports
import { useEffect, useState } from "react";
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
      className=" text-center min-h-screen bg-transparent-green w-screen text-white pt-21 px-[15%] flex flex-col justify-center items-center"
    >
      <HeadingTwo title="Our Campaigns" className="text-dark-green" />
      <div className="flex justify-between gap-6">

        {/* Past Events */}
        <div className="text-left w-[50%] flex flex-col p-4 text-primary">
          <h2 className="text-accent font-bold text-4xl mb-4">Past Events</h2>
          <p><span className="font-bold">Mission:</span> {pastEvents[past].mission}</p>
          <p><span className="font-bold">Location:</span> {pastEvents[past].location}</p>
          <p><span className="font-bold">Date:</span> {pastEvents[past].date}</p>
          <div className="mt-8 flex justify-end">
            <img
              className=" transition"
              src={pastEvents[past].url}
              alt={pastEvents[past].alt}
            />
          </div>
        </div>

        {/* Coming Event */}
        <div className="text-left w-[50%] flex flex-col p-4 text-primary">
          <h2 className="text-secondary font-bold text-4xl mb-4">Coming Event</h2>
          <p><span className="font-bold">Mission:</span> {comingEvent[0].mission}</p>
          <p><span className="font-bold">Location:</span> {comingEvent[0].location}</p>
          <p><span className="font-bold">Date:</span> {comingEvent[0].date}</p>
          <div className="mt-8">
            <img
              className=""
              src={comingEvent[0].url}
              alt={comingEvent[0].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
