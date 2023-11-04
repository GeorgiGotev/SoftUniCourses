import ContactUs from './components/ContactUs';
import Footer from './components/footer';

import Header from './components/Header';
import Home from './components/Home';
import Navigation from './components/Navigation';

import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/contacts" element={<ContactUs />}></Route>
                
                <Route path="/" element={<Home />}></Route>
            </Routes>
            <Footer />
        </>
    );
}

export default App;
