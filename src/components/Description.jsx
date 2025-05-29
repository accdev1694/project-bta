const Description = ({text, className}) => {
    return ( <p className={`${className} font-dosis tracking-wide sm:tracking-wider`}>
         {text}
        </p> );
}
 
export default Description;