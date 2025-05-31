
const CampaignCard = ({ color, eventTitle, mission, location, date, src, alt }) => {
 
  
    return (
    <div className="flex items-end gap-4 text-left text-primary">
      {/* Details Container */}
      <div className="w-[35%]">
        <h2 className={`${color} font-bold text-2xl md:text-4xl`} >
          {eventTitle}
        </h2>
        <p className="mt-2">
          <span className="font-bold ">Mission:</span> {mission}
        </p>
        <p className="mt-1">
          <span className="font-bold">Location:</span> {location}
        </p>
        <p className="mt-1">
          <span className="font-bold">Date:</span> {date}
        </p>
      </div>
      <img className="w-[65%]" src={src} alt={alt} />
    </div>
  );
};

export default CampaignCard;
