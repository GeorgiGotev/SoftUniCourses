import styles from "./Recipes.module.css";

import {useRecipesContext} from "../../contexts/recipesContext";
import RecipeItem from "./RecipeItem/RecipeItem";
import Spinner from "../Spinner";

export default function Recipes() {
  const { recipes, isLoading } = useRecipesContext();
  //search bar???
  //pagination
  return (
    <>
      <div
        id="gallery"
        className="text-center bg-dark text-light has-height-md middle-items wow fadeIn"
      >
        <h2 className={`${styles.space}`}>OUR RECIPES</h2>
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
