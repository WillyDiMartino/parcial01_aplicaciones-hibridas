import Driver from "../model/driverModel.js";


const getAllDrivers = async (req, res) => {
    try {
        const drivers = await Driver.find();
        res.status(200).json(drivers);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const getDriverById = async (req, res) => {
    try {
        const driver = await Driver.findById(req.params.id);
        if (!driver) {
            return res.status(404).json({ message: "Conductor no encontrado" });
        }
        res.status(200).json(driver);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};


const createDriver = async (req, res) => {
    try {
        const driver = new Driver(req.body);
        const newDriver = await driver.save();
        res.status(201).json(newDriver);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

const updateDriver = async (req, res) => {
    try {
        const updatedDriver = await Driver.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedDriver) {
            return res.status(404).json({ message: "Conductor no encontrado" });
        }
        res.status(200).json(updatedDriver);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

const deleteDriver = async (req, res) => {
    try {
        const deletedDriver = await Driver.findByIdAndDelete(req.params.id);
        if (!deletedDriver) {
            return res.status(404).json({ message: "Conductor no encontrado" });
        }
        res.status(200).json({ message: "Conductor eliminado" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export { getAllDrivers, getDriverById, createDriver, updateDriver, deleteDriver };

// import { readDrivers, writeDrivers } from "../model/driverModel.js";

// const getAllDrivers = (req, res) => {
//     let drivers = readDrivers();
//     res.status(200).json(drivers);
// };

// const getDriverById = (req, res) => {
//     const driverId = parseInt(req.params.id);
//     let drivers = readDrivers();
//     const driver = drivers.find(d => d.id === driverId);
//     if(driver) {
//         res.status(200).json(driver);
//     }else {
//         res.status(404).json({message:"No encontramos el conductor que buscas"});
//     }
// }

// const createDriver = (req, res) => {
//     const {name, lastname, team, number, birth, country, raceWins , podiums, points24, grandPrixEntered, worldChampionships, driverImg} = req.body;

//     let drivers = readDrivers();

//     const newDriver = {
//         id: drivers.length > 0 ? drivers.length + 1 : 1,
//         name,
//         lastname,
//         team,
//         number,
//         birth,
//         country,
//         raceWins,
//         podiums,
//         points24,
//         grandPrixEntered,
//         worldChampionships,
//         driverImg
//     };
//     drivers.push(newDriver);
//     writeDrivers(drivers);
//     res.status(201).json(newDriver);
// };

// const updateDriver = (req, res) => {
//     const driverId = parseInt(req.params.id);
//     let drivers = readDrivers();
//     const driverIndex = drivers.findIndex(d => d.id === driverId);
//     if(driverIndex != -1){
//         drivers[driverIndex] = {id: driverId, ...req.body};
//         writeDrivers(drivers);
//         res.status(200).json(drivers[driverIndex]);
//     }else{
//         res.status(404).json({message:"No encontramos el conductor que buscas"});
//     }
// };

// const deleteDriver = (req, res) => {
//     const driverId= parseInt(req.params.id);
//     let drivers = readDrivers();
//     const driverIndex = drivers.findIndex(d => d.id === driverId);
//     if(driverIndex != -1){
//         drivers = drivers.filter(d => d.id !== driverId);
//         writeDrivers(drivers);
//         res.status(200).json({message:"Conductor eliminado"});
//     }else{
//         res.status(404).json({message:"No encontramos el conductor que buscas"});
//     }
// };

// export { getAllDrivers, getDriverById, createDriver, updateDriver, deleteDriver };