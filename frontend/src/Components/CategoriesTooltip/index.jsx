import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { setHomeUrl } from '../../Context/globalContext/actions'
import globalContext from '../../Context/globalContext/globalContext'
import Button from '../Button'
import * as S from './style'


export default function CategoriesTooltip({ categories }) {
    const context = useContext(globalContext)
    const navigate = useNavigate()
    const handleClick = url => {
        setHomeUrl(context.dispatch, url)
        navigate('/')
    }
    return (
        <S.Span>Categorias
            <div>
                {categories.reduce((acc, obj) => (
                    <>{acc}
                        <Button text={obj.category}
                            handleClick={e => handleClick(`http://localhost:3001/category/${obj.id_category}`)}
                            link />
                    </>
                ), <></>)}
            </div>
        </S.Span>
    )
}
