import { Link } from "react-router-dom"

const NotFound = () =>{
    return(
        <div className="error">
            <p>Ошибка 404!</p>
            <p><Link to='/'>Вернуться на главнау страницу</Link></p>
        </div>
    )
}

export default NotFound