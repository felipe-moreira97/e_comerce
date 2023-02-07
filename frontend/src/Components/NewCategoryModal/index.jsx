import { useState } from "react"
import Button from "../Button"
import Modal from './Modal'


function NewCategoryModal() {
    const [isOpened,setIsOpened] = useState(false)
    return (
        <div className="container-new-category-modal">
            <Button text='Nova categoria' handleClick={e => {setIsOpened(true)
                e.preventDefault()
            }} secondary small/>
            <Modal isOpened={isOpened} setIsOpened={setIsOpened} />
        </div>
    )
}
export default NewCategoryModal
