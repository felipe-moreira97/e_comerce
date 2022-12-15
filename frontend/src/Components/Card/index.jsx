import { useNavigate } from 'react-router-dom'
import './style.css'

function Card({product}) {
    const navigate = useNavigate()
    const handleClick = id => {
        navigate(`/product/${id}`)
    }
    return (
        <div className="card" onClick={e => handleClick(product.id_product)}>
            <div style={{backgroundImage:'url(https://picsum.photos/160)'}}/>
            <h3>{product.name}</h3>
            <span/>
            <p>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(product.price)}</p>
        </div>
    )
}
export default Card