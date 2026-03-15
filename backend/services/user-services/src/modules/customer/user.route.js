import express from "express"
import * as userController from "./user.controller.js"

const userRouter = express.Router()


userRouter.get("/", userController.getAllUsers)
userRouter.get("/:id", userController.getUserById)
userRouter.post("/", userController.createUser)       // Create user for auth-service calls
userRouter.put("/:id", userController.updateUser)
userRouter.delete("/:id", userController.deleteUser)



export default userRouter