//configuramos los  modulos
import express from 'express'
import config from './config'
import productsRoutes from './routes/products.routes'

//ejecuta el modulo de express
const app = express()

//settings
app.set('port', config.port) //ponemos en escucha el puerto determinado.

//middlewares
app.use (express.json())
app.use(express.urlencoded({ extended : false }))

app.use(productsRoutes)

export default app