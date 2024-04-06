import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

import { useAuthContext } from "../../../contexts/AuthContext";
import { useRecipesContext } from "../../../contexts/recipesContext";
import * as recipeService from "../../../services/recipesService";
import styles from "./RecipeDetails.module.css";
import Spinner from "../../Spinner";

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const { user, isAuthenticated } = useAuthContext();
  const {} = useRecipesContext;
  const navigate = useNavigate();

  const [recipes, setRecipes] = useState(false);
  const [liked, setLiked] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    recipeService.getOne(recipeId).then((result) => {
      if (result.liked.some((x) => x === user.uid)) {
        setLiked(true);
      }
      setRecipes(result);
      if (result.ownerId === user.uid) {
        setIsOwner(true);
      }
    });
  }, [recipeId]);

  const onLikeHandler = async () => {
    try {
      await recipeService.onLike(recipeId, recipes.liked, user.uid);
      setLiked(true);
    } catch (err) {
      console.log(err);
    }
  };

  const onDeleteHandler = async () => {
    try {
      const result = confirm(`Are you sure you want to delete ${recipes.name}`);

      if (result) {
        await recipeService.deleteRecipe(recipeId);
      }
      //   navigate('/recipes')
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className={styles.detailsContainer}>
      <div className="col-md-4">
        {!recipes ? (
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
                <p className="text-white">{recipes.ingredients}. </p>
                <p className="text-white">{recipes.preparation}. </p>
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
