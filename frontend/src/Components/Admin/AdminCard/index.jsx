import { useNavigate } from 'react-router-dom'
import * as S from './style'
import  { formatNumToCurrency } from '../../../utils'

export default function AdminCard({ product }) {
    const navigate = useNavigate()
    const handleClick = id => {
        navigate(`/admin/product/${id}`)
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
