const HeadingTwo = ({title, className}) => {
    return ( <h2 className={`text-6xl font-inria mb-4 font-bold ${className}`}>
          {title}
        </h2> );
}
 
export default HeadingTwo;