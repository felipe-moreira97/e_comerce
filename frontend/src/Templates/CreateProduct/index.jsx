import { useEffect, useRef, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"

import Button from "../../Components/Button"
import Mensagem from "../../Components/Mensagem"
import AdminNav from "../../Components/Admin/AdminNav"
import * as S from './style'

import { createOrUpdateProduct, deleteProduct } from "../../utils"
import Footer from "../../Components/Footer"

export default function CreateProduct() {
    const image = useRef(null)
    const form = useRef(null)
    const navigate = useNavigate()
    const { id } = useParams()

    const [categories, setCategories] = useState([])
    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)
    const [id_category, setId_category] = useState(0)
    const [description, setDescription] = useState('')
    const [msg, setMsg] = useState('mensagem vazia')
    const [isOpened, setIsOpened] = useState(false)

    const handleSubmit = async e => {
        e.preventDefault()
        const resp = await createOrUpdateProduct(form.current, id)
        const json = await resp.json()
        if (resp.status === 201) {
            navigate('/admin')
        } else {
            setIsOpened(true)
            setMsg(json.mensagem)
        }

    }

    const handleDelete = async e => {
        const resp = await deleteProduct(id)
        const json = await resp.json()
        if (resp.status === 201) {
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
            const [product] = await resp.json()
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
    }, [id])

    return (
        <>
            <AdminNav />
            <Mensagem mensagem={msg} isOpened={isOpened} setIsOpened={setIsOpened} />
            <S.CreateProduct ref={form} onSubmit={e => handleSubmit(e)} >
                <h2>{id ? 'Editar Produto' : 'Cadastrar novo produto'}</h2>
                <div>
                    <label htmlFor="name">nome do produto</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} maxLength={255} />
                </div>
                <div>
                    <label htmlFor="price">preço do produto</label>
                    <input type="number" name="price" min={0.01} step={0.01} value={price} onChange={e => setPrice(e.target.value)} maxLength={6} />
                </div>
                <div>
                    <label htmlFor="quantity">quantidade do produto</label>
                    <input type="number" name="quantity" min={0} value={quantity} onChange={e => setQuantity(e.target.value)} step={1} max={100_000} />
                </div>
                <div>
                    <label htmlFor="category">categoria do produto</label>
                    <select name="id_category" value={id_category} onChange={e => setId_category(e.target.value)} >
                        {categories.reduce((acc, cur) => (
                            <>{acc}<option value={cur.id_category}>{cur.category}</option></>
                        ), <></>)}
                    </select>
                </div>
                {/* <NewCategoryModal /> */}
                <input type="file" name="image" style={{ display: 'none' }} accept='image/*' ref={image} />
                <Button text={image.current?.files[0] ? 'foto carregada' : 'Enviar foto'} handleClick={e => openInput(e)} />
                <div>
                    <label htmlFor="description">descrição do produto</label>
                    <textarea name="description" cols="30" rows="10" value={description} onChange={e => setDescription(e.target.value)}></textarea>
                </div>
                <Button text='Cadastrar' handleClick={e => console.log('what')} ><input type='submit' /></Button>
                {id && <Button text="Apagar produto" handleClick={e => handleDelete(e)} red />}
            </S.CreateProduct>
            <Footer />
        </>
    )
}
