import { useState } from "react"
import Button from "../../Components/Button"
import { signin } from "../../utils"
import  { useNavigate } from "react-router-dom"
import Mensagem from "../../Components/Mensagem"
import * as S from '../Login/style'

function Signin() {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [msg,setMsg] = useState('mensagem vazia')
    const [isOpened,setIsOpened] = useState(false)
    const navigate = useNavigate()

    const handleSubmit = e => {
        e.preventDefault()
        const fetchData = async () => {
            const resp = await signin(name,email,password)
            const json = await resp.json()
            if (resp.status === 201) {
                setMsg(json.mensagem)
                setIsOpened(true)
                navigate('/login')
            } else if (resp.status === 401) {
                setMsg(json.mensagem)
                setIsOpened(true)
            }
        }
        fetchData()
    }

    return (
        <>
            <Mensagem mensagem={msg} isOpened={isOpened} setIsOpened={setIsOpened}/>
            <S.Login >
                <form >
                    <h2>Cadastrar</h2>
                    <div>
                        <label htmlFor="name">Digite seu nome</label>
                        <input type="text" name="name" id="name" value={name} onChange={e => setName(e.target.value)} placeholder="João da silva" />
                    </div>
                    <div>
                        <label htmlFor="email">Digite seu e-mail</label>
                        <input type="email" name="email" id="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="exemplo@email.com" />
                    </div>
                    <div>
                        <label htmlFor="password">Digite sua senha</label>
                        <input type="password" name="password" id="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Ex. $3nh4F0rt&" />
                    </div>
                    <Button text='Cadastrar' handleClick={e => handleSubmit(e)} />
                </form>
            </S.Login>
        </>
    )
}
export default Signin
