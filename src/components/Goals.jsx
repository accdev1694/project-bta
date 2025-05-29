import Description from "./Description";

const Goals = ({ text, icon, alt }) => {
  return (
    <div className="w-25 h-45  flex flex-col justify-between leading-[20px] text-default tracking-wider text-center items-center font-dosis mt-4">
      <Description text={text} className="w-full  text-sm text-white" />
      <img
        className=" h-24 w-24 bg-transparent-default p-2 shadow-[0_0_2px_white]"
        src={icon}
        alt={alt}
      />
    </div>
  );
};

export default Goals;
