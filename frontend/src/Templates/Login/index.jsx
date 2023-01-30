import { useState } from "react"
import Button from "../../Components/Button"
import { login, setToken } from "../../utils"
import  { useNavigate } from "react-router-dom"

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const fetchData = async () => {
            const resp = await login(email,password)
            const json = await resp.json()
            if (json.token) {
                setToken(json.token)
                navigate('/')
            }
        }
        fetchData()
    }
    const handleReset = e => {
        setEmail('')
        setPassword('')
    }
    return (
        <div className="login">
            <form >
                <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)}/>
                <Button text='Entrar' handleClick={e => handleSubmit(e)} />
                <Button text='Redefinir' handleClick={e => handleReset(e)} />
            </form>
        </div>
    )
}
export default Login