import { Routes, Route } from 'react-router-dom';

import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home/Home';

function App() {
    return (
        <>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
                {/* <Route
                    path="/catalog/:fruitId/details"
                    element={<FruitDetails />}
                ></Route> */}
                {/* <Route
                    path="/catalog/:fruitId/edit"
                    element={<EditFruit />}
                ></Route> */}
                {/* <Route path="/create" element={<CreateFruit />}></Route> */}
                {/* <Route path="/contacts" element={<ContactUs />}></Route> */}
                {/* <Route path="/service" element={<OurService />}></Route> */}
                {/* <Route path="/logout" element={<Logout />} /> */}
                {/* <Route path="*" element={<NotFound />}></Route> */}
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
