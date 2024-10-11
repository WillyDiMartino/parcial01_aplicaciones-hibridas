import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const driverFilePath = path.join(path.dirname(__filename), "../data/drivers.json");

const readDrivers = () => {
    const drivers = fs.readFileSync(driverFilePath, "utf8")
    return JSON.parse(drivers);
    };

const writeDrivers = (drivers) => {
    fs.writeFileSync(driverFilePath, JSON.stringify(drivers, "utf8"));
};

export {readDrivers, writeDrivers};