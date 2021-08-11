import React from 'react'
import "./Login.css";
import { useForm } from '../Comments/hooks/useForm';

const initialForm ={
    email: "",
    password: ""

}

const validationsForm =(form)=>{
    let errors = {}
    let regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
    
    if(!form.email.trim()){
        errors.email = "El campo 'email' es requerido";
    }else if (!regexEmail.test(form.email.trim())){
        errors.email= "El campo 'Email' es incorrecto";
    }

    if(!form.password){
        errors.password = "El campo 'Password' es requerido"
    }else if (form.password.length < 6){
        errors.password= "El 'password' requiere"
    }
    return errors;
}


export default function Login() {
    const{
        form,
        errors,
        handleChange,
        handleBlur,
        handleSubmit}= useForm(initialForm, validationsForm)

    return (
        <div className="formContainer">
            <form onSubmit={handleSubmit}>
                <h2>Iniciar sesión</h2>
                <input 
                    type="email" 
                    value={form.email}
                    placeholder="example@gmail.com"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    required
                />
                {errors.email && <p>{errors.email}</p>}
                <input 
                    type="password" 
                    value={form.password} 
                    placeholder="contraseña"
                    required
                />
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}
