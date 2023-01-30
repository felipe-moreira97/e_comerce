const baseUrl = 'http://localhost:3001'

export function request(url,method = 'GET',body = null) {
    const token = getToken()
    const authorization = token ? `Bearer ${token}` : null
    const headers = {
        "Content-type": "application/json; charset=UTF-8",
        "Accept": "*",
        "mode":"no-cors",
        "Authorization": authorization,
    }
    const b = body ? JSON.stringify(body) : null
    const req = new Request(url,{
        headers,
        method,
        body:b
    })
    return new Promise((resolve,reject) => {
        fetch(req)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}
export function login(email,password) {
    const body = {
        email,
        password
    }
    return new Promise((resolve,reject) => {
        request(`${baseUrl}/login`,'POST',body)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}
export function createOrUpdateProduct(body,id = null) {
    const url = id ?  `${baseUrl}/products/${id}` : `${baseUrl}/products`
    const method = id ? 'PATCH' : 'POST'

    return new Promise((resolve,reject) => {
        request(url,method,body)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}
export function createOrder(products) {
        return new Promise((resolve,reject) => {
            request(`${baseUrl}/orders`,'POST',{ products })
                .then(resp => resolve(resp))
                .catch(err => reject(err))
        })
    }
export function setToken(token) {
    window.sessionStorage.setItem('token',JSON.stringify(token))
}
export function getToken() {
    const json = window.sessionStorage.getItem('token')
    const token = JSON.parse(json)
    return token
}
export function signin(name,email,password) {
    const body = {
        name,
        email,
        password
    }
    return new Promise((resolve,reject) => {
        request(`${baseUrl}/client`,'POST',body)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}
export function deleteOrder(id_order) {
    return new Promise((resolve,reject) => {
        console.log(`${baseUrl}/orders/${id_order}`)
        request(`${baseUrl}/orders/${id_order}`,'DELETE',null)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}
export function setOrderStatus(id_order,currentStatus) {
    let status
    if (currentStatus === 'PROCESSING') {
        status = 'SENDING'
    } else if (currentStatus === 'SENDING') {
        status = 'DELIVERED'
    } else {
        return
    }
    return new Promise((resolve,reject) => {
        const body = {
            status
        }
        request(`${baseUrl}/orders/${id_order}`,'PATCH',body)
            .then(resp => resolve(resp))
            .catch(err => reject(err))
    })
}
