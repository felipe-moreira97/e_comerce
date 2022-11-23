const express = require('express')
const createCategory = require('../useCases/category/createCategory')
const deleteCategory = require('../useCases/category/deleteCategory')
const getAllCategory = require('../useCases/category/getAllcategory')
const getProductsByCategory = require('../useCases/category/getProductsByCategory')
const updateCategory = require('../useCases/category/updateCategory')
const getAllOrders = require('../useCases/order/getAllOrders')
const createProduct = require('../useCases/product/createProduct')
const deleteProduct = require('../useCases/product/deleteProduct')
const getAllProducts = require('../useCases/product/getAllProducts')
const getOneProduct = require('../useCases/product/getOneProduct')
const updateProduct = require('../useCases/product/updateProduct')
const router = express.Router()

// get all products
router.get('/products',getAllProducts)

// get a especific product
router.get('/products/:id',getOneProduct)

//create a product 
router.post('/products',createProduct)

// update a product
router.patch('/products/:id',updateProduct)

// delete a product
router.delete('/products/:id',deleteProduct)

// get all category
router.get('/category',getAllCategory)

// get products by category
router.get('/category/:id',getProductsByCategory)

// create a category
router.post('/category',createCategory)

// update a category
router.patch('/category/:id',updateCategory)

// delete a category
router.delete('/category/:id',deleteCategory)

// get all orders
router.get('/orders',getAllOrders)

// create a order
router.post('/orders',(req,res) => {
    res.send('OK')
})

// update a order
router.patch('/orders:id',(req,res) => {
    res.send('OK')
})

// delete a order
router.delete('/orders:id',(req,res) => {
    res.send('OK')
})

module.exports = router