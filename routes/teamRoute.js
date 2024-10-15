import express from "express";
import { auth, verificarRol } from "../middlewares/middlewares.js";

import { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam, searchByTeamName, filterByConstructorPoints } from "../controllers/teamController.js";

const teamRouter = express.Router();

teamRouter.get("/", getAllTeams);
teamRouter.get("/:id", getTeamById);
teamRouter.post("/", createTeam);
teamRouter.put("/:id", updateTeam);
teamRouter.delete("/:id", deleteTeam);
teamRouter.get("/search/name", searchByTeamName);
teamRouter.get("/search/constructorPoints", filterByConstructorPoints);

export default teamRouter;