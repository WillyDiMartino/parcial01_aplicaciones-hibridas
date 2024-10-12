import mongoose from "mongoose";

const driverSchema = new mongoose.Schema({
    name: { type: String, required: true },
    lastname: { type: String, required: true },
    team: { type: String, required: true },
    number: { type: Number, required: true },
    birth: { type: Date, required: true },
    country: { type: String, required: true },
    raceWins: { type: Number, required: true },
    podiums: { type: Number, required: true },
    points24: { type: Number, required: true },
    grandPrixEntered: { type: Number, required: true },
    worldChampionships: { type: Number, required: true },
    driverImg: { type: String, required: true }
});

export default mongoose.model("Driver", driverSchema);

// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);

// const driverFilePath = path.join(path.dirname(__filename), "../data/drivers.json");

// const readDrivers = () => {
//     const drivers = fs.readFileSync(driverFilePath, "utf8")
//     return JSON.parse(drivers);
//     };

// const writeDrivers = (drivers) => {
//     fs.writeFileSync(driverFilePath, JSON.stringify(drivers, "utf8"));
// };

// export {readDrivers, writeDrivers};