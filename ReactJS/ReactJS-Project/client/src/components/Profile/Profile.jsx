import styles from '../Profile/Profile.module.css';
import { useAuthContext } from '../../contexts/AuthContext';
import { useRecipesContext } from '../../contexts/recipesContext';
import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
            {/* <div className={styles.sidebare}>
                <Link
                    className={`badge badge-primary ${styles.btnDetails} ${styles.sideBarBtn}`}
                    href="#" >OWN RECIPES</Link>
                <Link
                    className={`badge badge-primary ${styles.btnDetails} ${styles.sideBarBtn}`}

                    href="#" >FAVORITE</Link>
                <Link
                    className={`badge badge-primary ${styles.btnDetails} ${styles.sideBarBtn}`}
                    href="#" >Link 3</Link>
            </div> */}

            <div className={styles.contentDiv}>
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
                    <h2 className={`${styles.space}`}>RECIPES</h2>
                </div>
                <div className="row justify-content-center">
                    <div className="col-sm-7 col-md-4 mb-5">
                        <ul className="nav nav-pills nav-justified mb-3" id="pills-tab" role="tablist">
                            <li className="nav-item">
                                <Link className="nav-link active" id="pills-home-tab" data-toggle="pill" href="#foods" role="tab" aria-controls="pills-home" aria-selected="true">Own Recipes</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" id="pills-profile-tab" data-toggle="pill" href="#juices" role="tab" aria-controls="pills-profile" aria-selected="false">Favorite</Link>
                            </li>
                        </ul>
                    </div>
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
            </div>
        </>
    );
}
