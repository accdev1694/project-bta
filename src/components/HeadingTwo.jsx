const HeadingTwo = ({title, className}) => {
    return ( <h2 className={`text-4xl sm:text-6xl font-inria font-bold ${className}`}>
          {title}
        </h2> );
}
 
export default HeadingTwo;