import styles from '../Profile/Profile.module.css';
import { useAuthContext } from '../../contexts/AuthContext';
import { useRecipesContext } from '../../contexts/recipesContext';
import { useContext, useState, useEffect } from 'react';
import RecipeItem from '../Recipes/RecipeItem/RecipeItem';
import * as recipesService from '../../services/recipesService'
import Spinner from '../Spinner';
export default function Profile() {
    const { user, id } = useAuthContext();
    
    const [isLoading, setIsLoading] = useState(false);
    const [recipes, setRecipes] = useState([]);
    
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

    let ownRecipes = recipes.filter((x) => x?.data?.ownerId === id);
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
            <div className={styles.gallery1}>
                <h2 className={`${styles.space}`}>Own Recipes</h2>
            </div>
            <div className="gallary row">
                {isLoading && <Spinner/>}
                {ownRecipes.map((x) => (
                    <RecipeItem key={x.data?.id} {...x} />
                ))}
            </div>
            {!isLoading && ownRecipes.length === 0 && (
                <div className={styles.customHeading1}>
                    <h2>No recipes yet</h2>
                </div>
            )}
        </>
    );
}
