import About from './components/About/About';
import Footer from './components/Footer/Footer';
import Gallery from './components/Gallery/Gallery';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Header from './components/header/Header';
import Navigation from './components/navigation/Navigation';

function App() {
    return (
        <>
            <Navigation />
            <Header />
            <About />
            <Gallery />
            <Footer />
            <Login />
            <Register />
            <Profile />
        </>
    );
}

export default App;
