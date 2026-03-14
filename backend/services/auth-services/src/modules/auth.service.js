import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"
import * as authRepository from "./auth.repository.js"
import dotenv from "dotenv"
import path from "path"
import { fileURLToPath } from "url"
import {checkinredis , reservedinredis , saveinredis} from "../utils/lookup.js"

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

dotenv.config({
  path: path.join(__dirname, "../../.env")
})

const JWT_SECRET = process.env.JWT_SECRET 
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || "1d"

export const registerUser = async ({ name, email, password }) => {
  if (!name || !email || !password) throw new Error("All fields are required")
  if (!email.includes("@")) throw new Error("Invalid email")
  if (password.length < 6) throw new Error("Password too short")

    const usernameExist= await checkinredis(name)
    if(usernameExist && usernameExist !== "reserved" ){
      throw new Error("username already Exist")
    }
    
const reserved = await reservedinredis(name)
  if(!reserved){
    throw new Error("username already Exist, try another")
}

  const existingUser = await authRepository.findUserByEmail(email)
  if (existingUser) throw new Error("User already exists")

  const hashedPassword = await bcrypt.hash(password, 10)

  const user = await authRepository.createUser({ name, email, password: hashedPassword })

const savedch = await saveinredis(name)
console.log("saved in redis", savedch)
  return { id: user._id, name: user.name, email: user.email }
}

export const loginUser = async ({ email, password }) => {
  if (!email || !password) throw new Error("Email and password required")

  const user = await authRepository.findUserByEmail(email)
  if (!user) throw new Error("User not found")

  const match = await bcrypt.compare(password, user.password)
  if (!match) throw new Error("Invalid password")

  const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN })

  return { token, user: { id: user._id, name: user.name, email: user.email } }
}