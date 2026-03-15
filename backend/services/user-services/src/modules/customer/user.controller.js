import * as userService from "./user.service.js"

export const register = async (req , res)=>{
    try{
        const user = await userService.registerUser(req.body)
        res.status(201).json(user)
    }catch(error){
        res.status(error.status || 500).json({ message: error.message });
    }
}

export const login = async (req , res)=>{
    try{
        const result = await userService.loginUser(req.body)
        res.status(201).json(result)
    }catch(error){
        res.status(error.status || 500).json({ message: error.message });
    }
}

export const getAllUsers = async (req, res) => {
  const users = await userService.getAllUsers();
  res.json(users);
};

export const getUserById = async (req, res) => {
  const user = await userService.getUserById(req.params.id);
  res.json(user);
};

export const updateUser = async (req, res) => {
  const user = await userService.updateUser(req.params.id, req.body);
  res.json(user);
};

export const deleteUser = async (req, res) => {
  await userService.deleteUser(req.params.id);
  res.json({ message: "User deleted" });
};