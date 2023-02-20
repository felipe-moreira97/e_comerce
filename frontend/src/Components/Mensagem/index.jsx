import { useNavigate } from "react-router-dom"
import Button from "../Button"
import * as S from './style'

function Mensagem({ mensagem, isOpened, setIsOpened }) {
    const navigate = useNavigate()
    const display = isOpened
    return (
        <S.Mensagem display={display} onClick={e => setIsOpened(false)}>
            <div>
                <h2>{mensagem}</h2>
                <Button text={'Voltar ao início'} handleClick={e => navigate('/')} />
                <Button text='❌' handleClick={e => setIsOpened(false)} link />
            </div>
        </S.Mensagem>
    )
}
export default Mensagem
