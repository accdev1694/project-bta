const DonateLink = ({title, className, href, onClick}) => {
    return ( <a href={href} onClick={onClick} className={`${className} text-center btn font-abel text-sm lg:text-xl w-24 lg:w-30 py-2  border border-secondary font-bold   transition tracking-wider`}>{title}</a> );
}
 
export default DonateLink;