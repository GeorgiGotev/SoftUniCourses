import { useState } from "react";

export default function useForm (onSubmit, initialValues, id) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({...state, [e.target.name]: e.target.value }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        onSubmit(values, id)
    }

    return {
        values,
        changeHandler,
        submitHandler
    }
};