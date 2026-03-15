import User from "./user.model.js"

exports.findByEmail = async (email)=>{
    return await User.findOne({email})
}

exports.createUser = async ({name , email , password})=>{
    return await User.create({name , email , password})
}

exports.getUserById = async (id)=>{
    return await User.findById(id)
}

exports.updateUser = async (id , data)=>{
    return await User.findByIdAndUpdate(id , data , { new : true})
}

exports.deleteUser = async (id)=>{
    return await User.findByIdAndDelete(id)
}

exports.getAllUser = async ()=>{
    return await User.find()
}