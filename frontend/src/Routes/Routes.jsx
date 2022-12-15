import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from '../Templates/Cart'
import NewProduct from '../Templates/NewProduct'
import Home from '../Templates/Home'
import Product from '../Templates/Product'

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<Product />} path='/product/:id' />
                <Route element={<Cart />} path='/cart' />
                <Route element={<NewProduct />} path='/createProduct' />
                <Route element={<NewProduct />} path='/createProduct/:id' />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas