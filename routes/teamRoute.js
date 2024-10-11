import express from "express";
import { auth, verificarRol } from "../middlewares/middlewares.js";

import { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam } from "../controllers/teamController.js";

const teamRouter = express.Router();

teamRouter.get("/", getAllTeams);
teamRouter.get("/:id", getTeamById);
teamRouter.post("/", createTeam);
teamRouter.put("/:id", updateTeam);
teamRouter.delete("/:id", deleteTeam);

export default teamRouter;