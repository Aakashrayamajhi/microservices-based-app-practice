import User from "./user.model.js"

export const findByEmail = async (email)=>{
    return await User.findOne({ email })
}

export const createUser = async ({ name , email , password })=>{
    return await User.create({ name , email , password })
}

export const getUserById = async (id)=>{
    return await User.findById(id)
}

export const updateUser = async (id , data)=>{
    return await User.findByIdAndUpdate(id , data , { new: true })
}

export const deleteUser = async (id)=>{
    return await User.findByIdAndDelete(id)
}

export const getAllUsers = async ()=>{
    return await User.find()
}