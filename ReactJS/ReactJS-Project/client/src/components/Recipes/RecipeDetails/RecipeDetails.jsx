import { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';

import { useAuthContext } from '../../../contexts/AuthContext';
import { useRecipesContext } from '../../../contexts/recipesContext';
import * as recipeService from '../../../services/recipesService';
import styles from './RecipeDetails.module.css';
import Spinner from '../../Spinner';

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const [recipes, setRecipes] = useState(false);
    const [liked, setLiked] = useState(false);
    const { user } = useAuthContext();
    const {} = useRecipesContext;

    useEffect(() => {
        recipeService.getOne(recipeId).then((result) => {
            if (result.liked.some((x) => x === user.uid)) {
                setLiked(true);
            }
            setRecipes(result);
        });
    }, []);

    const onLikeHandler = async () => {
        try {
            await recipeService.getLiked(recipeId, recipes.liked, user.uid);
            setLiked(true);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className={styles.detailsContainer}>
            <div className="col-md-4">
                
                    {!recipes? (
                        <Spinner />
                    ) : (
                        <>
                        <div className="card bg-transparent border my-3 my-md-0">
                            <img
                                src={recipes.imageUrl}
                                alt={recipes.name}
                                className="rounded-0 card-img-top mg-responsive"
                            />
                            <div className="card-body">
                                <h4 className="pt20 pb20">{recipes.name}</h4>
                                <p className="text-white">
                                    {recipes.ingredients}.{' '}
                                </p>
                                <p className="text-white">
                                    {recipes.preparation}.{' '}
                                </p>
                                <h2 className="text-center mb-4">
                                    <a
                                        className={`badge badge-primary ${styles.btnDetails}`}
                                        href="#"
                                    >
                                        Edit
                                    </a>
                                    <a
                                        className={`badge badge-primary ${styles.btnDetails}`}
                                        href="#"
                                    >
                                        Delete
                                    </a>
                                    {!liked && (
                                        <Link
                                            onClick={onLikeHandler}
                                            className={`badge badge-primary ${styles.btnDetails}`}
                                            to={`/recipes/${recipeId}`}
                                        >
                                            Like
                                        </Link>
                                    )}
                                </h2>
                            </div>
                            </div>
                        </>
                    )}
            </div>
        </section>
    );
}
