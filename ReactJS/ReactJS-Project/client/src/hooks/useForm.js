import { useState } from 'react';

export default function useForm(submitHandler, initialValues, id) {
    const [values, setValues] = useState(initialValues);

    const onChange = (e) => {
        setValues((state) => ({
            ...state,
            [e.target.name]: e.target.value,
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        submitHandler(values, id);
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
