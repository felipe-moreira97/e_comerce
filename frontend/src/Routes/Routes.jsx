import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Cart from '../Templates/Cart'
import Home from '../Templates/Home'
import Product from '../Templates/Product'
import Login from '../Templates/Login'
import Signin from '../Templates/Signin'
import Orders from '../Templates/Orders'
import CreateProduct from '../Templates/CreateProduct'

function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Home />} path='/' exact />
                <Route element={<Product />} path='/product/:id' />
                <Route element={<Cart />} path='/cart' />
                <Route element={<Login />} path='/login' />
                <Route element={<Signin />} path='/signin' />
                <Route element={<Orders />} path='/orders' />
                <Route element={<CreateProduct />} path='/createProduct' />
                <Route element={<CreateProduct />} path='/createProduct/:id' />
            </Routes>
        </BrowserRouter>
    )
}
export default Rotas
