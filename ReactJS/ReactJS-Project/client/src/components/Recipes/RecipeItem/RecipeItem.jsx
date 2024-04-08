import { Link } from 'react-router-dom';
import styles from './RecipeItem.module.css'

export default function RecipeItem({
    data
}){

    return(  
        <div className="col-sm-6 col-lg-3 gallary-item wow fadeIn">
                    <img
                        src={data.imageUrl}
                        alt={data.name}
                        className="gallary-img"
                    />
                    <Link to={`/recipes/${data.id}`} className="gallary-overlay">
                        <h2 className={styles.foodName}>{`${data.name}`}</h2>
                    </Link>
                </div>
    );
}