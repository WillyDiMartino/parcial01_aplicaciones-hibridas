import express from 'express';
import {auth, verificarRol} from '../middlewares/middlewares.js';
import { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser } from '../controllers/userController.js';
import dotenv from 'dotenv';

dotenv.config();

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.get("/:id", getUserById);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
userRouter.post("/login", loginUser);

export default userRouter;

