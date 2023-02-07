import { useState } from "react"
import Button from "../Button"
import { createCategory } from '../../utils'
import "./style.css"

function Modal({isOpened,setIsOpened}) {
    const [category,setCategory] = useState('')
    const display = isOpened ? "block" : "none"

    const handleCreateCategory = async () => {
        const resp = await createCategory(category)
        console.log(resp)
        setCategory('')
        setIsOpened(false)
    }
    return (
        <div className="new-category-modal" style={{display:display}} >
            <Button text='X' handleClick={e => setIsOpened(false)} classType='sm secondary red' />
            <input type="text" name="category" value={category} onChange={ e => setCategory(e.target.value)}/>
            <Button text='add' handleClick={e => handleCreateCategory()} classType='sm' />
        </div>
    )
}
export default Modal
