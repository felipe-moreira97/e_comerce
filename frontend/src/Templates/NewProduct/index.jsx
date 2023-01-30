import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../Components/Button'
import { createOrUpdateProduct } from '../../utils'
import './style.css'
function NewProduct() {
    const navigate = useNavigate()
    const params = useParams()
    const [categories,setCategories] = useState([])
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState('')
    const [quantity,setQuantity] = useState(0)
    const [id_category,setCategory] = useState('')
    const [empty,setEmpty] = useState(true)
    useEffect(()=>{
        const fetchProduct = async () => {
            const resp = await fetch(`http://localhost:3001/products/${params.id}`)
            const json = await resp.json()
            if (json.length > 0) {
                setName(json[0].name)
                setPrice(json[0].price)
                setDescription(json[0].description)
                setQuantity(json[0].quantity)
                setCategory(json[0].id_category)
                setEmpty(false)
            } else {
                setEmpty(true)
            }
        }
        const fetchCategories = async () => {
            const resp = await fetch('http://localhost:3001/category')
            const json = await resp.json()
            setCategories(json)
        }
        fetchCategories()
        params.id ? fetchProduct() : setEmpty(false)
    },[params])

    const handleSubmit = e => {
        e.preventDefault()
        const fetchProduct = async () => {
            const body = {
                name,
                price,
                description,
                quantity,
                id_category,
                image:'uma_imagem.jpg'
            }
            const id = params.id
            const resp = await createOrUpdateProduct(body,id)
            resp.status === 201 ? navigate('/') : alert('erro no servidor')
        }
        fetchProduct()
    }

    const deleteProduct = async () => {
        const resp = await fetch(`http://localhost:3001/products/${params.id}`,{method:'DELETE'})
        resp.status === 201 ? navigate('/') : alert('erro no servidor')
    }
    const handleReset = e => {
        setName('')
            setPrice(0)
            setDescription('')
            setQuantity(0)
            setCategory('')
    }
     return (
        empty ? (<p>Produto não encontrado</p>) : (
        <form onSubmit={e => handleSubmit(e)} name='productForm' className='form'>
        <h3>Cadastrar novo produto</h3>
        <label htmlFor='name'>Nome do produto</label>
        <input type="text" name="name" maxLength={30} value={name} onChange={e => setName(e.target.value)}/>  
        <label htmlFor='number'>Preço do produto</label>          
        <input type="number" name="price" min={0} step={.01} maxLength={9} value={price} onChange={e => setPrice(e.target.value) }/>
        <label htmlFor='description'>Descrição do produto</label>
        <textarea type="text" name="description" maxLength={255} value={description} onChange={e => setDescription(e.target.value)} />
        <label htmlFor='quantity'>Quantidade do produto</label>
        <input type="number" name="quantity" step={1} min={0} value={quantity} onChange={e => setQuantity(e.target.value)} />
        <select name="category" id="category" value={id_category} onChange={e => setCategory(e.target.value)}>
        {categories.reduce((acc,cur) => (
            <>{acc}<option value={cur.id_category} >{cur.category}</option></>
            ),<></>)}
            </select>
            <Button handleClick={e => handleSubmit(e)} text={params.id ? "Alterar" : "Cadastrar"} />
            <Button handleClick={e => handleReset(e)} text="Redefinir" classType='secondary' />
            {params.id && <Button text='Excluir Produto' handleClick={e => deleteProduct()} classType='red secondary' />}
            </form>
        )
    )
} 
export default NewProduct