import './style.css'

function Button({text,classType,handleClick}) {
    return (
        <button 
            type='button' 
            className={`btn ${classType ? classType : ''}`}
            onClick={e => handleClick(e)} >
            {text}
        </button>
    )
}
export default Button