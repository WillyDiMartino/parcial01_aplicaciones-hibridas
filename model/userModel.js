import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const userFilePath = path.join(path.dirname(__filename), "../data/users.json");


const readUsers = () => {
    const users = fs.readFileSync(userFilePath, "utf8") 
    return JSON.parse(users);
};

const writeUsers = (users) => {
    fs.writeFileSync(userFilePath, JSON.stringify(users, "utf8"));
};

export {readUsers, writeUsers};