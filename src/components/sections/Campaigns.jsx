import HeadingTwo from "../HeadingTwo";
import { upcomingEvent, previousEvent } from "../../utils"; // Assuming you have a campaignsData.js file with these exports
import { useEffect, useState } from "react";
const Campaigns = () => {
  const [previous, setPrevious] = useState(0);
  const [coming, setComing] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const prevNum = Math.floor(Math.random() * previousEvent.length);
      setPrevious(prevNum);

      const comingNum = Math.floor(Math.random() * upcomingEvent.length);
      setComing(comingNum);
    }, 6000);
    return () => clearInterval(interval);
  }, []);
  return (
    <section
      id="campaigns"
      className=" text-center min-h-screen bg-transparent-green w-screen text-white pt-21"
    >
      <HeadingTwo title="Our Campaigns" className="text-dark-green" />
      <div className="flex justify-between">
        <div className="text-right w-[50%] flex flex-col p-4 text-primary">
          <h2 className="text-secondary font-bold text-4xl mb-4">Previous Event</h2>
          <p>Planned visit to distribute supplies.</p>
          <p>Location: Kuchin</p>
          <p>Date: 5th June 2025</p>
          <div className="mt-8 flex justify-end">
            <img
              className="w-[75%]"
              src={previousEvent[previous].url}
              alt={previousEvent[previous].alt}
            />
          </div>
        </div>
        <div className="text-left w-[50%] flex flex-col p-4 text-primary">
          <h2 className="text-secondary font-bold text-4xl mb-4">Upcoming Event</h2>
          <p>Planned visit to our previous site to distribute supplies.</p>
          <p>Location: TBD</p>
          <p>Date: TBD</p>
          <div className="mt-8">
            <img
              className="w-[75%]"
              src={upcomingEvent[coming].url}
              alt={upcomingEvent[coming].alt}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
