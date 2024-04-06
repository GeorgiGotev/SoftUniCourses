import { createContext, useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import * as recipesService from '../services/recipesService';
import { useAuthContext } from './AuthContext';

export const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
    const [ error, setError] = useState()
    //take errors which are throw from service  //this errors are context which i use in components



    const { id } = useAuthContext();
    const navigate = useNavigate();

    const onCreateRecipe = async (data) => {
        try{
            const newRecipe = await recipesService.create({
                ...data,
                ownerId: id,
                liked: [],
            });
    
            navigate('/recipes');
        }catch (err) {
            setError(err.message);
            setTimeout(() => {
              setError(null);
            }, 2000);
          }
        };
        
    

    

    const contextValues = {
        onCreateRecipe,
        error,
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
