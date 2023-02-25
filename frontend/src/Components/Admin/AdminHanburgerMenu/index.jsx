import Button from "../../Button";
import * as S from './style'
import { useNavigate } from 'react-router-dom'

export default function AdminHamburgerMenu() {
    const navigate = useNavigate()
    return (
        <S.Span link>🍔
            <div>
                <Button text='Gerenciar admins' handleClick={e => navigate('/admin/manager')} />
                <Button text='Gerenciar clientes' handleClick={e => navigate('/admin/client')} />
                <Button text='Cadastrar Produto' handleClick={e => navigate('/admin/product')} />
                <Button text='Pedidos' handleClick={e => navigate('/admin/orders')} />
            </div>
        </S.Span>
    )
}
