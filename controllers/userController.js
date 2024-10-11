import { readUsers, writeUsers } from "../model/userModel.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

const secretKey = process.env.SECRET;


const getAllUsers = (req, res) => {
    let users = readUsers();
    res.status(200).json(users);
};

const getUserById = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsers();
    const user = users.find(u => u.id === userId);
    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "No encontramos el usuario que buscas" });
    }
};

const createUser = async (req, res) => {

    const { name, lastname, username, email, password, role } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    let users = readUsers();

    const newUser = {
        id: users.length > 0 ? users.length + 1 : 1,
        name,
        lastname,
        username,
        email,
        password: hashedPassword,
        role
    };
    users.push(newUser);
    writeUsers(users);
    res.status(201).json(newUser);
};

const updateUser = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsers();
    const userIndex = users.findIndex(u => u.id === userId);

    if (userIndex != -1) {
        users[userIndex] = { id: userId, ...req.body };
        writeUsers(users);
        res.status(200).json(users[userIndex]);
    } else {
        res.status(404).json({ message: "No encontramos el usuario que buscas" });
    }
};

const deleteUser = (req, res) => {
    const userId = parseInt(req.params.id);
    let users = readUsers();
    const userIndex = users.findIndex(u => u.id === userId);
    if (userIndex != -1) {
        users = users.filter(u => u.id !== userId);
        writeUsers(users);
        res.status(200).json({ message: "Usuario eliminado" });
    } else {
        res.status(404).json({ message: "No encontramos el usuario que buscas" });
    }
};

const loginUser = async (req, res) => {
    const {email, password} = req.body;
    let users = readUsers();
    const user = users.find(u => u.email === email);

    if (!user){
        return res.status(404).json({message: "Usuario no encontrado"});
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword){
        return res.status(401).json({message: "Contraseña incorrecta"});
    }
    
    console.log(secretKey);
    const token = jwt.sign({id: user.id, email: user.email, role: user.role}, secretKey, {expiresIn: "1h"});

    res.status(200).json({token});

};

export { getAllUsers, getUserById, createUser, updateUser, deleteUser, loginUser };

