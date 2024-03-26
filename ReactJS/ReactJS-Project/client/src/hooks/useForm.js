import { useState, useEffect } from 'react';

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);
    const [error, setError] = useState(null);

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        Object.values(values).forEach((x) => {
            try {
                if (x === '') {
                    throw new Error('fill everything');
                }
                submitHandler(values);
            } catch (err) {
                setError(err.message);
                setTimeout(() => {
                    setError(null);
                }, 2000);
            }
        });
    };

    return {
        values,
        onChange,
        onSubmit,
        error,
    };
}
