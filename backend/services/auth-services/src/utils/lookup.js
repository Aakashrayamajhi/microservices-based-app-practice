import redis from "../config/redis.config.js"

export const checkinredis = async (name)=>{
    const result = await redis.get(`username:${name}`)
    return result
}

export const reservedinredis = async (name)=>{
    const result = await redis.set(`username:${name}`, "reserved" , "NX" , "EX" , 10)
    return result
}

export const saveinredis = async (name)=>{
    const pipeline = redis.pipeline()
    pipeline.set(`username:${name}`, "1")
   const result = await pipeline.exec()
   return result
}

