import { useEffect,useState } from "react"
import AdminNav from "../AdminNav"
import AdminTableOrders from "./AdminTableOrders"
import { request } from "../../../utils"

export default function AdminOrders() {
    const [orders,setOrders] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const resp = await request('http://localhost:3001/orders')
            const json =  await resp.json()
            const orderedList = json.sort((a,b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
            setOrders(orderedList)
        }
        fetchData()
    },[])

    return (
        <>
            <AdminNav />
            <AdminTableOrders orders={orders} setOrders={setOrders} />
        </>
    )
}

