import userRepository from "./user.repository.js"
import bcrypt from "bcrypt"

//Business logic for Regiser 

exports.regiserUser = async ({name , email , password})=>{
    try{
 const existingUser = await userRepository.findByEmail(email)
    if(existingUser){
        const error = new Error("user already exists")
        error.status = 400
        throw error
    }

    const hashedpassword = bcrypt.hash(password , 10 )
    const user = await userRepository.createdUser({name , email , password : hashedpassword})
    return user

    }catch(error){
        throw new Error("error in user.services.js register:", error)
    }

}

//Business logic for login
exports.login = async ({name , email , password})=>{
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
         throw new Error("error in user.services.js login:", error)
    }
}

//Business logic for  CRUD operation

exports.getUserByEmail = async (email) => await userRepository.findByEmail(email);
exports.getAllUsers = async () => await userRepository.getAllUsers();
exports.getUserById = async (id) => await userRepository.getUserById(id);
exports.updateUser = async (id, data) => await userRepository.updateUser(id, data);
exports.deleteUser = async (id) => await userRepository.deleteUser(id);