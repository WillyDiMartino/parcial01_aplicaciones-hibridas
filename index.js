import express from 'express';
import userRoute from './routes/userRoute.js';
import driverRoute from './routes/driverRoute.js';
import teamRoute from './routes/teamRoute.js';
import path from 'path';
import { fileURLToPath } from 'url';


const app = express();

const port = 3000;

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);

app.use(express.static(path.join(path.dirname(__filename), 'public')));
app.get('/', (req, res) => {});

app.use("/usuarios", userRoute);
app.use("/corredores", driverRoute);
app.use("/equipos", teamRoute);

app.listen(port, () => console.log(`http://localhost:${port}`));