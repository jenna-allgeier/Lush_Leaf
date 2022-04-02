const { Router } = require('express');
const plantController = require('../controllers/Plant')
const commentController = require('../controllers/Comment')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/plants', plantController.getAllPlants)

router.get('/plants/:id', plantController.getPlantById)

router.post('/plants/create-plant', plantController.createPlant)

router.put('/plants/:id', plantController.updatePlant)

router.delete('/plants/:id', plantController.deletePlant)

router.get('/plants/:id/comments', commentController.getCommentsByPlant)

router.get('/plants/:id/comments', commentController.getAllComments)

router.post('/comments/:id', commentController.createComment)

router.put('/plants/:id/comments/:id', commentController.updateComment)

router.delete('/plants/:id/comments/:id', commentController.deleteComment)

module.exports = router;