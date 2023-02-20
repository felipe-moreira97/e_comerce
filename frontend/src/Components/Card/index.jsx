import { useNavigate } from 'react-router-dom'
import * as S from './style'

function Card({ product }) {
    const navigate = useNavigate()
    const handleClick = id => {
        navigate(`/product/${id}`)
    }
    return (
        <S.card onClick={e => handleClick(product.id_product)} image={product.imagePath} >
            <div />
            <h3>{product.name}</h3>
            <span />
            <p>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(product.price)}</p>
        </S.card>
    )
}
export default Card
