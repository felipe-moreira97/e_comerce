import { useReducer } from "react"
import globalContext from "./globalContext"
import reducer from './reducer'
import data from './data'

function Provider({children}) {
    const [state,dispatch] = useReducer(reducer,data)
    return (
        <globalContext.Provider value={{state,dispatch}} >{children}</globalContext.Provider>
    )
}
export default Provider