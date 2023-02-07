import { useContext, useEffect,useState } from "react"
import Nav from "../../Components/Nav"
import Card from "../../Components/Card"
import './style.css'
import globalContext from "../../Context/globalContext/globalContext"

function Home() {
    const context = useContext(globalContext)
    const {homeUrl} = context.state
    const [products,setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(homeUrl)
            const json = await resp.json()
            setProducts(json)
        }
        fetchData()
    },[homeUrl])
    return (
        <>
            <Nav />
            <div className="container">
            {products.length === 0 ?
            'Não há nenhum produto disponível':
            products.reduce((acc,product) => <>{acc}<Card product={product} /></>,<></>)}
            </div>
        </>

    )
}
export default Home
