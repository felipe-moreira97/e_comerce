import * as S from './style'
import Button from "../../Components/Button"
import Nav from "../../Components/Nav"
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import globalContext from '../../Context/globalContext/globalContext'
import { removeToCart } from '../../Context/globalContext/actions'
import { createOrder,formatNumToCurrency } from '../../utils'
import Mensagem from '../../Components/Mensagem'
import { theme } from '../../styles/theme'

function Cart() {
    const navigate = useNavigate()
    const {state,dispatch} = useContext(globalContext)
    const [products,setProducts] = useState([])
    const [msg,setMsg] = useState('mensagem vazia')
    const [isOpened,setIsOpened] = useState(false)

    const handleCreateOrder = async () => {
        const resp = await createOrder(products)
        const json = await resp.json()
        if (resp.status === 401 || resp.status === 201) {
            setMsg(json.mensagem)
            setIsOpened(true)
        }
    }
        useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(`http://localhost:3001/products`)
            const json = await resp.json()
            const products = state.products.map(prod => {
                const data = json.find(p => p.id_product === prod.id_product)
                return {
                    id_product:prod.id_product,
                    name:data.name,
                    price:data.price,
                    quantity:prod.quantity,
                    imagePath:data.imagePath
                }
            })
            setProducts(products)
        }
        fetchData()
    },[state])
    return (
        <>
            <Mensagem mensagem={msg} isOpened={isOpened} setIsOpened={setIsOpened}/>
            <Nav />
            {!!products[0] ? <S.Cart>
                <h3>Detalhes do Pedido</h3>
                <table>
                    <thead>
                        <tr>
                            <th>Foto</th>
                            <th>Produto</th>
                            <th>Quantidade</th>
                            <th>Preço unitário</th>
                            <th>Ação</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.reduce((acc,prod) => (
                            <>{acc}<tr key={prod.id_product} ><img
                            src={`http://localhost:3001/${prod.imagePath}`} alt={`http://localhost:3001/${theme.defaultImage}`} /><td
                            >{prod.name}</td><td
                            >{`quant.: ${prod.quantity}`}</td><td
                            >{formatNumToCurrency((prod.price))}</td><td
                            ><Button text={'Remover'} handleClick={e => removeToCart(dispatch,prod.id_product)} /></td></tr></>
                        ),<></>)}
                    </tbody>
                </table>
                <div className='details'>
                    <p>sub total: <S.Span>{formatNumToCurrency(products.reduce((acc,prod) => acc + (prod.price * prod.quantity),0))}</S.Span></p>
                    <p>frete: <S.Span>R$ 0,00</S.Span></p>
                    <strong>total: <S.Span>{formatNumToCurrency(products.reduce((acc,prod) => acc + (prod.price * prod.quantity),0))}</S.Span></strong>
                </div>
                <Button text={'Finalizar pedido'} handleClick={e => handleCreateOrder()}/>
                <Button text={'Continuar comprando'} handleClick={e => navigate('/')} secondary />
            </S.Cart> :
            <S.Cart>
                <S.Span>Não há pedidos no carrinho</S.Span>
                <Button text={'Continuar comprando'} handleClick={e => navigate('/')} />
                </S.Cart>}
        </>
    )
}
export default Cart
