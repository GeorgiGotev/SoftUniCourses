import ContactUs from './components/ContactUs';
import Footer from './components/footer';
import Fruits from './components/Fruits';
import Header from './components/Header';
import OurService from './components/OurService';
import SiteMap from './components/SiteMap';
import TestyFruits from './components/TastyFruits';

function App() {
    return (
        <>
            <Header />
            <OurService />
            <Fruits />
            <TestyFruits />
            <ContactUs />
            <ContactUs />
            <section className="map_section">
                <div id="map" className="h-100 w-100 "></div>
            </section>
            <SiteMap />
            <Footer />
        </>
    );
}

export default App;
