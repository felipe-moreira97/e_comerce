const orders = [
    {
        id_order:1,
        status:'PROCESSING',
        timestamp:'',
        id_client:123,
        client:'felipe',
        products:[
            {
                id_product:23,
                product:'coca cola',
                price:123,
                description:'descrição do produto',
                quantity:43,
                category:'coca'
            },
            {
                id_product:23,
                product:'coca cola',
                price:123,
                description:'descrição do produto',
                quantity:43
            }
        ]
    }
]

const response = [
        {
            "id_order":1,
            "status":"PROCESSING",
            "timestamp":"2022-11-18T18:26:44.000Z",
            "id_client":1,
            "client":"felipe",
            "id_product":2,
            "product":"produto teste",
            "price":10,
            "description":"isso é apenas um produto teste",
            "imagePath":"aqui_vai_o_arquivo_da_imagem_do_produto.jpg",
            "quantity":3,
            "category":"categoria teste"
        },
        {
            "id_order":1,
            "status":"PROCESSING",
            "timestamp":"2022-11-18T18:26:44.000Z",
            "id_client":1,
            "client":"felipe",
            "id_product":3,
            "product":"outro produto teste",
            "price":90,
            "description":"isso é apenas um produto teste",
            "imagePath":"aqui_vai_o_arquivo_da_imagem_do_produto.jpg",
            "quantity":5,
            "category":"categoria teste"
        }
    ]
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

const result = resp.reduce((acc,cur,i) => {
    if (acc.id_order === cur.id_order) {
       return acc.products.concat(cur.products)
    } else {
        
    }

})

console.log(result)