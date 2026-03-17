import express from 'express'
import userRouter from './modules/customer/user.route.js'
import sellerRouter from './modules/retailers/seller.route.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/v1/user', userRouter)
app.use('/api/v1/seller', sellerRouter)


export {app}
