import { useState } from "react"
import Button from "../Button"
import Modal from './Modal'
import * as S from "./style"

function NewCategoryModal() {
    const [isOpened, setIsOpened] = useState(false)
    return (
        <S.NewCategoryModal className="container-new-category-modal">
            <Button text='Nova categoria' handleClick={e => {
                setIsOpened(true)
                e.preventDefault()
            }} secondary small />
            <Modal isOpened={isOpened} setIsOpened={setIsOpened} />
        </S.NewCategoryModal>
    )
}
export default NewCategoryModal
