import mongoose from "mongoose";

const teamsSchema = new mongoose.Schema({
    name: {type: String, required: true},
    base: {type: String, required: true},
    teamChief: {type: String, required: true},
    powerUnit: {type: String, required: true},
    firstEntry: {type: Number, required: true},
    constructorPoints: {type: Number, required: true},
    constructorChampionships: {type: Number, required: true},
    driverOne: {type: String, required: true},
    driverTwo: {type: String, required: true},
    logoImg: {type: String, required: true}
});

export default mongoose.model("teams", teamsSchema);
// import fs from "fs";
// import path from "path";
// import { fileURLToPath } from "url";

// const __filename = fileURLToPath(import.meta.url);

// const teamFilePath = path.join(path.dirname(__filename), "../data/teams.json");

// const readTeams = () => {
//     const teams = fs.readFileSync(teamFilePath, "utf8")
//     return JSON.parse(teams);
//     };

// const writeTeams = (teams) => {
//     fs.writeFileSync(teamFilePath, JSON.stringify(teams, "utf8"));
// };

// export {readTeams, writeTeams};