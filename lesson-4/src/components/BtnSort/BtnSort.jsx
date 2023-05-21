import './BtnSort.css'

function BtnSort(props) {


    return (
        <button className='sort' onClick={props.onClick}>{props.value}</button>
    )
}

export default BtnSort