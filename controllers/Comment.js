const Comment = require('../models/comment');
const plant = require('../models/plant');
const Plant = require('../models/plant')

const getCommentsByPlant = async (req, res) => {
    try {
        const { id } = req.params;
        const comments = await Comment.findById(id)
        if (comments) {
            return res.status(200).json({ comments });
        }
        return res.status(404).send('Comment with the specified ID does not exists');
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const getAllComments = async (req, res) => {
    try {
        const comments = await Comment.find()
    return res.status(200).json({ comments })
} catch (error) {
    return res.status(500).send(error.message);
    }
}

const createComment = async (req, res) => {
    try {
        const comment = await new Comment(req.body)
        await comment.save()
        const plant = await Plant.findById(req.params.id)
        plant.comments.push(comment._id)
        await plant.save()
        return res.status(201).json({
            comment,
        });
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateComment = async (req, res) => {
    try {
        const { id } = req.params;
        const comment = await Comment.findByIdAndUpdate(id, req.body, { new: true })
        await comment.save()
        return res.status(201).json({
            comment,
        });
    } catch (error) {
        res.status(500).send(error.message);
    }
}

const deleteComment = async (req, res) => {
    try {
        const { id } = req.params;
        const deleted = await Comment.findByIdAndDelete(id)
        if (deleted) {
            return res.status(200).send("comment deleted");
        }
        throw new Error("comment not found");
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

module.exports = {
    createComment,
    updateComment,
    getAllComments,
    deleteComment,
    getCommentsByPlant
}