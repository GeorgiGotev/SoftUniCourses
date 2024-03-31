import styles from '../Profile/Profile.module.css';
import { useAuthContext } from '../../contexts/AuthContext';
import { useRecipesContext } from '../../contexts/recipesContext';
import { useContext, useState, useEffect } from 'react';
import RecipeItem from '../Recipes/RecipeItem/RecipeItem';
import * as recipesService from '../../services/recipesService';
import Spinner from '../Spinner';
export default function Profile() {
    const { user, id } = useAuthContext();

    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const [likedRecipes, setLikedRecipes] = useState([]);

    useEffect(() => {
        setIsLoading(true);
        try {
            // add new service to get only recipes for this user, this is not good to take all recipes because they could me 1000 or more....
            recipesService
                .getOwn(id)
                .then((res) => {
                    // let ownRecipes = res.filter((x) => x?.data?.ownerId === id)
                    setRecipes(res);
                })
                .finally(() => setIsLoading(false));

            recipesService
                .getLikedByUser(id)
                .then((res) => setLikedRecipes(res));
        } catch (err) {
            console.log(err);
        }
    }, []);

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
                        <p>{`name: ${user.displayName}`}</p>
                        <p>{`e-mail: ${user.email}`}</p>
                    </h4>
                </div>
            </div>
            <div className={styles.gallery1}>
                <h2 className={`${styles.space}`}>Own Recipes</h2>
            </div>
            <div className="gallary row">
                {isLoading && <Spinner />}
                {recipes.map((x) => (
                    <RecipeItem key={x.data?.id} {...x} />
                ))}
            </div>
            {!isLoading && recipes.length === 0 && (
                <div className={styles.customHeading1}>
                    <h2>No recipes yet</h2>
                </div>
            )}
        </>
    );
}
