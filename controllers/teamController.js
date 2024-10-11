import { readTeams, writeTeams } from "../model/teamModel.js";

const getAllTeams = (req, res) => {
    let teams = readTeams();
    res.status(200).json(teams);
};

const getTeamById = (req, res) => {
    const teamId = parseInt(req.params.id);
    let teams = readTeams();
    const team = teams.find(t => t.id === teamId);
    if(team) {
        res.status(200).json(team);
    }else {
        res.status(404).json({message:"No encontramos el equipo que buscas"});
    }
};

const createTeam = (req, res) => {
    const {name, base, teamChief, powerUnit, firstEntry, constructorPoints, constructorChampionships, driverOne, driverTwo, logoImg} = req.body;

    let teams = readTeams();
    const newTeam = {
        id: teams.length > 0 ? teams.length + 1 : 1,
        name,
        base,
        teamChief,
        powerUnit,
        firstEntry,
        constructorPoints,
        constructorChampionships,
        driverOne,
        driverTwo,
        logoImg
    };
    teams.push(newTeam);
    writeTeams(teams);
    res.status(201).json(newTeam);
};

const updateTeam = (req, res) => {
    const teamId = parseInt(req.params.id);
    let teams = readTeams();
    const teamIndex = teams.findIndex(t => t.id === teamId);
    if(teamIndex != -1){
        teams[teamIndex] = {id: teamId, ...req.body};
        writeTeams(teams);
        res.status(200).json(teams[teamIndex]);
    }else{
        res.status(404).json({message:"No encontramos el equipo que buscas"});
    }
};

const deleteTeam = (req, res) => {
    const teamId= parseInt(req.params.id);
    let teams = readTeams();
    const teamIndex = teams.findIndex(t => t.id === teamId);
    if(teamIndex != -1){
        teams = teams.filter(t => t.id !== teamId);
        writeTeams(teams);
        res.status(200).json({message:"Equipo eliminado"});
    }else{
        res.status(404).json({message:"No encontramos el equipo que buscas"});
    }
};

export {getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam};