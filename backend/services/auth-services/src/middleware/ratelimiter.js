// 127.0.0.1:6379

import redis from "../config/redis.config.js";


const limit = 10;
const window = 60;

const ratelimiter =  async (req , res , next)=>{
try{
   const ip = req.ip
    const key = `rate_limiter:${ip}`

    const request = await redis.incr(key)

    if(request === 1){
        await redis.expire(key , window)
    }

    if(request > limit){
        return res.status(429).json({
            success : false,
            message : "Too many Requests"
        })
    }

    next()
} catch(error){
    console.log("error from ratelimiting:", error)
    next()
}
 
}

export default ratelimiter