import { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Button from '../../Components/Button'
import './style.css'
function NewProduct() {
    const navigate = useNavigate()
    const params = useParams()
    const [categories,setCategories] = useState([])
    const [name,setName] = useState('')
    const [price,setPrice] = useState(0)
    const [description,setDescription] = useState('')
    const [quantity,setQuantity] = useState(0)
    const [category,setCategory] = useState('')
    useEffect(()=>{
        const fetchProduct = async () => {
            const resp = await fetch(`http://localhost:3001/products/${params.id}`)
            const json = await resp.json()
            setName(json[0].name)
            setPrice(json[0].price)
            setDescription(json[0].description)
            setQuantity(json[0].quantity)
            setCategory(json[0].id_category)
        }
        const fetchData = async () => {
            const resp = await fetch('http://localhost:3001/category')
            const json = await resp.json()
            setCategories(json)
        }
        fetchData()
        params.id && fetchProduct()
    },[params])

    const handleSubmit = e => {
        e.preventDefault()
        const fetchProduct = async () => {
            const body = {
                name:name,
                price:price,
                description:description,
                quantity:quantity,
                id_category:parseFloat(category),
                image:'uma_imagem.jpg'
            }
            const headers = {
                "Content-type": "application/json; charset=UTF-8",
                "Accept": "*",
                "mode":"no-cors"
            }
            const b = JSON.stringify(body)
            const url = params.id ?  `http://localhost:3001/products/${params.id}` : 'http://localhost:3001/products'
            const request = new Request (url,{
                method: params.id ? 'PATCH' : 'POST',
                body:b,
                headers
            })
            const resp = await fetch(request)
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
            <select name="category" id="category" value={category} onChange={e => setCategory(e.target.value)}>
                {categories.reduce((acc,cur) => (
                    <>{acc}<option value={cur.id_category} >{cur.category}</option></>
                ),<></>)}
            </select>
            <Button handleClick={e => handleSubmit(e)} text={params.id ? "Alterar" : "Cadastrar"} />
            <Button handleClick={e => handleReset(e)} text="Redefinir" classType='secondary' />
            {params.id && <Button text='Excluir Produto' handleClick={e => deleteProduct()} classType='red secondary' />}
        </form>
    )
} 
export default NewProduct