import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import styles from "./RecipeDetails.module.css";
import Spinner from "../../Spinner";
import * as recipeService from "../../../services/recipesService";
import { useAuthContext } from "../../../contexts/AuthContext";
import { useRecipesContext } from "../../../contexts/recipesContext";

export default function RecipeDetails() {
    const { recipeId } = useParams();
    const { user, isAuthenticated } = useAuthContext();
    const { deleteRecipe } = useRecipesContext();
    //   const navigate = useNavigate();

    const [recipe, setRecipe] = useState(false);
    const [liked, setLiked] = useState(false);
    const [isOwner, setIsOwner] = useState(false);

    useEffect(() => {
        try {
            recipeService.getOne(recipeId).then((result) => {
                if (result.liked.some((x) => x === user?.uid)) {
                    setLiked(true);
                }
                setRecipe(result);
                if (result.ownerId === user?.uid) {
                    setIsOwner(true);
                }
            });
        } catch (err) {
            console.log(err);
        }

    }, [recipeId]);

    const onLikeHandler = async () => {
        try {
            await recipeService.onLike(recipeId, recipe.liked, user.uid);
            setLiked(true);
        } catch (err) {
            console.log(err);
        }
    };

    const onDeleteHandler = async () => {
        try {
            const result = confirm(`Are you sure you want to delete ${recipe.name}`);

            if (result) {
                await recipeService.deleteRecipe(recipeId);
                deleteRecipe(recipeId)
            }
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <section className={styles.detailsContainer}>
            <div className="col-md-4">
                {!recipe ? (
                    <Spinner />
                ) : (
                    <>
                        <div className="card bg-transparent border my-3 my-md-0">
                            <img
                                src={recipe.imageUrl}
                                alt={recipe.name}
                                className="rounded-0 card-img-top mg-responsive"
                            />
                            <div className="card-body">
                                <h4 className="pt20 pb20">{recipe.name}</h4>
                                <p className="text-white">{recipe.ingredients}. </p>
                                <p className="text-white">{recipe.preparation}. </p>
                                {isAuthenticated && (
                                    <h2 className="text-center mb-4">
                                        {isOwner && (
                                            <>
                                                <Link
                                                    className={`badge badge-primary ${styles.btnDetails}`}
                                                    to={`/recipes/${recipeId}/edit`}
                                                >
                                                    Edit
                                                </Link>
                                                <Link
                                                    onClick={onDeleteHandler}
                                                    className={`badge badge-primary ${styles.btnDetails}`}
                                                    to={`/profile`}
                                                >
                                                    Delete
                                                </Link>
                                            </>
                                        )}
                                        {!isOwner && !liked && (
                                            <Link
                                                onClick={onLikeHandler}
                                                className={`badge badge-primary ${styles.btnDetails}`}
                                                to={`/recipes/${recipeId}`}
                                            >
                                                Like
                                            </Link>
                                        )}
                                        {liked && (
                                            <>
                                                <p>It is already in favorite!</p>
                                                <Link
                                                    onClick={onLikeHandler}
                                                    className={`badge badge-primary ${styles.btnDetails}`}
                                                    to={`/recipes/${recipeId}`}
                                                >
                                                    Favorite
                                                </Link>
                                            </>
                                        )}
                                    </h2>
                                )}
                            </div>
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}
