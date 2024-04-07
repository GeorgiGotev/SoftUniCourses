import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as recipesService from '../services/recipesService';
import { useAuthContext } from './AuthContext';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const [error, setError] = useState()
    //take errors which are throw from service  //this errors are context which i use in components
    const [recipes, setRecipes] = useState([])

    const { id } = useAuthContext();
    const navigate = useNavigate();

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        try {
            recipesService
                .getAll()
                .then((res) => {
                    setRecipes(res);
                })
                .finally(() => setIsLoading(false));
        } catch (err) {
            console.log(err);
        }
    }, []);



    const onCreateRecipe = async (data) => {
        try {
            const newRecipe = await recipesService.create({
                ...data,
                ownerId: id,
                liked: [],
            });
            setRecipes(state => [...state, { data: { ...data, id: newRecipe._key.path.segments[1], ownerId: id, liked: [] } }])
            navigate(`/recipes/${newRecipe._key.path.segments[1]}`);


        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };


    const deleteRecipe = (recipeId) => {
        setRecipes((state) => state.filter((recipe) => recipe.data.id !== recipeId));
    };

    const contextValues = {
        onCreateRecipe,
        deleteRecipe,
        recipes,
        error,
        isLoading
    };

    return (
        <RecipesContext.Provider value={contextValues}>
            {children}
        </RecipesContext.Provider>
    );
};

export const useRecipesContext = () => {
    const context = useContext(RecipesContext);

    return context;
};
