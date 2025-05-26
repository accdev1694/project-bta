const Description = ({text, className}) => {
    return ( <p className={`${className} text-lg  mt-2 mb-6 font-dosis tracking-wider`}>
         {text}
        </p> );
}
 
export default Description;