import Fruits from '../components/Fruits';
import OurService from '../components/OurService';
import SiteMap from '../components/SiteMap';
import TestyFruits from '../components/TastyFruits';
import ContactUs from './ContactUs';
import Headers from './Header';

export default function Home(props){
    return(
        <>
        <Headers/>
        <OurService />
            <Fruits />
            <TestyFruits />
            <ContactUs />
            {/* <section className="map_section">
                <div id="map" className="h-100 w-100 "></div>
            </section> */}
            <SiteMap />
        </>
    );
}