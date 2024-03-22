import style from '../AddRecipe/AddRecipe.module.css';

export default function AddRecipe() {
    return (
        <>
        <header className={style.headerRecipe}>
            {/* <img className={style.img} src="../../../public/imgs/main.jpg" alt="" /> */}
            <div className={`${style.recipe} ${style.page}`}>
                <form className={`${style.recipe} ${style.form}`}>
                    <h3>ADD RECIPE</h3>
                    {/* <label htmlFor="text">Recipe name</label> */}
                    <input type="text" name='name' placeholder="recipe name" />

                    {/* <label htmlFor="password">Password</label> */}
                    <input type="text" name='imageUrl' placeholder="www.somephoto.com" />

                    <input type="text" name='ingredients' placeholder="ingredients" />
                    <input type="text" name='preparation' placeholder="preparation" />

                    <button>Add</button>
                    {/* <p className={style.message}>
                        Not registered? <a href="#">Create an account</a>
                    </p> */}
                </form>
            </div>
            </header>
        </>
    );
}
