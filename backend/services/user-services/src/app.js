import express from 'express'
import userRouter from './modules/customer/user.route.js'


const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

//routes
app.use('/api/v1/user', userRouter)


export {app}
