import * as S from './style'
import ProductsModal from "../ProductsModal";


export default function TableOrders({orders,setOrders}) {
    // const handleSetOrderStatus = async (id_order,status) => {
    //     const resp = await setOrderStatus(id_order,status)
    //     const json = await resp.json()
    //     const orderedList = json.sort((a,b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
    //     setOrders(orderedList)
    // }

    // const handleDeleteOrder = async id_order => {
    //     const resp = await deleteOrder(id_order)
    //     const json = await resp.json()
    //     const orderedList = json.sort((a,b) => Date.parse(a.timestamp) - Date.parse(b.timestamp))
    //     setOrders(orderedList)
    // }
    return (
        <S.TableOrders>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>status</th>
                        <th>hora do pedido</th>
                        <th>cliente</th>
                        <th>produtos</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.reduce((acc,order) => (
                        <>{acc}<tr key={order.id_order}><td>{order.id_order}</td><td
                        >{order.status}</td><td
                        >{new Date(order.timestamp).toLocaleString()}</td><td
                        >{order.client}</td><td
                        ><ProductsModal products={order.products}/></td></tr></>
                    ),<></>)}
                </tbody>
            </table>
        </S.TableOrders>
    )
}
