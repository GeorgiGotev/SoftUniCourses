import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from "firebase/auth";

import { authenticated as auth } from "../lib/firebase";

export const register = async (values) => {
    if (values.displayName.trim() === "") {
        throw new Error("Your name is important for us!");
    }
    if (values.email.trim() === "") {
        throw new Error("Email is mandatory.");
    }
    if (values.password !== values.rePassword) {
        throw new Error("Passwords don't match");
    }
    
    if (values.password.trim().length < 6) {
        throw new Error("Password must be at least 6 characters. (Don't use space)");
    }

    const res = await createUserWithEmailAndPassword(
        auth,
        values.email,
        values.password
    );

    if (!res) {
        throw new Error("Email is already in use!");
    }
    try {
        await updateProfile(auth.currentUser, {
            displayName: values.displayName,
        })
    } catch (err) {
        console.log(err);
    }

    return res.user;
};

export const login = async (values) => {
    if (values.email.trim() === "") {
        throw new Error("Enter your valid email");
    }
    if (values.password.trim() === "") {
        throw new Error("Enter your valid password");
    }

    const res = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
    );
    const user = res.user;
    if (!user) {
        throw new Error("No user with this email or password");
    }
    return user;
};

export const logout = () => {
    signOut(auth);
};
