const Express = require('express')
const CommentServices = require('../services/comments.services')
const validatorHandler = require('../middlewares/validatorHandler')
const { createCommentSchema, updateCommentSchema, findCommentSchema } = require('../schemas/comments.schema')

const router = Express.Router()
const comment = new CommentServices()

router.get('/', async (req, res, next) => {
  try {
    const response = await comment.find()
    res.json(response)
  } catch (err) {
    next(err)
  }
})

router.get('/:id',
  validatorHandler(findCommentSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const commentId = await comment.findOne(id)
      res.json(commentId)
    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validatorHandler(createCommentSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const createComment = await comment.create(body)
      res.json(createComment)
    } catch (err) {
      next(err)
    }
  })

router.put('/:id',
  validatorHandler(updateCommentSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const updateComment = await comment.update(id, body)
      res.json(updateComment)
    } catch (err) {
      next(err)
    }
  })

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteComment = await comment.delete(id)
    res.json(deleteComment)
  } catch (err) {
    next(err)
  }
})

module.exports = router
