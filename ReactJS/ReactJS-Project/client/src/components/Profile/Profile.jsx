import styles from '../Profile/Profile.module.css';
import AuthContext from '../../contexts/AuthContext';
import { useContext } from 'react';


export default function Profile() {
    const { user } = useContext(AuthContext);

    
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
            <section className="fruit_section">
                <div className="container">
                    <h2 className="custom_heading">Own list of Recipes</h2>
                    {/* <p className="custom_heading-text">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have
                </p> */}
                    {/* {ownFruits.map((x) => (
                        <Fruit key={x._id} {...x} />
                    ))}
                    {ownFruits.length === 0 && (
                        <div>
                            <h2 className="custom_heading">No fruits yet</h2>
                        </div>
                    )} */}
                </div>
            </section>
        </>
    );
}
