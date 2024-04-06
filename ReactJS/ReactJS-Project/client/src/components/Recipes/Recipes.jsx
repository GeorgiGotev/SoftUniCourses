import { useContext, useEffect, useState } from "react";
import {
  RecipesContext,
  useRecipesContext,
} from "../../contexts/recipesContext";
import styles from "./Recipes.module.css";
import RecipeItem from "./RecipeItem/RecipeItem";
import Spinner from "../Spinner";
import * as recipesService from "../../services/recipesService";

export default function Recipes() {
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

  return (
    <>
      <div
        id="gallery"
        className="text-center bg-dark text-light has-height-md middle-items wow fadeIn"
      >
        <h2 className={`${styles.space}`}>OUR MENU</h2>
      </div>
      {isLoading && <Spinner />}
      <div className={`gallary row ${styles.customRow}`}>
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
