import { useState } from "react"
import Button from "../Button"
import Modal from "./Modal"


function ProductsModal({products}) {
    const [isOpened,setIsOpened] = useState(false)
    return (
        <div>
            <Button text='Ver produtos' handleClick={e => setIsOpened(true)} />
            <Modal isOpened={isOpened} setIsOpened={setIsOpened} products={products} />
        </div>
    )
}
export default ProductsModal