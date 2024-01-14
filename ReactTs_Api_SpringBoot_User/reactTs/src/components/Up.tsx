import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Api } from "../utils/Api";

export const Up = () => {
    const { id } = useParams();
    const api = Api();
    const [user, setUser] = useState([]);

    const handleChange = (e: Event) => {
        const { name, value } = e.target;
        setUser((prevUser) => ({
            ...prevUser,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (user) {
            const add = await api.fetchUp({ id, corpo: user })
        }
    }

    const fetchData = async () => {
        const data = await api.fetchDataId({id});
        setUser(data);
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="container">
            <div>
                <Link to="/" className="back-button">Voltar</Link>
            </div>
            <div className='title'>
                <h1>Alterar o usuário</h1>
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