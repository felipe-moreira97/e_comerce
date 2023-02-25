import * as S from './style'
import Button from "../../Components/Button"
import Nav from '../../Components/Nav'
import { useEffect, useState, useContext } from "react"
import { useNavigate, useParams } from "react-router-dom"
import globalContext from '../../Context/globalContext/globalContext'
import { addToCart } from '../../Context/globalContext/actions'
import { formatNumToCurrency } from '../../utils'
import { theme } from '../../styles/theme'
import Footer from '../../Components/Footer'

function Product() {
    const [product, setProduct] = useState(null)
    const [quantity, setQuantity] = useState(1)
    const { id } = useParams()
    const navigate = useNavigate()
    const { dispatch } = useContext(globalContext)

    const buy = () => {
        if (product.quantity) {
            addToCart(dispatch, product.id_product, quantity)
            navigate('/cart')
        }
    }
    const addCart = () => {
        if (product.quantity) {
            addToCart(dispatch, product.id_product, quantity)
            navigate('/')
        }
    }
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('http://localhost:3001/products/' + id)
            const json = await resp.json()
            setProduct(json[0])
        }
        fetchData()
    }, [id])
    return (
        <>
            <Nav />
            {product && <S.Product>
                <div>
                    <img src={`http://localhost:3001/${product.imagePath ? product.imagePath : theme.defaultImage}`} alt='' />
                    <h4>Descrição do produto:</h4>
                    <p>{product.description}</p>
                </div>
                <div>
                    <h2>{product.name}</h2>
                    <h3>{formatNumToCurrency(product.price)}</h3>
                    <input type="number" name="quantity" id="quantity" onChange={e => setQuantity(parseFloat(e.target.value))} value={quantity} />
                    <Button text={'Comprar'} handleClick={e => buy()} disable={!product.quantity} />
                    <Button text={'Adicionar ao carrinho'} handleClick={e => addCart()} secondary disable={!product.quantity} />
                    {/* <Button text={'editar'} handleClick={e => navigate(`/createProduct/${product.id_product}`)} secondary red/> */}
                </div>
            </S.Product>}
            <Footer />
        </>
    )
}
export default Product
