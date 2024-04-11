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

export const create = async (data) => {
    if (data.name.trim() === '') {
        throw new Error('Name of the product is mandatory.')
    }
    if (data.imageUrl.trim() === '') {
        throw new Error('Image of the product is mandatory.')
    }
    if (data.ingredients.trim() === '') {
        throw new Error('Ingredients of the product is mandatory.')
    }
    if (data.preparation.trim() === '') {
        throw new Error('You should explain more about the preparation of the product.')
    }
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

export const onLike = async (recipeId, liked, userId) => {
    const docRef = doc(db, 'recipes', recipeId);
    await updateDoc(docRef, {
        liked: [...liked, userId],
    });
};

export const onUnlike = async (recipeId, liked, userId) => {
    const docRef = doc(db, 'recipes', recipeId);
    const newLikedList = liked.filter(x => x !== userId);
    await updateDoc(docRef, {
        liked: newLikedList
    })
}

export const getLikedByUser = async (userId) => {
    const q = query(
        collection(db, 'recipes'),
        where('liked', 'array-contains', userId)
    );
    const querySnapshot = await getDocs(q);
    const data = querySnapshot.docs.map((x) => ({
        data: { ...x.data(), id: x.id },
    }));
    return data;
};

export const editRecipe = async (recipeId, data) => {
    if (data.name.trim() === '') {
        throw new Error('Name of the product is mandatory.')
    }
    if (data.imageUrl.trim() === '') {
        throw new Error('Image of the product is mandatory.')
    }
    if (data.ingredients.trim() === '') {
        throw new Error('Ingredients of the product is mandatory.')
    }
    if (data.preparation.trim() === '') {
        throw new Error('You should explain more about the preparation of the product.')
    }
    const res = await setDoc(doc(db, 'recipes', recipeId), data);

    return res;
};

export const deleteRecipe = async (recipeId) => {
    await deleteDoc(doc(db, "recipes", recipeId));
};

