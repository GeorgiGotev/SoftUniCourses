import { createContext, useState, useEffect, useContext } from 'react';

import * as recipesService from '../services/recipesService';
import { useAuthContext } from './AuthContext';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const [recipes, setRecipes] = useState([])

    const { id } = useAuthContext();

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


    const addRecipe = (data, recipeId) => {
        setRecipes(state => [...state, { data: { ...data, id: recipeId, ownerId: id, liked: [] } }])
    };

    const deleteRecipe = (recipeId) => {
        setRecipes((state) => state.filter((recipe) => recipe.data.id !== recipeId));
    };

    const editRecipe = (recipeId, editedData) => {
        setRecipes((state) => state.map((x) => (x.data.id === recipeId ? { data: { ...editedData, id: recipeId } } : x)))
    };

    const contextValues = {
        addRecipe,
        editRecipe,
        deleteRecipe,
        recipes,
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
