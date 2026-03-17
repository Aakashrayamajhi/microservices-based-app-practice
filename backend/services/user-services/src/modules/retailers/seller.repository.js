import Seller from "./seller.model.js"

export const findByEmail = async (email)=>{
return await Seller.findOne({email})
}

export const createSeller = async ({
    fullName,
    phoneNumber,
    password,
    email,
    storeName,
    storeAddress,
    storeDescription,
    documents,
    bankDetails
}) => {
    return await Seller.create({
        fullName,
        phoneNumber,
        email,
        password,
        storeName,
        storeAddress,
        storeDescription,
        documents,
        bankDetails
    })
}

export const getSellerById = async (id)=>{
    return await Seller.findById(id)
}

export const updateSeller = async (id , data)=>{
    return await Seller.findOneAndUpdate(id, data , {new : true})
}

export const deleteSeller = async (id)=>{
    return await Seller.findByIdAndDelete(id)
}

export const getAllSeller = async ()=>{
    return await Seller.find()
}
