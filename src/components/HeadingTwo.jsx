const HeadingTwo = ({title, className}) => {
    return ( <h2 className={`text-4xl sm:text-6xl lg:text-8xl font-inria mb-4 font-bold ${className}`}>
          {title}
        </h2> );
}
 
export default HeadingTwo;