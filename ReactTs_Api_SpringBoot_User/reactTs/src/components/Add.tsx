import React, { useState } from 'react';
import '../styles/Add.css';
import { Api } from '../utils/Api';
import { Link } from "react-router-dom";

export const Add = () => {
    const api = Api();
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        emailId: ""
    });

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (user) {
            const add = await api.fetchAdd({ corpo: user });
        }
    }
    return (
        <div className="container">
            <div>
                <Link to="/" className="back-button">Voltar</Link>
            </div>
            <div className='title'>
                <h1>Cadastro de usuário</h1>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="firstName">First name:</label>
                    <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        value={user.firstName}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="lastName">Last name:</label>
                    <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        value={user.lastName}
                        onChange={handleChange}
                        required />
                </div>
                <div className="form-group">
                    <label htmlFor="emailId">E-mail:</label>
                    <input
                        type="email"
                        name="emailId"
                        id="emailId"
                        value={user.emailId}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button>Enviar</button>
            </form>
        </div>
    )
}
