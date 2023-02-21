import { formatNumToCurrency } from "../../utils"
import { theme } from '../../styles/theme'
import * as S from './style'

function Modal({isOpened,setIsOpened,products}) {

    return (
        <S.Modal display={isOpened} >
            <section>
                < header>
                    <h3>produtos do pedido</h3>
                    <span onClick={e => setIsOpened(false)} >❌</span>
                </ header>
                <table>
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
                                <td><img src={`http://localhost:3001/${prod.imagePath ? prod.imagePath : theme.defaultImage }`} alt='' /></td>
                                <td>{prod.product}</td>
                                <td>{prod.category}</td>
                                <td>{prod.quantity}</td>
                                <td>{formatNumToCurrency(prod.price)}</td>
                                <td>{formatNumToCurrency(prod.price * prod.quantity)}</td>
                                </tr></>
                        ),<></>)}
                    </tbody>
                </table>
            </section>
        </S.Modal>
    )
}
export default Modal
