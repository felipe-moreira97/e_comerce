import { useNavigate } from "react-router-dom"
import Button from "../Button"
import "./style.css"

function Mensagem({mensagem, isOpened,setIsOpened}) {
    const navigate = useNavigate()
    const display = isOpened ? "block" : "none"
    return (
        <div className="mensagem" style={{display:display}}>
            <div className="container">
                <h2>{mensagem}</h2>
                <Button text={'Voltar ao início'} handleClick={e => navigate('/')} /> 
                <Button text={'fazer Login'} handleClick={e => navigate('/login')} />
                <Button text='fecha' handleClick={e => setIsOpened(false)} />
            </div>
        </div>
    )
}
export default Mensagem