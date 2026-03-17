import * as sellerRepository from "./seller.repository.js";

export const createSeller = async (data) => {
  const existingSeller = await sellerRepository.findByEmail(data.email);
  if (existingSeller) {
    const error = new Error("Seller already exists");
    error.status = 400;
    throw error;
  }

  return await sellerRepository.createSeller(data);
};

export const findSellerByEmail = async (email) => {
  return await sellerRepository.findByEmail(email);
};

export const getSellerById = async (id) => {
  return await sellerRepository.getSellerById(id);
};

export const updateSeller = async (id, data) => {
  return await sellerRepository.updateSeller(id, data);
};

export const deleteSeller = async (id) => {
  return await sellerRepository.deleteSeller(id);
};

export const getAllSellers = async () => {
  return await sellerRepository.getAllSellers();
};