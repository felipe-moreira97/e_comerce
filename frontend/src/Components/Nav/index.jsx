import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setHomeUrl } from '../../Context/globalContext/actions'
import globalContext from '../../Context/globalContext/globalContext'
import Button from '../Button'
import HamburgerMenu from '../HamburgerMenu'
import CategoriesTooltip from '../CategoriesTooltip'
import * as S from './style'

function Nav() {
    const [categories, setCategories] = useState([])
    const context = useContext(globalContext)
    const navigate = useNavigate()
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch('http://localhost:3001/category')
            const data = await resp.json()
            setCategories(data)
        }
        fetchData()
    }, [])
    const handleClick = url => {
        setHomeUrl(context.dispatch, url)
        navigate('/')
    }
    return (
        <S.Nav>
            <div>
                <Button text='🏠' handleClick={e => handleClick('http://localhost:3001/products')} link />
                <CategoriesTooltip categories={categories} />
            </div>
            <HamburgerMenu />
        </S.Nav>
    )
}
export default Nav
