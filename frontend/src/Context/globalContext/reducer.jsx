import * as type from './types'

function reducer(state,action) {
    switch (action.type) {
        case type.SET_HOME_URL:{
            return {...state,homeUrl:action.payload}
        }
        case type.ADD_TO_CART:{
            const { products } = state
            const index = products.findIndex(p => p.id_product === action.payload[0].id_product)
            let newProducts
            if( !!products[index]) { 
                const { quantity } = products[index]
                const newQuantity = quantity + action.payload[0].quantity
                const newProduct = {...products[index],id_product:products[index].id_product,quantity:newQuantity}
                newProducts = [...products] 
                newProducts.splice(index,1,newProduct)
            } else{
                newProducts = products.concat(action.payload)
            }
            return {...state,products:[...newProducts]}
        }
        case type.REMOVE_TO_CART:{
            const { products } = state
            const newProducts = products.filter(p => p.id_product !== action.payload)
            return {...state,products:newProducts}
        }
        default:
            return {...state}
    }
}
export default reducer