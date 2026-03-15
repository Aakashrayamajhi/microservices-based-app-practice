import express from "express"
import * as userController from "./user.controller.js"

const userRouter = express.Router()

userRouter.post('/register' , userController.register)
userRouter.post('/login' , userController.login)

// User CRUD
userRouter.get("/", userController.getAllUsers);
userRouter.get("/:id", userController.getUserById);
userRouter.put("/:id", userController.updateUser);
userRouter.delete("/:id", userController.deleteUser);


export default userRouter