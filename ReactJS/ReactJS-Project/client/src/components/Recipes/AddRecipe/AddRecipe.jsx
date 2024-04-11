import { useState } from "react";
import { useNavigate } from "react-router-dom";

import style from "./AddRecipe.module.css";
import useForm from "../../../hooks/useForm";
import * as recipesService from "../../../services/recipesService"
import { useRecipesContext } from "../../../contexts/recipesContext";
import { useAuthContext } from "../../../contexts/AuthContext";

export default function AddRecipe() {
    const { id } = useAuthContext();
    const { addRecipe } = useRecipesContext();
    const [error, setError] = useState();
    const navigate = useNavigate();
    // on blur error handler
    const onCreateRecipe = async (data) => {
        try {
            const newRecipe = await recipesService.create({
                ...data,
                ownerId: id,
                liked: [],
            });

            addRecipe(data, newRecipe._key.path.segments[1]);
            navigate(`/recipes/${newRecipe._key.path.segments[1]}`);
        } catch (err) {
            setError(err.message);
            setTimeout(() => {
                setError(null);
            }, 2000);
        }
    };

    const { values, onChange, onSubmit } = useForm(onCreateRecipe, {
        name: "",
        imageUrl: "",
        ingredients: "",
        preparation: "",
    });

    return (
        <>
            <header className={style.headerRecipe}>
                <div className={`${style.recipe} ${style.page}`}>
                    <form onSubmit={onSubmit} className={`${style.recipe} ${style.form}`}>
                        <h3>ADD RECIPE</h3>
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
                            cols="34"
                            type="text"
                            name="preparation"
                            value={values.preparation}
                            onChange={onChange}
                            placeholder="preparation"
                        />
                        {error && <p className={style.errorMessage}>{error}</p>}
                        <button disabled={false}>Add</button>
                    </form>
                </div>
            </header>
        </>
    );
}
