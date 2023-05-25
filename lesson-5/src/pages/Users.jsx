import axios from "axios";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Users = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const apiUrl = "https://jsonplaceholder.typicode.com/users";
        axios.get(apiUrl).then((resp) => {
            setUsers(resp.data);
        });
    }, []);

    return(
        <div className="usersList">
            <h3>Пользователи</h3>
            <ul>
                 {users.map((user) => {
                    return (
                        <li key={user.id}>
                            <Link key={user.id} to={`/user/${user.id}`}>
                                {user.id}. {user.name}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    )
}

export default Users