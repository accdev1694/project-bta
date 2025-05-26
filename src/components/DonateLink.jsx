const DonateLink = ({title, className, href, onClick}) => {
    return ( <a href={href} onClick={onClick} className={`${className} text-center btn font-abel w-24  border border-secondary font-bold py-2  transition tracking-wider`}>{title}</a> );
}
 
export default DonateLink;