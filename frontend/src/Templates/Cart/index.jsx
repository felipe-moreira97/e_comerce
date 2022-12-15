import './style.css'
import Button from "../../Components/Button"
import Nav from "../../Components/Nav"
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect, useState } from 'react'
import globalContext from '../../Context/globalContext/globalContext'
import { removeToCart } from '../../Context/globalContext/actions'
function Cart() {
    const navigate = useNavigate()
    const {state,dispatch} = useContext(globalContext)
    const [products,setProducts] = useState([])
    const createOrder = async () => {
        const body = {
            id_client:1,
            products
        }
        const b = JSON.stringify(body)
        const headers = {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "*",
                "mode":"no-cors"
        }
        const request = new Request('http://localhost:3001/orders',{method:'POST',body:b,headers})    
        const resp = await fetch(request)
        const json = await resp.json()
        console.log(json)
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
                    quantity:prod.quantity
                }
            })
            setProducts(products)
        }
        fetchData()
    },[state])
    return (
        <>
            <Nav />
            {!!products[0] ? <div className="cart">
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
                            <>{acc}<tr className="details" key={prod.id_product} >
                                <td className="img" style={{backgroundImage:'url(https://picsum.photos/160)'}} /> {/* to fix the img */}
                                <td>{prod.name}</td>
                                <td>{`quant.: ${prod.quantity}`}</td>
                                <td>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format((prod.price))}</td>
                                <td><Button text={'Remover'} handleClick={e => removeToCart(dispatch,prod.id_product)} /></td>
                                </tr></>
                        ),<></>)}
                    </tbody>
                </table>
                <div className='details'>
                    <p>sub total: <span>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(products.reduce((acc,prod) => acc + (prod.price * prod.quantity),0))}</span></p>
                    <p>frete: <span>R$ 0,00</span></p>
                    <h4>total: <span>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format(products.reduce((acc,prod) => acc + (prod.price *prod.quantity),0))}</span></h4>
                </div>
                <Button text={'Finalizar pedido'} handleClick={e => createOrder()}/>
                <Button text={'Continuar comprando'} handleClick={e => navigate('/')} classType='secondary' />
            </div> : 
            <div className='cart'>
                <h3>Não há pedidos no carrinho</h3>
                <Button text={'Continuar comprando'} handleClick={e => navigate('/')} />
                </div>}
        </>
    )
}
export default Cart