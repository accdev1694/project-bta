const HeadingOne = ({ title, className }) => {
    return ( <h1 className={`${className} text-xs lg:text-md text-center font-bold font-merienda mx-auto text-shadow-xl `}>
        {title}
      </h1> );
}
 
export default HeadingOne;