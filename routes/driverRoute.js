import express from "express";
import { auth, verificarRol } from "../middlewares/middlewares.js";

import { getAllDrivers, getDriverById, createDriver, updateDriver, deleteDriver } from "../controllers/driverController.js";

const driverRouter = express.Router();

driverRouter.get("/", getAllDrivers);
driverRouter.get("/:id", getDriverById);
driverRouter.post("/", createDriver);
driverRouter.put("/:id", updateDriver);
driverRouter.delete("/:id", deleteDriver);

export default driverRouter;