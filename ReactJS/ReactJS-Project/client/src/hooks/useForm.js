import { useState, useEffect } from "react"

export default function useForm(submitHandler, initialValues) {
    const [values, setValues] = useState(initialValues);


    const onChange = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        Object.values(values).forEach(x=>{
            if(x===""){
                throw new Error ('fill everything')
            }
        })
        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    }
}
