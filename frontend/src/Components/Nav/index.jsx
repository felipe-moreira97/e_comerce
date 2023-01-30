import { useContext } from 'react'
import { useEffect,useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setHomeUrl } from '../../Context/globalContext/actions'
import globalContext from '../../Context/globalContext/globalContext'
import Button from '../Button'
import './style.css'

function Nav() {
    const [categories,setCategories] = useState([])
    const context = useContext(globalContext)
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchData = async () => {
        const resp = await fetch('http://localhost:3001/category')
        const data = await resp.json()
        setCategories(data)
        }
        fetchData()
    },[])
    const handleClick = url => {
        setHomeUrl(context.dispatch,url)
        navigate('/')
    }
    return (
        <nav className='nav'>
            <Button text='Início' handleClick={e => handleClick('http://localhost:3001/products')} />
            {categories.reduce((acc,obj) => (
                <>{acc}
                <Button text={obj.category}
                    handleClick={e => handleClick(`http://localhost:3001/category/${obj.id_category}`)} />
                </>
            ),<></>)}
            <Button text='Carrinho' handleClick={e => navigate('/cart')} />
            <Button text='LogIn' handleClick={e => navigate('/login')} />
            <Button text='SignIn' handleClick={e => navigate('/signin')} />
            <Button text='Meus pedidos' handleClick={e => navigate('/orders')} />
        </nav>
    )
}
export default Nav
