import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';

import ContactUs from './components/ContactUs';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Navigation from './components/Navigation/Navigation';
import Register from './components/Register/Register';
import  Logout  from './components/Logout/Logout';

function App() {
    return (
        <>
            <AuthProvider>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/contacts" element={<ContactUs />}></Route>
                    <Route path='/logout' element={<Logout />} />
                </Routes>
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;
