const HeadingOne = ({ title, className }) => {
    return ( <h1 className={` text-md text-secondary text-center font-bold font-merienda mx-auto text-shadow-xl ${className}`}>
        {title}
      </h1> );
}
 
export default HeadingOne;