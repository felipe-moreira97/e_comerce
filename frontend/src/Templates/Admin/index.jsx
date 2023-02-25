import { useContext, useEffect, useState } from "react"
import AdminNav from "../../Components/Admin/AdminNav"
import AdminCard from "../../Components/Admin/AdminCard"
import * as S from './style'
import globalContext from "../../Context/globalContext/globalContext"
import Footer from "../../Components/Footer"

export default function Admin() {
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
            <AdminNav />
            <S.Admin>
                {products.length === 0 ?
                    <S.Span>Não há nenhum produto disponível</S.Span> :
                    products.reduce((acc, product) => <>{acc}<AdminCard product={product} /></>, <></>)}
            </S.Admin>
            <Footer />
        </>
    )
}
