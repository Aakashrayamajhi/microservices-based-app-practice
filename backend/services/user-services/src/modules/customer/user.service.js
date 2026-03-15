import * as userRepository from "./user.repository.js"
import bcrypt from "bcrypt"

// Business logic for Register
export const registerUser = async ({name , email , password})=>{
    try{
        const existingUser = await userRepository.findByEmail(email)

        if(existingUser){
            const error = new Error("user already exists")
            error.status = 400
            throw error
        }

        const hashedpassword = await bcrypt.hash(password , 10)

        const user = await userRepository.createUser({
            name,
            email,
            password: hashedpassword
        })

        return user

    }catch(error){
        throw error
    }
}

// Business logic for login
export const loginUser = async ({email , password})=>{
    try{
        const user = await userRepository.findByEmail(email)

        if(!user){
            const error = new Error("Invalid Credentials")
            error.status = 401
            throw error
        }

        const isMatch = await bcrypt.compare(password , user.password)

        if(!isMatch){
            const error = new Error("Invalid Credentials")
            error.status = 401
            throw error
        }

        return user

    }catch(error){
        throw error
    }
}

// CRUD operations
export const getUserByEmail = async (email) => await userRepository.findByEmail(email)
export const getAllUsers = async () => await userRepository.getAllUsers()
export const getUserById = async (id) => await userRepository.getUserById(id)
export const updateUser = async (id, data) => await userRepository.updateUser(id, data)
export const deleteUser = async (id) => await userRepository.deleteUser(id)