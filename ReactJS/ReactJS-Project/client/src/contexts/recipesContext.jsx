import { createContext, useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as recipesService from '../services/recipesService';
// import { useAuth } from '../hooks/useAuth';
import AuthContext from './authContext/';

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const { id } = useContext(AuthContext);
    const navigate = useNavigate();

    const [recipes, setRecipes] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null);

    useEffect(() => {
        setIsLoading(true)
        try {
            recipesService.getAll().then((res) => {
                setRecipes(res);
            }).finally(()=> setIsLoading(false));
        } catch (err) {
            console.log(err);
        }
    }, []);

    const onCreateRecipe = async (values) => {
        // const emptyFields = Object.values(values).some((x) => x == '');
        // if (emptyFields) {
        //     setError('All fields are mandatory!');
        //     setTimeout(() => {
        //         setError(null);
        //     }, 2000);
        //     return;
        // }
        try {
            const newRecipeData = await recipesService.create({ ...values, ownerId: id, bought: false });
            
            setRecipes((state) => [...state, newRecipeData]);
            
        } catch (err) {
            console.log(err);
            // setError(err.message);
            // setTimeout(() => {
            //     setError(null);
            // }, 2000);
        }
        
        navigate('/recipes');
    };

    const values = {
        onCreateRecipe,
        recipes: recipes,
        isLoading: isLoading,
    };

    return (
        <RecipesContext.Provider value={values}>
            {children}
        </RecipesContext.Provider>
    );
};

RecipesContext.displayName = 'RecipeContext';

export default RecipesContext;
