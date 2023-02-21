import { useNavigate } from 'react-router-dom'
import * as S from './style'
import  { formatNumToCurrency } from '../../utils'

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
            <p>{formatNumToCurrency(product.price)}</p>
        </S.card>
    )
}
export default Card
