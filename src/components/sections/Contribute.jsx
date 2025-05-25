import HeadingOne from "../HeadingOne";
import HeadingTwo from "../HeadingTwo";
import DonateBtn from "../DonateBtn";
import JoinBtn from "../JoinUs";

const Contribute = () => {
    return ( <section className="min-h-screen text-center">
        <HeadingOne title="Join us in transforming lives through your generous donations and volunteer efforts." className="mb-56" />
        <HeadingTwo title="Make a Difference Today" className="text-primary" />
        <div className="flex justify-center items-center mt-12">
            <JoinBtn />
            <DonateBtn />            
        </div>
        <p className="mt-12 font-dancing-script text-2xl mb-2">"There can be no keener revelation of a society's soul than the way in which it treats its children."</p>
        <p>- Nelson Mandela</p>
    </section> );
}
 
export default Contribute;