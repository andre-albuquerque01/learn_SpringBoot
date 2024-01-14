import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Api } from "../utils/Api"
import "../styles/Get.css";
import pencil from "../img/pencil.png";
import trash from "../img/trash.png";

export const Get = () => {
    const [dados, setDados] = useState([]);
    const [valueId, setId] = useState<string>();
    const api = Api();

    const fetchData = async () => {
        const data = await api.fetchData();
        setDados(data);
    };

    const handleId = (id: string) => {
        setId(id)
    }

    const fetchDelete = async () => {
        if (valueId && valueId !== '') {
            const del = await api.fetchDelete({ id: valueId });
        }
    }

    useEffect(() => {
        if (valueId !== '' && valueId !== undefined) {
            fetchDelete();
        }
    }, [valueId]);

    useEffect(() => {
        fetchData();
    });

    return (
        <div className="container">
            <div>
                <Link to="add" className="link-button">Adicionar</Link>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Sobrenome</th>
                        <th>E-mail</th>
                        <th>#</th>
                    </tr>
                </thead>
                <tbody>
                    {dados.map(({ id, firstName, lastName, emailId }) => (
                        <tr>
                            <td>{firstName}</td>
                            <td>{lastName}</td>
                            <td>{emailId}</td>
                            <td>
                                <Link to={`update/${id}`}><img src={pencil} alt="" width="15" /></Link>
                                <img src={trash} alt="" width={15} onClick={() => handleId(id)} className='img' />
                            </td>
                        </tr>
                    ))}
                    <tr></tr>
                </tbody>
            </table>
        </div>
    )
}
