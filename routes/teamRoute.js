import express from "express";
import { auth, verificarRol } from "../middlewares/middlewares.js";

import { getAllTeams, getTeamById, createTeam, updateTeam, deleteTeam, searchByTeamName, filterByConstructorPoints } from "../controllers/teamController.js";

const teamRouter = express.Router();

teamRouter.get("/", auth,  getAllTeams);
teamRouter.get("/:id", auth,  getTeamById);
teamRouter.post("/", auth, verificarRol(["admin", "super-admin"]), createTeam);
teamRouter.put("/:id", auth, verificarRol(["admin", "super-admin"]), updateTeam);
teamRouter.delete("/:id", auth, verificarRol(["admin", "super-admin"]), deleteTeam);
teamRouter.get("/search/name", auth,  searchByTeamName);
teamRouter.get("/search/co auth, nstructorPoints", auth,  filterByConstructorPoints);

export default teamRouter;