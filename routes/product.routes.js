const { Router } = require("express")
const { getAllProducts } = require("../controller/product.controller")



const routes = Router()

routes.get('/getAllProducts', getAllProducts)

module.exports = routes