import { readDrivers, writeDrivers } from "../model/driverModel.js";

const getAllDrivers = (req, res) => {
    let drivers = readDrivers();
    res.status(200).json(drivers);
};

const getDriverById = (req, res) => {
    const driverId = parseInt(req.params.id);
    let drivers = readDrivers();
    const driver = drivers.find(d => d.id === driverId);
    if(driver) {
        res.status(200).json(driver);
    }else {
        res.status(404).json({message:"No encontramos el conductor que buscas"});
    }
}

const createDriver = (req, res) => {
    const {name, lastname, team, number, birth, country, raceWins , podiums, points24, grandPrixEntered, worldChampionships, driverImg} = req.body;

    let drivers = readDrivers();

    const newDriver = {
        id: drivers.length > 0 ? drivers.length + 1 : 1,
        name,
        lastname,
        team,
        number,
        birth,
        country,
        raceWins,
        podiums,
        points24,
        grandPrixEntered,
        worldChampionships,
        driverImg
    };
    drivers.push(newDriver);
    writeDrivers(drivers);
    res.status(201).json(newDriver);
};

const updateDriver = (req, res) => {
    const driverId = parseInt(req.params.id);
    let drivers = readDrivers();
    const driverIndex = drivers.findIndex(d => d.id === driverId);
    if(driverIndex != -1){
        drivers[driverIndex] = {id: driverId, ...req.body};
        writeDrivers(drivers);
        res.status(200).json(drivers[driverIndex]);
    }else{
        res.status(404).json({message:"No encontramos el conductor que buscas"});
    }
};

const deleteDriver = (req, res) => {
    const driverId= parseInt(req.params.id);
    let drivers = readDrivers();
    const driverIndex = drivers.findIndex(d => d.id === driverId);
    if(driverIndex != -1){
        drivers = drivers.filter(d => d.id !== driverId);
        writeDrivers(drivers);
        res.status(200).json({message:"Conductor eliminado"});
    }else{
        res.status(404).json({message:"No encontramos el conductor que buscas"});
    }
};

export { getAllDrivers, getDriverById, createDriver, updateDriver, deleteDriver };