const { Router } = require('express');
const plantController = require('../controllers/Plant')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/plants', plantController.getAllPlants)

router.get('/plants/:id', plantController.getPlantById)

router.post('/plants/:id', plantController.createPlant)

router.put('/plants/:id', plantController.updatePlant)

router.delete('/plants/:id', plantController.deletePlant)

module.exports = router;