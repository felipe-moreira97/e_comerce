import { useContext } from 'react'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { setHomeUrl } from '../../../Context/globalContext/actions'
import globalContext from '../../../Context/globalContext/globalContext'
import Button from '../../Button'
import AdminHamburgerMenu from '../AdminHanburgerMenu'
import AdminCategoriesTooltip from '../AdminCategoriesTooltip'
import * as S from './style'

export default function AdminNav() {
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
        navigate('/admin')
    }
    return (
        <S.Nav>
            <div>
                <Button text='🏠' handleClick={e => handleClick('http://localhost:3001/products')} link />
                <AdminCategoriesTooltip categories={categories} />
            </div>
            <AdminHamburgerMenu />
        </S.Nav>
    )
}
