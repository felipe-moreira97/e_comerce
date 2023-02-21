import Button from "../Button";
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export default function HamburgerMenu() {
    const navigate = useNavigate()
    return (
        <S.Span link>🍔
            <div>
                <Button text='Cart' handleClick={e => navigate('/cart')} />
                <Button text='LogIn' handleClick={e => navigate('/login')} />
                <Button text='SignIn' handleClick={e => navigate('/signin')} />
                <Button text='Meus pedidos' handleClick={e => navigate('/orders')} />
            </div>
        </S.Span>
   )
}
