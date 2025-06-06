const CampaignCard = ({
  className,
  eventTitle,
  mission,
  location,
  date,
  src,
  alt,
}) => {
  return (
    <div className="flex items-start flex-col sm:flex-row sm:items-end md:flex-col items-end gap-4 text-left text-primary">
      {/* Details Container */}
      <div className="w-full sm:w-[35%] md:w-full">
        <h2 className={`${className} font-bold text-xl lg:text-5xl md:text-4xl`}>
          {eventTitle}
        </h2>
        <p className="text-xs lg:text-lg leading-[1.2]">
          <span className="font-bold ">Mission:</span> {mission}
        </p>
        <p className="text-xs lg:text-lg leading-[1.2]">
          <span className="font-bold">Location:</span> {location}
        </p>
        <p className="text-xs lg:text-lg leading-[1.2]">
          <span className="font-bold">Date:</span> {date}
        </p>
      </div>
      {/* Image Container */}
      <img className="w-[300px] sm:w-[65%] md:w-full" src={src} alt={alt} />
    </div>
  );
};

export default CampaignCard;
