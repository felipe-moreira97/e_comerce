import { useState } from "react"
import Button from "../Button"
import { createCategory } from '../../utils'
import * as S from './style'
function Modal({ isOpened, setIsOpened }) {
    const [category, setCategory] = useState('')
    const display = isOpened

    const handleCreateCategory = async () => {
        const resp = await createCategory(category)
        console.log(resp)
        setCategory('')
        setIsOpened(false)
    }
    return (
        <S.Modal display={display} >
            <Button text='X' handleClick={e => setIsOpened(false)} small secondary red />
            <input type="text" name="category" value={category} onChange={e => setCategory(e.target.value)} />
            <Button text='add' handleClick={e => handleCreateCategory()} small />
        </S.Modal>
    )
}
export default Modal
