import express from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

import { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser } from '../controllers/userController.js';

const secretKey = process.env.SECRET;

const userRouter = express.Router();

const auth = (req, res, next) => {
    const getToken = req.headers.authorization;
    if (getToken) {
        const token  = getToken.split(" ")[1];
        jwt.verify(token, secretKey, (err, paylod)=> {
            if(err){
                return res.status(403).json({message: "Token inválido"});
            }else{
                req.user = {id: paylod.id, username: paylod.username};
                next();
            }
        })
    } 
};

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", loginUser);

export default userRouter;