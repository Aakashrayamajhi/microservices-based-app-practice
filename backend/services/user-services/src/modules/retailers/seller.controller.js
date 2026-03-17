import * as sellerService from "./seller.service.js";

/* ------------------- Create Seller ------------------- */
export const createSeller = async (req, res) => {
  try {
    const seller = await sellerService.createSeller(req.body);
    res.status(201).json({ success: true, seller });
  } catch (error) {
    console.error("Create seller error:", error.message);
    res.status(error.status || 400).json({ success: false, message: error.message });
  }
};

/* ------------------- Get Seller by Email ------------------- */
export const getSellerByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const seller = await sellerService.findSellerByEmail(email);
    if (!seller)
      return res.status(404).json({ success: false, message: "Seller not found" });
    res.json({ success: true, seller });
  } catch (error) {
    console.error("Get seller by email error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};

/* ------------------- Get Seller by ID ------------------- */
export const getSellerById = async (req, res) => {
  try {
    const seller = await sellerService.getSellerById(req.params.id);
    if (!seller)
      return res.status(404).json({ success: false, message: "Seller not found" });
    res.json({ success: true, seller });
  } catch (error) {
    console.error("Get seller by ID error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};

/* ------------------- Get All Sellers ------------------- */
export const getAllSellers = async (req, res) => {
  try {
    const sellers = await sellerService.getAllSellers();
    res.json({ success: true, sellers });
  } catch (error) {
    console.error("Get all sellers error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};

/* ------------------- Update Seller ------------------- */
export const updateSeller = async (req, res) => {
  try {
    const seller = await sellerService.updateSeller(req.params.id, req.body);
    res.json({ success: true, seller });
  } catch (error) {
    console.error("Update seller error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};

/* ------------------- Delete Seller ------------------- */
export const deleteSeller = async (req, res) => {
  try {
    await sellerService.deleteSeller(req.params.id);
    res.json({ success: true, message: "Seller deleted" });
  } catch (error) {
    console.error("Delete seller error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};