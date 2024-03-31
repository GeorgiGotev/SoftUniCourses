import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as recipesService from '../services/recipesService';
import { useAuthContext } from './AuthContext';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const { id } = useAuthContext();
    const navigate = useNavigate();

    const onCreateRecipe = async (data) => {
        const newRecipe = await recipesService.create({
            ...data,
            ownerId: id,
            liked: [],
        });

        navigate('/recipes');
    };

    

    const contextValues = {
        onCreateRecipe,
        // onEditRecipe
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
