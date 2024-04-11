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

    const selectedRecipe = (recipeId) => {
        return recipes.find((x) => x.data.id === recipeId) || {}
    }

    const likeRecipe = (recipeId, userId) => {
        setRecipes((state) => state.map(x => x.data.id === recipeId ?
            { data: { ...x.data, liked: [...x.data.liked, userId] } }
            : x))
    }
    const unlikeRecipe = (recipeId, liked, userId) => {
        let newLiked = liked.filter(x => x !== userId)

        setRecipes((state) => state.map(x => x.data.id === recipeId ?
            { data: { ...x.data, liked: newLiked } }
            : x))
    }


    // maybe should move own and  liked filters (this 2 func above) to profile Component, because it doesn't change/response state
    const ownRecipes = (ownerId) => {
        return recipes.filter(x => x.data.ownerId === ownerId)
    }

    const likedRecipes = (ownerId) => {
        return recipes.filter(x => x.data.liked.includes(ownerId))
    }


    const contextValues = {
        addRecipe,
        editRecipe,
        deleteRecipe,
        selectedRecipe,
        likeRecipe,
        ownRecipes,
        likedRecipes,
        unlikeRecipe,
        recipes,
        isLoading,
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
