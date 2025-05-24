const Goals = ({text, icon}) => {
    return ( <div className=" flex flex-col text-secondary text-center items-center font-dosis gap-6 h-78 max-w-52 mx-auto mt-8">
        {text}
        <img className="w-52 flex-1 bg-gray-500 p-4" src={icon} alt="" />
    </div> );
}

export default Goals;