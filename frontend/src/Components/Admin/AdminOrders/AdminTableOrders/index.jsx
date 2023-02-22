import * as S from './style'
import ProductsModal from "../../../ProductsModal";
import Button from '../../../Button';
import { deleteOrder, setOrderStatus } from '../../../../utils';
import { useState } from 'react';
import Mensagem from '../../../Mensagem';

export default function AdminTableOrders({orders,setOrders}) {

    const [msg,setMsg] = useState('')
    const [isOpened,setIsOpened] = useState(false)
    const handleSetOrderStatus = async (id_order,curStatus,action) => {
        let status
        if (action === 'next') {
            switch (curStatus) {
                case 'PROCESSING':
                    status = 'SENDING'
                    break;
                case 'SENDING':
                    status = 'DELIVERED'
                    break;
                default:
                    break;
            }
        } else if (action === 'prev') {
            switch (curStatus) {
                case 'DELIVERED':
                    status = 'SENDING'
                    break;
                case 'SENDING':
                    status = 'PROCESSING'
                    break;
                default:
                    break;
            }
        }
        if (status) {
            const resp = await setOrderStatus(id_order,status)
            const json = await resp.json()
            if (json.mensagem) {
                setMsg(json.mensagem)
                setIsOpened(true)
            }
            const orderedList = json.sort((a,b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
            setOrders(orderedList)
        }
    }

    const handleDeleteOrder = async id_order => {
        const resp = await deleteOrder(id_order)
        const json = await resp.json()
        const orderedList = json.sort((a,b) => Date.parse(b.timestamp) - Date.parse(a.timestamp))
        setOrders(orderedList)
    }
    return (
        <S.TableOrders>
            <Mensagem setIsOpened={setIsOpened} isOpened={isOpened} mensagem={msg} />
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>status</th>
                        <th>hora do pedido</th>
                        <th>cliente</th>
                        <th>produtos</th>
                        <th>Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.reduce((acc,order) => (
                        <>{acc}<tr key={order.id_order}><td>{order.id_order}</td><td
                        >{order.status}</td><td
                        >{new Date(order.timestamp).toLocaleString()}</td><td
                        >{order.client}</td><td
                        ><ProductsModal products={order.products}/></td><td
                        ><Button text='prev' handleClick={e => handleSetOrderStatus(order.id_order,order.status,'prev')} small
                        /><Button text='next' handleClick={e => handleSetOrderStatus(order.id_order,order.status,'next')} small
                        /><Button text='Cancelar Pedido' red secondary handleClick={e => handleDeleteOrder(order.id_order)} /></td></tr></>
                    ),<></>)}
                </tbody>
            </table>
        </S.TableOrders>
    )
}
