import { Routes, Route } from 'react-router-dom';

import { AuthProvider } from './contexts/AuthContext';
import { RecipesProvider } from './contexts/recipesContext';

import Footer from './components/Footer/Footer';
import Recipes from './components/Recipes/Recipes';
import Login from './components/Login/Login';
import Profile from './components/Profile/Profile';
import Register from './components/Register/Register';
import Navigation from './components/navigation/Navigation';
import Home from './components/Home/Home';
import AddRecipe from './components/Recipes/AddRecipe/AddRecipe';
import Logout from './components/Logout/Logout';
import RecipeDetails from './components/Recipes/RecipeDetails/RecipeDetails';
import RecipeEdit from './components/Recipes/RecipeEdit/RecipeEdit';
import { NotFound } from './components/NotFound/NotFound';

//todo: add route guards and error handler notify after navbar, maybe like a new div...add error handler to 404???

function App() {
    return (
        <AuthProvider>
            <RecipesProvider>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/login" element={<Login />}></Route>
                    <Route path="/register" element={<Register />}></Route>
                    <Route path="/profile" element={<Profile />}></Route>
                    <Route path="/add" element={<AddRecipe />}></Route>
                    <Route path="/recipes" element={<Recipes />}></Route>
                    <Route path="/recipes/:recipeId" element={<RecipeDetails />}></Route>
                    <Route path="/recipes/:recipeId/edit" element={<RecipeEdit />}></Route>
                    <Route path="/logout" element={<Logout />} />
                    <Route path="*" element={<NotFound />}></Route>
                </Routes>
                <Footer />
            </RecipesProvider>
        </AuthProvider>
    );
}

export default App;
