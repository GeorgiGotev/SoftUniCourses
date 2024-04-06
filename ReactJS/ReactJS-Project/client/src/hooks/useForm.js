import { useState, useEffect } from 'react';

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    // const [error, setError] = useState(null);

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values);
    };

    const onChangeValues = (newValues) => {
        
        setValues(newValues);
    };

    return {
        values,
        onChange,
        onSubmit,
        onChangeValues
    };
}
