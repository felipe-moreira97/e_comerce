function processResponse(response) {
    const resp = response.map(obj => {
        return (
            {
                id_order:obj.id_order,
                status:obj.status,
                timestamp:obj.timestamp,
                id_client:obj.id_client,
                client:obj.client,
                products:[
                    {
                        id_product:obj.id_product,
                        product:obj.product,
                        price:obj.price,
                        description:obj.description,
                        imagePath:obj.imagePath,
                        quantity:obj.quantity,
                        category:obj.category
                    }
                ]
            }
        )
    })
    const result = resp.reduce((acc,cur) => {
        if (!!(acc.findIndex(e => e.id_order  == cur.id_order) + 1)) {
            acc.find(e => e.id_order  == cur.id_order).products.push(...cur.products)
        } else{
            acc.push(cur)
        }
        return acc
    },[])
    return result
}
module.exports = processResponse