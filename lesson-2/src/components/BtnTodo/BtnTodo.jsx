import './BtnTodo.css'

export const BtnTodo = (props) =>{
    return(
        <div className='btnTodo'>
            <button onClick={props.onClick}>Add post</button>
        </div>
    )
}