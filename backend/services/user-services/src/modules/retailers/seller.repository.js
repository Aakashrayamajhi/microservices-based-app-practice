import Seller from "./seller.model.js";

export const findByEmail = async (email) => {
  return await Seller.findOne({ email });
};

export const createSeller = async (data) => {
  return await Seller.create(data);
};

export const getSellerById = async (id) => {
  return await Seller.findById(id);
};

export const updateSeller = async (id, data) => {
  return await Seller.findByIdAndUpdate(id, data, { new: true });
};

export const deleteSeller = async (id) => {
  return await Seller.findByIdAndDelete(id);
};

export const getAllSellers = async () => {
  return await Seller.find();
};