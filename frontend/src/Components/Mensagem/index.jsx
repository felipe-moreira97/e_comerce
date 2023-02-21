import Button from "../Button"
import * as S from './style'

function Mensagem({ mensagem, isOpened, setIsOpened }) {
    const display = isOpened
    return (
        <S.Mensagem display={display} onClick={e => setIsOpened(false)}>
            <div>
                <Button text='❌' handleClick={e => setIsOpened(false)} link />
                <h2>{mensagem}</h2>
            </div>
        </S.Mensagem>
    )
}
export default Mensagem
