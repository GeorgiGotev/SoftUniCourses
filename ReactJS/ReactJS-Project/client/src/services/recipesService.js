import {
    addDoc,
    collection,
    doc,
    getDoc,
    getDocs,
    deleteDoc,
    setDoc,
    query,
    where,
    updateDoc,
} from 'firebase/firestore';
import { db } from '../lib/firebase';
// import { useAuthContext } from './AuthContext';

export const create = async (data) => {
    const dataRes = await addDoc(collection(db, 'recipes'), data);
    return dataRes;
};

export const getAll = async () => {
    const recipeRef = collection(db, 'recipes');

    const res = await getDocs(recipeRef);
    const data = res.docs.map((x) => ({
        data: { ...x.data(), id: x.id },
    }));
    return data;
};

export const getOne = async (recipeId) => {
    const recipeData = doc(db, 'recipes', recipeId);

    const res = await getDoc(recipeData);

    return res.data();
};

export const getOwn = async (userId) => {
    const q = query(collection(db, 'recipes'), where('ownerId', '==', userId));
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((x) => ({
        data: { ...x.data(), id: x.id },
    }));
    return data;
};

export const getLiked = async (recipeId, liked, userId) => {
    const docRef = doc(db, 'recipes', recipeId);
    await updateDoc(docRef, {
        liked: [...liked, userId],
    });
};