import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);

const teamFilePath = path.join(path.dirname(__filename), "../data/teams.json");

const readTeams = () => {
    const teams = fs.readFileSync(teamFilePath, "utf8")
    return JSON.parse(teams);
    };

const writeTeams = (teams) => {
    fs.writeFileSync(teamFilePath, JSON.stringify(teams, "utf8"));
};

export {readTeams, writeTeams};