import React from 'react'
import "./Login.css";

export default function Login() {
    return (
        <div className="formContainer">
            <form>
                <h2>Iniciar sesión</h2>
                <input type="email" value="email" placeholder="example@gmail.com"/>
                <input type="password" value="password" placeholder="contraseña"/>
                <button type="submit">Iniciar sesión</button>
            </form>
        </div>
    )
}
