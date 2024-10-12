import Teams from "../model/teamModel.js";


const getAllTeams = async (req, res) => {
    try {
        const teams = await Teams.find(); 
        res.status(200).json(teams);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const getTeamById = async (req, res) => {
    try {
        const team = await Teams.findById(req.params.id); 
        if (!team) return res.status(404).json({ message: "Equipo no encontrado" });
        res.status(200).json(team);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const createTeam = async (req, res) => {
    try {
        const team = new Teams(req.body);
        const savedTeam = await team.save(); 
        res.status(201).json(savedTeam);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateTeam = async (req, res) => {
    try {
        const updatedTeam = await Teams.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTeam) return res.status(404).json({ message: "Equipo no encontrado" });
        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteTeam = async (req, res) => {
    try {
        const deletedTeam = await Teams.findByIdAndDelete(req.params.id);
        if (!deletedTeam) return res.status(404).json({ message: "Equipo no encontrado" });
        res.status(200).json({ message: "Equipo eliminado" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam };

// import { readTeams, writeTeams } from "../model/teamModel.js";

// const getAllTeams = (req, res) => {
//     let teams = readTeams();
//     res.status(200).json(teams);
// };

// const getTeamById = (req, res) => {
//     const teamId = parseInt(req.params.id);
//     let teams = readTeams();
//     const team = teams.find(t => t.id === teamId);
//     if(team) {
//         res.status(200).json(team);
//     }else {
//         res.status(404).json({message:"No encontramos el equipo que buscas"});
//     }
// };

// const createTeam = (req, res) => {
//     const {name, base, teamChief, powerUnit, firstEntry, constructorPoints, constructorChampionships, driverOne, driverTwo, logoImg} = req.body;

//     let teams = readTeams();
//     const newTeam = {
//         id: teams.length > 0 ? teams.length + 1 : 1,
//         name,
//         base,
//         teamChief,
//         powerUnit,
//         firstEntry,
//         constructorPoints,
//         constructorChampionships,
//         driverOne,
//         driverTwo,
//         logoImg
//     };
//     teams.push(newTeam);
//     writeTeams(teams);
//     res.status(201).json(newTeam);
// };

// const updateTeam = (req, res) => {
//     const teamId = parseInt(req.params.id);
//     let teams = readTeams();
//     const teamIndex = teams.findIndex(t => t.id === teamId);
//     if(teamIndex != -1){
//         teams[teamIndex] = {id: teamId, ...req.body};
//         writeTeams(teams);
//         res.status(200).json(teams[teamIndex]);
//     }else{
//         res.status(404).json({message:"No encontramos el equipo que buscas"});
//     }
// };

// const deleteTeam = (req, res) => {
//     const teamId= parseInt(req.params.id);
//     let teams = readTeams();
//     const teamIndex = teams.findIndex(t => t.id === teamId);
//     if(teamIndex != -1){
//         teams = teams.filter(t => t.id !== teamId);
//         writeTeams(teams);
//         res.status(200).json({message:"Equipo eliminado"});
//     }else{
//         res.status(404).json({message:"No encontramos el equipo que buscas"});
//     }
// };

// export {getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam};