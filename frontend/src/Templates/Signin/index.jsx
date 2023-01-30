import { useState } from "react"
import Button from "../../Components/Button"
import { signin } from "../../utils"
import  { useNavigate } from "react-router-dom"

function Signin() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const fetchData = async () => {
            const resp = await signin(name,email,password)
            const json = await resp.json()
            if (resp.status === 201) {
                alert(json.mensagem)
                navigate('/login')
            }
        }
        fetchData()
    }
    const handleReset = e => {
        setName('')
        setEmail('')
        setPassword('')
    }
    return (
        <div className="login">
            <form >
                <input type="name" name="name" id="name" value={name} onChange={e => setName(e.target.value)} />
                <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <Button text='Entrar' handleClick={e => handleSubmit(e)} />
                <Button text='Redefinir' handleClick={e => handleReset(e)} />
            </form>
        </div>
    )
}
export default Signin