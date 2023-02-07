import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Button from "../../Components/Button"
import Mensagem from "../../Components/Mensagem"
import Nav from "../../Components/Nav"
import NewCategoryModal from '../../Components/NewCategoryModal'

import { createOrUpdateProduct , deleteProduct } from "../../utils"

export default function CreateProduct() {
    const image = useRef(null)
    const form = useRef(null)
    const navigate = useNavigate()
    const { id } = useParams()

    const [categories,setCategories] = useState([])
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [quantity,setQuantity] = useState(0)
    const [id_category,setId_category] = useState(0)
    const [description,setDescription] = useState('')
    const [msg,setMsg] = useState('mensagem vazia')
    const [isOpened,setIsOpened] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        const data = await createOrUpdateProduct(form.current,id)
        data && navigate('/')
    }

    const handleDelete = async e => {
        const resp = await deleteProduct(id)
        const json = await resp.json()
        if( resp.status === 201) {
            setMsg(json.mensagem)
            setIsOpened(true)
        }
    }

    const openInput = e => {
        e.preventDefault()
        image.current.click()
    }

    useEffect(() => {
        const fetchProduct = async () => {
            const resp = await fetch('http://localhost:3001/products/' + id)
            const [ product ] = await resp.json()
            setName(product.name)
            setPrice(product.price)
            setQuantity(product.quantity)
            setId_category(product.id_category)
            setDescription(product.description)
        }
        const fetchData = async () => {
            const resp = await fetch('http://localhost:3001/category')
            const json = await resp.json()
            setCategories(json)
        }
        fetchData()
        id && fetchProduct()
    },[id])

    return (
        <>
            <Nav />
            <Mensagem mensagem={msg} isOpened={isOpened} setIsOpened={setIsOpened}/>
            <form ref={form} onSubmit={e => handleSubmit(e)} >
                <div className="nameImput">
                    <label htmlFor="name">nome do produto</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} maxLength={255} />
                </div>
                <div className="priceImput">
                    <label htmlFor="price">preço do produto</label>
                    <input type="number" name="price" min={0.01} step={0.01} value={price} onChange={e => setPrice(e.target.value)} maxLength={6}/>
                </div>
                <div className="quantityImput">
                    <label htmlFor="quantity">quantidade do produto</label>
                    <input type="number" name="quantity" min={0} value={quantity} onChange={e => setQuantity(e.target.value)} step={1} max={100_000} />
                </div>
                <div className="categoryImput">
                    <label htmlFor="category">categoria do produto</label>
                    <select name="id_category" value={id_category} onChange={e => setId_category(e.target.value)} >
                        {categories.reduce((acc,cur) => (
                            <>{acc}<option value={cur.id_category}>{cur.category}</option></>
                        ),<></>)}
                    </select>
                    <NewCategoryModal />
                </div>
                <div className="imageImput">
                    <input type="file" name="image" style={{display:'none'}} accept='image/*' ref={image}/>
                    <Button  text={image.current?.files[0] ? 'foto carregada' : 'Enviar foto'} handleClick={e => openInput(e)} />
                </div>
                <div className="descriptionInput">
                    <label htmlFor="description">descrição do produto</label>
                    <textarea name="description"  cols="30" rows="10" value={description} onChange={e=> setDescription(e.target.value)}></textarea>
                </div>
                <input type="submit" value="Cadastrar" />
                {id && <input type="button" value="Apagar produto" onClick={e => handleDelete(e)} />}
            </form>
        </>
    )
}
