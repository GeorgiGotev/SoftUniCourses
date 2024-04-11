import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useRecipesContext } from "../../../contexts/recipesContext";

import style from "./RecipeEdit.module.css";
import useForm from "../../../hooks/useForm";
import * as recipesService from "../../../services/recipesService";

export default function RecipeEdit() {
    const navigate = useNavigate();
    const { editRecipe } = useRecipesContext();
    const { recipeId } = useParams();
    const [error, setError] = useState();

    const onEditRecipe = async (editedData, recipeId) => {
        try {
            await recipesService.editRecipe(recipeId, editedData);
            editRecipe(recipeId, editedData)
            navigate(`/recipes/${recipeId}`);
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };


    const { values, onChange, onSubmit, onChangeValues } = useForm(onEditRecipe, {
        name: "",
        imageUrl: "",
        ingredients: "",
        preparation: "",
    }, recipeId);

    useEffect(() => {
        recipesService.getOne(recipeId).then((result) => {
            onChangeValues(result);
        });
    }, [recipeId]);

    return (
        <>
            <header className={style.headerRecipe}>
                <div className={`${style.recipe} ${style.page}`}>
                    <form onSubmit={onSubmit} className={`${style.recipe} ${style.form}`}>
                        <h3>EDIT RECIPE</h3>
                        <input
                            type="text"
                            name="name"
                            value={values.name}
                            onChange={onChange}
                            placeholder="recipe name"
                        />

                        <input
                            type="text"
                            name="imageUrl"
                            value={values.imageUrl}
                            onChange={onChange}
                            placeholder="www.somephoto.com"
                        />

                        <input
                            type="text"
                            name="ingredients"
                            value={values.ingredients}
                            onChange={onChange}
                            placeholder="ingredients separated with comma"
                        />
                        <textarea
                            rows="4"
                            cols="36"
                            type="text"
                            name="preparation"
                            value={values.preparation}
                            onChange={onChange}
                            placeholder="preparation"
                        />
                        {error && <p className={style.errorMessage}>{error}</p>}
                        <button disabled={false}>Edit</button>
                    </form>
                </div>
            </header>
        </>
    );
}
