import { useContext, useEffect, useState } from "react"
import Nav from "../../Components/Nav"
import Card from "../../Components/Card"
import * as S from './style'
import globalContext from "../../Context/globalContext/globalContext"
import Footer from "../../Components/Footer"

function Home() {
    const context = useContext(globalContext)
    const { homeUrl } = context.state
    const [products, setProducts] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const resp = await fetch(homeUrl)
            const json = await resp.json()
            setProducts(json)
        }
        fetchData()
    }, [homeUrl])
    return (
        <>
            <Nav />
            <S.Home>
                {products.length === 0 ?
                    <S.Span>Não há nenhum produto disponível</S.Span> :
                    products.reduce((acc, product) => <>{acc}<Card product={product} /></>, <></>)}
            </S.Home>
            <Footer />
        </>
    )
}
export default Home
