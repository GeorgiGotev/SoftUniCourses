import Fruits from '../Catalog/Fruits';
import OurService from '../OurService';
import SiteMap from '../SiteMap';
import TestyFruits from '../Catalog/TastyFruits';
import ContactUs from '../ContactUs';
import Headers from '../Header/Header';

export default function Home(props) {
    return (
        <>
            <Headers />
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
