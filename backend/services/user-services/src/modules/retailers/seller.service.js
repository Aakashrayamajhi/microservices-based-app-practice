import * as sellerRepository from "./seller.repository.js"

export const createSeller = async ({ fullName,
    phoneNumber,
    password,
    email,
    storeName,
    storeAddress,
    storeDescription,
    documents,
    bankDetails }) => {

    const existngSeller = await sellerRepository.findByEmail(email)
    if (existngSeller) {
        const error = new Error("Seller already exists")
        error.status = 400
        throw error
    }

    const seller = await sellerRepository.createSeller({ fullName,
    phoneNumber,
    password,
    email,
    storeName,
    storeAddress,
    storeDescription,
    documents,
    bankDetails })
    
    return seller

}

export const findSellerByEmail = async (email)=>{
    return await sellerRepository.findByEmail(email)
}

export const getSellerById = async (id)=>{
    return await Seller.findById(id)
}

export const updateSeller = async (id , data)=>{
    return await Seller.findOneAndUpdate(id, data)
}

export const deleteSeller = async (id)=>{
    return await Seller.findByIdAndDelete(id)
}

export const getAllSeller = async ()=>{
    return await Seller.find()
}
