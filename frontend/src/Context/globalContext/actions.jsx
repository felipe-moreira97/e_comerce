import * as type from './types'
export function setHomeUrl(dispatch,url) {
    dispatch({type:type.SET_HOME_URL,payload:url})
}
export function addToCart(dispatch,id_product,quantity) {
    dispatch({type:type.ADD_TO_CART,payload:[{id_product,quantity}]})
}
export function removeToCart(dispatch,id_product) {
    dispatch({type:type.REMOVE_TO_CART,payload:id_product})
}
