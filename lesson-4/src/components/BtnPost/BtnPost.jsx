import './BtnPost.css'

export const BtnPost = (props) =>{
    return(
        <div className='btn'>
            <button onClick={props.onClick}>Post user</button>
        </div>
    )
}