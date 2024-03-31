import style from './RecipeEdit.module.css';
import useForm from '../../../hooks/useForm';
import { useNavigate, useParams } from 'react-router-dom';
import * as recipesService from '../../../services/recipesService';
import { useEffect, useState } from 'react';

export default function RecipeEdit() {
    const navigate = useNavigate();
    const { recipeId } = useParams();
    const [editRecipe, setEditRecipe] = useState({});

    const onEditRecipe = async (editRecipe) => {
        console.log(editRecipe);
        await recipesService.editOffer(recipeId, {
            ...editRecipe,
            liked: [...editRecipe.liked],
            ownerId: editRecipe.ownerId,
            id: recipeId,
        });
        navigate(`/recipes/${recipeId}`);
    };

    const { values, onChange, onSubmit, onChangeValues } = useForm(
        onEditRecipe,
        {
            name: '',
            imageUrl: '',
            ingredients: '',
            preparation: '',
        }
    );

    useEffect(() => {
        recipesService.getOne(recipeId).then((result) => {
            onChangeValues(result);
            setEditRecipe(result);
        });
    }, [recipeId]);

    return (
        <>
            <header className={style.headerRecipe}>
                {/* <img className={style.img} src="../../../public/imgs/main.jpg" alt="" /> */}
                <div className={`${style.recipe} ${style.page}`}>
                    <form
                        onSubmit={onSubmit}
                        className={`${style.recipe} ${style.form}`}
                    >
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
                            placeholder="ingredients"
                        />
                        <input
                            type="text"
                            name="preparation"
                            value={values.preparation}
                            onChange={onChange}
                            placeholder="preparation"
                        />

                        <button disabled={false}>Edit</button>
                    </form>
                </div>
            </header>
        </>
    );
}
