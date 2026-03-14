import * as authService from "./auth.service.js"

export const register = async (req, res) => {
  try {
    const user = await authService.registerUser(req.body)
    res.status(201).json({ message: "User registered", data: user })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

export const login = async (req, res) => {
  try {
    const result = await authService.loginUser(req.body)
    res.json({ message: "Login successful", data: result })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}