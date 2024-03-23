import { Routes, Route } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';

import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home/Home';
import AddRecipe from './components/AddRecipe/AddRecipe';
import Logout from './components/Logout/Logout';
import { NotFound } from './components/NotFound/NotFound';

function App() {
    return (
        <AuthProvider>
            <Navigation />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>
                <Route path="/add" element={<AddRecipe />}></Route>
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </AuthProvider>
    );
}

export default App;
