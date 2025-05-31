import Description from "./Description";

const Goals = ({ text, icon, alt }) => {
  return (
    <div className="w-25 h-38  flex flex-col justify-between leading-[20px] text-default tracking-wider text-center items-center font-dosis">
      <Description
        text={text}
        className="w-full  text-xs text-white"
      />
      <img
        className=" h-18 w-18 bg-transparent-default p-2 shadow-[0_0_2px_white]"
        src={icon}
        alt={alt}
      />
    </div>
  );
};

export default Goals;
