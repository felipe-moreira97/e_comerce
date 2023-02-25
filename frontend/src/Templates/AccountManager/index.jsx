import { useEffect } from 'react'
import { useState } from 'react'
import AdminNav from '../../Components/Admin/AdminNav'
import Footer from '../../Components/Footer'
import { getAccounts } from '../../utils'
import * as S from './style'

export default function AccountManager({ admin }) {
    const [accounts, setAccounts] = useState([])

    useEffect(() => {
        const fecthData = async () => {
            const data = await getAccounts(admin)
            setAccounts(data)
        }
        fecthData()
    }, [admin])
    return (
        <>
            <AdminNav />
            <S.AccountManager>
                {!!accounts[0] ? accounts.reduce((acc, account) => (
                    <>{acc}<div>
                        <p>{account.email}</p>
                        <p>{account.name}</p>

                    </div></>
                ), <></>) : <p>Não há contas cadastradas</p>}
            </S.AccountManager>
            <Footer />
        </>
    )
}
