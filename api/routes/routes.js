const express = require('express')
const signin = require('../useCases/signin')
const { auth, authAdmin } = require('../useCases/auth')
const login = require('../useCases/login')
const upload = require('../useCases/product/multer')
const signinAdmin = require('../useCases/signin/siginAdmin')

const createCategory = require('../useCases/category/createCategory')
const deleteCategory = require('../useCases/category/deleteCategory')
const getAllCategory = require('../useCases/category/getAllcategory')
const getProductsByCategory = require('../useCases/category/getProductsByCategory')
const updateCategory = require('../useCases/category/updateCategory')

const createOrder = require('../useCases/order/createOrder')
const deleteOrder = require('../useCases/order/deleteOrder')
const getAllOrders = require('../useCases/order/getAllOrders')
const updateOrder = require('../useCases/order/updateOrder')

const createProduct = require('../useCases/product/createProduct')
const deleteProduct = require('../useCases/product/deleteProduct')
const getAllProducts = require('../useCases/product/getAllProducts')
const getOneProduct = require('../useCases/product/getOneProduct')
const updateProduct = require('../useCases/product/updateProduct')

const getAllClient = require('../useCases/client/getAllClient')
const updateClient = require('../useCases/client/updateClient')
const deleteClient = require('../useCases/client/deleteClient')

const getAllAdmin = require('../useCases/admin/getAllAdmin')
const updateAdmin = require('../useCases/admin/updateAdmin')
const deleteAdmin = require('../useCases/admin/deleteAdmin')

const router = express.Router()

// get all products
router.get('/products', getAllProducts)

// get a especific product
router.get('/products/:id', getOneProduct)

//create a product
router.post('/products', authAdmin, upload.single('image'), createProduct)

// update a product
router.patch('/products/:id', authAdmin, upload.single('image'), updateProduct)

// delete a product
router.delete('/products/:id', authAdmin, deleteProduct)

// get all category
router.get('/category', getAllCategory)

// get products by category
router.get('/category/:id', getProductsByCategory)

// create a category
router.post('/category', authAdmin, createCategory)

// update a category
router.patch('/category/:id', authAdmin, updateCategory)

// delete a category
router.delete('/category/:id', authAdmin, deleteCategory)

// get all orders
router.get('/orders', auth, getAllOrders)

// create a order
router.post('/orders', auth, createOrder)

// update a order
router.patch('/orders/:id', authAdmin, updateOrder, getAllOrders)

// delete a order
router.delete('/orders/:id', authAdmin, deleteOrder, getAllOrders)

// get all clients
router.get('/client', authAdmin, getAllClient)

// create a client
router.post('/client', signin)

// update a client
router.patch('/client/:id', authAdmin, updateClient)

// delete a client
router.delete('/client/:id', authAdmin, deleteClient)

// get all admins
router.get('/admin', authAdmin, getAllAdmin)

// create a admin
router.post('/admin', authAdmin, signinAdmin)

// update a admin
router.patch('/admin/:id', authAdmin, updateAdmin)

//delete a admin
router.delete('/admin/:id', authAdmin, deleteAdmin)

//login
router.post('/login', login)

module.exports = router
