import * as userService from "./user.service.js";

/* ------------------- Create User (used by auth-service) ------------------- */
export const createUser = async (req, res) => {
  try {
    const user = await userService.createUser(req.body);
    res.status(201).json({ success: true, user });
  } catch (error) {
    console.error("Create user error:", error.message);
    res.status(error.status || 400).json({ success: false, message: error.message });
  }
};

/* ------------------- Get User by Email (used by auth-service) ------------------- */
export const getUserByEmail = async (req, res) => {
  try {
    const { email } = req.params;
    const user = await userService.findUserByEmail(email);
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, user });
  } catch (error) {
    console.error("Get user by email error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};

/* ------------------- Get All Users ------------------- */
export const getAllUsers = async (req, res) => {
  try {
    const users = await userService.getAllUsers();
    res.json({ success: true, users });
  } catch (error) {
    console.error("Get all users error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};

/* ------------------- Get User by ID ------------------- */
export const getUserById = async (req, res) => {
  try {
    const user = await userService.getUserById(req.params.id);
    if (!user)
      return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, user });
  } catch (error) {
    console.error("Get user by ID error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};

/* ------------------- Update User ------------------- */
export const updateUser = async (req, res) => {
  try {
    const user = await userService.updateUser(req.params.id, req.body);
    res.json({ success: true, user });
  } catch (error) {
    console.error("Update user error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};

/* ------------------- Delete User ------------------- */
export const deleteUser = async (req, res) => {
  try {
    await userService.deleteUser(req.params.id);
    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    console.error("Delete user error:", error.message);
    res.status(error.status || 500).json({ success: false, message: error.message });
  }
};