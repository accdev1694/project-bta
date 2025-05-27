import Description from "./Description";

const Goals = ({ text, icon, alt }) => {
  return (
    <div className=" flex flex-col justify-between leading-[20px] text-default tracking-wider text-center items-center font-dosis gap-6 max-w-52 mt-8">
      <Description text={text} className="h-[40%] text-sm text-white" />
      <img
        className="h-36 w-36 bg-transparent-default p-6 shadow-[0_0_2px_white]"
        src={icon}
        alt={alt}
      />
    </div>
  );
};

export default Goals;
