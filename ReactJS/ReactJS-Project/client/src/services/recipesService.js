import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    deleteDoc,
    setDoc,
} from 'firebase/firestore';
import { db } from '../lib/firebase';



export const create = async (data) => {
    await addDoc(collection(db, 'recipes'), data);
};

export const getAll = async () => {
    const recipeRef = collection(db, 'recipes');

    const res = await getDocs(recipeRef);
    const data = res.docs.map((x) => ({
        data: x.data(),
        id: x.id,
    }));
    return data;
};
