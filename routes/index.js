const { Router } = require('express');
const plantController = require('../controllers/Plant')
const commentController = require('../controllers/Comment')
const router = Router();

router.get('/', (req, res) => res.send('This is root!'))

router.get('/plants', plantController.getAllPlants)

router.get('/plants/:id', plantController.getPlantById)

router.post('/plants/:id', plantController.createPlant)

router.put('/plants/:id', plantController.updatePlant)

router.delete('/plants/:id', plantController.deletePlant)

router.get('/comments', commentController.getAllComments)

router.get('/comments/:id', commentController.getCommentById)

router.post('/comments/:id', commentController.createComment)

router.put('/comments/:id', commentController.updateComment)

router.delete('/comments/:id', commentController.deleteComment)

module.exports = router;