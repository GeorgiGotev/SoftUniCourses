import style from './AddRecipe.module.css';
import useForm from '../../../hooks/useForm';
import { useRecipesContext } from '../../../contexts/recipesContext';

export default function AddRecipe() {
    const { onCreateRecipe, error } = useRecipesContext();
    const { values, onChange, onSubmit } = useForm(onCreateRecipe, {
        name: '',
        imageUrl: '',
        ingredients: '',
        preparation: '',
    });
    return (
        <>
            <header className={style.headerRecipe}>
                {/* <img className={style.img} src="../../../public/imgs/main.jpg" alt="" /> */}
                <div className={`${style.recipe} ${style.page}`}>
                    <form
                        onSubmit={onSubmit}
                        className={`${style.recipe} ${style.form}`}
                    >
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
                            placeholder="ingredients"
                        />
                        <input
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
