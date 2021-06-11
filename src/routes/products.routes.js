import {Router} from 'express'
import {getProducts, 
    createProduct, 
    getProductById, 
    deleteProductById, 
    getTotalProducts,
    updateProductById
} from '../controllers/products.controller'

const router = Router()

// cuando visitemos /products va a ejecutar estas consultas.
router.get("/products/count", getTotalProducts) // se establece primero pq encuentra por coincidencia.

router.get("/products", getProducts)

router.post("/products", createProduct)

router.get("/products/:id", getProductById)

router.delete("/products/:id", deleteProductById)

router.put("/products/:id", updateProductById)

export default router
