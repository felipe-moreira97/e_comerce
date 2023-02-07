import Button from "../Button"
import "./style.css"

function Modal({isOpened,setIsOpened,products}) {
    const display = isOpened ? "block" : "none"
    return (
        <div className="products-modal" style={{display:display}} >
            <div className="modal-container">
                <div className="modal-header">
                    <h3>produtos do pedido</h3>
                    <Button text='fecha' handleClick={e => setIsOpened(false)} />
                </div>
                <table className="modalTable">
                    <thead>
                        <tr>
                            <th>foto</th>
                            <th>produto</th>
                            <th>categoria</th>
                            <th>Quantidade</th>
                            <th>Preço unitário</th>
                            <th>SubTotal</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.reduce((acc,prod) => (
                            <>{acc}<tr key={prod.id_product} >
                                <td className="img" style={{backgroundImage:`url(http://localhost:3001/${prod.imagePath})`}}></td>
                                <td>{prod.product}</td>
                                <td>{prod.category}</td>
                                <td>{prod.quantity}</td>
                                <td>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format((prod.price))}</td>
                                <td>{new Intl.NumberFormat('pt-BR',{style:'currency',currency:'BRL'}).format((prod.price * prod.quantity))}</td>
                                </tr></>
                        ),<></>)}
                    </tbody>
                </table>
            </div>
        </div>
    )
}
export default Modal
