import { useContext } from 'react';
import RecipesContext from '../../contexts/recipesContext';
import styles from './Recipes.module.css';
import RecipeItem from './RecipeItem/RecipeItem';
import Spinner from '../Spinner';

export default function Recipes() {
    //loading spinner here!

    const { recipes, isLoading } = useContext(RecipesContext);

    return (
        isLoading? <Spinner/> :
        <section>
            <div
                id="gallery"
                className="text-center bg-dark text-light has-height-md middle-items wow fadeIn"
            >
                <h2 className={`${styles.space}`}>OUR MENU</h2>
            </div>
            <div className="gallary row">
                {recipes.map((x) => (
                    <RecipeItem key={x?.id} {...x} />
                ))}
            </div>
            {recipes.length === 0 && (
                    <div className={styles.customHeading1}>
                        <h2 >No recipes yet</h2>
                    </div>
                )}
        </section>
    );  
}
