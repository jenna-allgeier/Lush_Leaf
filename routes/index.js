const { Router } = require('express');
const plantController = require('../controllers/Plant')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/plants', plantController.getAllPlants)

router.post('/plants/create/:id', plantController.createPlant)

router.put('/plants/create/update', plantController.updatePlant)

router.delete('/plants/delete/:id', plantController.deletePlant)

module.exports = router;