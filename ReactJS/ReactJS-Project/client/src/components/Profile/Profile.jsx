import styles from '../Profile/Profile.module.css';
import AuthContext from '../../contexts/AuthContext';
import RecipesContext from '../../contexts/recipesContext';
import { useContext } from 'react';
import RecipeItem from '../Recipes/RecipeItem/RecipeItem';

export default function Profile() {
    const { user, id } = useContext(AuthContext);
    const { recipes } = useContext(RecipesContext);

    let ownRecipes = recipes.filter((x) => x.data?.ownerId === id);
    console.log(ownRecipes);

    return (
        <>
            <div className={styles.card}>
                <img
                    src="imgs/images.png"
                    alt="Avatar"
                    style={{ width: '10%' }}
                />
                <div className={styles.container}>
                    <p>Profile Information</p>
                    <h4>
                        <b>{user.email}</b>
                    </h4>
                </div>
            </div>
            <section>
                <div
                    id="gallery"
                    className="text-center bg-dark text-light has-height-md middle-items wow fadeIn"
                >
                    <h2 className={`${styles.space}`}>Own Recipes</h2>
                </div>
                <div className="gallary row">
                    {ownRecipes.map((x) => (
                        <RecipeItem key={x._id} {...x} />
                    ))}
                </div>
                {ownRecipes.length === 0 && (
                    <div className={styles.customHeading1}>
                        <h2>No recipes yet</h2>
                    </div>
                )}
            </section>
        </>
    );
}

    