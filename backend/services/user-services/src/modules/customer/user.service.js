// user.service.js
import * as userRepository from "./user.repository.js"

/* =========================
   USER-SERVICE BUSINESS LOGIC
   (No authentication here)
========================= */

/* Create a user (used by auth-service) */
export const createUser = async ({ name, email, password }) => {
  const existingUser = await userRepository.findByEmail(email)
  if (existingUser) {
    const error = new Error("User already exists")
    error.status = 400
    throw error
  }

  const user = await userRepository.createUser({ name, email, password })
  return user
}

/* Get user by email (used by auth-service) */
export const findUserByEmail = async (email) => {
  return await userRepository.findByEmail(email)
}

/* CRUD operations */
export const getAllUsers = async () => await userRepository.getAllUsers()
export const getUserById = async (id) => await userRepository.getUserById(id)
export const updateUser = async (id, data) => await userRepository.updateUser(id, data)
export const deleteUser = async (id) => await userRepository.deleteUser(id)