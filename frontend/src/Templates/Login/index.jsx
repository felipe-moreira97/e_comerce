import { useState } from "react"
import Button from "../../Components/Button"
import Mensagem from "../../Components/Mensagem"
import { login, setToken } from "../../utils"
import  { useNavigate } from "react-router-dom"
import * as S from './style'

function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [msg,setMsg] = useState('mensagem vazia')
    const [isOpened,setIsOpened] = useState(false)
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
            if (resp.status === 401) {
                setMsg(json.mensagem)
                setIsOpened(true)
            }
        }
        fetchData()
    }
    return (
        <>
            <Mensagem mensagem={msg} isOpened={isOpened} setIsOpened={setIsOpened}/>
            <S.Login>
                <form >
                    <h2>Login</h2>
                    <div className="email">
                        <label htmlFor="email">Digite seu e-mail</label>
                        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="exemplo@email.com" />
                    </div>
                    <div className="password">
                        <label htmlFor="password">Digite sua senha</label>
                        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Ex. $3nh4F0rt&" />
                    </div>
                    <Button text='Entrar' handleClick={e => handleSubmit(e)} />
                    <div>
                        <Button text='Cadastar' handleClick={e => navigate('/signin')} link small color='#000' />
                        <Button text='Esqueceu sua senha?' handleClick={e => navigate('/')} link small color='#000' />
                    </div>
                </form>
            </S.Login>

        </>
    )
}
export default Login
