import express from 'express'
import authRoutes from "./modules/auth.route.js"
import  ratelimiter  from './middleware/ratelimiter.js'


const app = express()

app.use(express.json())
app.use(ratelimiter)

app.use("/api/v1/auth", authRoutes)

export {app}
