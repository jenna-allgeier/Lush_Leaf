const { Router } = require('express');
const plantController = require('../controllers/Plant')
const commentController = require('../controllers/Comment')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/plants', plantController.getAllPlants)

router.get('/plants/:plant-id', plantController.getPlantById)

router.post('/plants/create-plant', plantController.createPlant)

router.put('/plants/:plant-id', plantController.updatePlant)

router.delete('/plants/:plant-id', plantController.deletePlant)

router.get('/plants/:plant-id/comments', commentController.getCommentsByPlant)

// router.get('/plants/:plant-id/comments', commentController.getAllComments)

// router.post('/plants/:plant-id/comments/:id', commentController.createComment)

// router.put('/plants/:plant-id/comments/:id', commentController.updateComment)

// router.delete('/plants/:plant-id/comments/:id', commentController.deleteComment)

module.exports = router;