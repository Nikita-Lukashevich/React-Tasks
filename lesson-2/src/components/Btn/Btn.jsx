import './Btn.css'

export const Btn = (props) => {

    return (
        <div className='btn'>
            <button onClick={props.onClick}>Clean</button>
        </div>
    )
}