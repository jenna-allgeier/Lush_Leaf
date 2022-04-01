const { Plant, Comment } = require('../models');

const getAllPlants = async (req, res) => {
    try {
        const plants = await Plant.find()
    return res.status(200).json({ plants })
} catch (error) {
    return res.status(500).send(error.message);
    }
}

const getPlantById = async (req, res) => {
    console.log("plant")
    try {
        const { id } = req.params;
        const plant = await Plant.findById(id).populate("comments")
        console.log(plant)
        if (plant) {
            return res.status(200).json({ plant });
        }
        return res.status(404).send('Plant with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createPlant = async (req, res) => {
    try {
        const plant = await new Plant(req.body)
        await plant.save()
        return res.status(201).json({
            plant,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updatePlant = async (req, res) => {
    try {
        const { id } = req.params;
        const plant = await Plant.findByIdAndUpdate(id, req.body, { new: true })
        await plant.save()
        return res.status(201).json({
            plant,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deletePlant = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Plant.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("Plant deleted");
        }
        throw new Error("Plant not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createPlant,
    updatePlant,
    getAllPlants,
    deletePlant,
    getPlantById
}