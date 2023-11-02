import ContactFrom from './components/ContactsFrom';
import ContactUs from './components/ContactUs';
import Footer from './components/footer';
import Fruits from './components/Fruits';
import Header from './components/Header';
import Navigation from './components/Navigation';
import OurService from './components/OurService';
import SiteMap from './components/SiteMap';
import TestyFruits from './components/TastyFruits';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
        <Navigation/>
        <Routes>
            <Route path='/contacts' element={<ContactFrom/>}>
            </Route>
        </Routes>

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
