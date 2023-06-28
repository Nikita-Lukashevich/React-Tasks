import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const User = () =>{
    let { id } = useParams();

    const [user, setUser] = useState([]);

    useEffect(() => {
        const apiUrl = `https://jsonplaceholder.typicode.com/users/${id}`;
        axios.get(apiUrl).then((resp) => {
            setUser(resp.data);
        });
    }, []);

    return(
        <div className="userParams">
            <h2>Пользователь:</h2>
            <p>Имя: {user.name}</p>
            <p>Имя пользователя: {user.username}</p>
            <h4>Контактные данные:</h4>
            <p>Телефон: {user.phone}</p>
            <p>Email: {user.email}</p>
            <p><Link to='/users'>Вернуться к списку</Link></p>
        </div>
    ) 
}

export default User