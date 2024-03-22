import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { register, logout, login } from './lib/authFirebase';
import AuthContext from './contexts/AuthContext';

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
    const navigate = useNavigate();
    const [authInfo, setAuthInfo] = useState();

    const registerSubmitHandler = async (values) => {
        try {
            const user = await register(values);
            setAuthInfo(user);
            navigate('/');
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const loginSubmitHandler = async (values) => {
        try {
          const user = await login(values);
          setAuthInfo(user);
          navigate("/");
        } catch (err) {
        //   setError(err.message);
          setTimeout(() => {
            setError(null);
          }, 2000);
        }
      };

    const signOutHandler = () => {
        logout();
        setAuthInfo(null);
      };

    return (
        <AuthContext.Provider value={{ authInfo }}>
            <Navigation signOutHandler={signOutHandler} />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/login"  element={<Login loginSubmitHandler={loginSubmitHandler} />}></Route>
                <Route
                    path="/register"
                    element={
                        <Register
                            registerSubmitHandler={registerSubmitHandler}
                        />
                    }
                ></Route>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/gallery" element={<Gallery />}></Route>

                <Route path="/add" element={<AddRecipe />}></Route>
                <Route path="/logout" element={<Logout />} />
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
            <Footer />
        </AuthContext.Provider>
    );
}

export default App;
