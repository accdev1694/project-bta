import Description from "./Description";

const Goals = ({ text, icon, alt }) => {
  return (
    <div className=" flex flex-col justify-between leading-[20px] text-default tracking-wider text-center items-center font-dosis gap-2 h-90 max-w-52 mx-auto mt-10">
      <div className="h-[40%]">
        <Description text={text} />
      </div>
      <img
        className="h-[60%] w-52 bg-transparent-default p-6 shadow-[0_0_2px_white]"
        src={icon}
        alt={alt}
      />
    </div>
  );
};

export default Goals;
