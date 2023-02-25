import { useEffect, useState } from "react"
import Footer from "../../Components/Footer"
import Nav from "../../Components/Nav"
import TableOrders from "../../Components/TableOrders"
import { request } from "../../utils"
function Orders() {
    const [orders, setOrders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const resp = await request('http://localhost:3001/orders')
            const json = await resp.json()
            const orderedList = json.sort((a, b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
            setOrders(orderedList)
        }
        fetchData()
    }, [])

    return (
        <>
            <Nav />
            <TableOrders orders={orders} setOrders={setOrders} />
            <Footer />
        </>
    )
}
export default Orders
