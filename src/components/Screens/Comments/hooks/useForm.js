import { useState } from "react";

export const useForm = (initialForm, validationsForm) =>{
    const [form, setForm] = useState(initialForm);
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const {name, value} = e.target
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleBlur = (e) =>{
        handleChange(e);
        setErrors(validationsForm(form));
    }
        

    const handleSubmit = (e) =>{
        e.preventDefault()
        setErrors(validationsForm(form));

        if(Object.keys(errors).length === 0){
            alert("enviando formulario...")
        } else {
            return;
        }
    };

    return{
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit
    }
}