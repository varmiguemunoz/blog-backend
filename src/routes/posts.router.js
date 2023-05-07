const Express = require('express')
const PostServices = require('../services/posts.services')
const validatorHandler = require('../middlewares/validatorHandler')
const { updatePostSchema, findPostSchema, createPostSchema } = require('../schemas/posts.schema')

const router = Express.Router()
const post = new PostServices()

router.get('/', async (req, res, next) => {
  try {
    const response = await post.find()
    res.json(response)
  } catch (err) {
    next(err)
  }
})

router.get('/:id',
  validatorHandler(findPostSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const postId = await post.findOne(id)
      res.json(postId)
    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validatorHandler(createPostSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const createPost = await post.create(body)
      res.json(createPost)
    } catch (err) {
      next(err)
    }
  })

router.put('/:id',
  validatorHandler(updatePostSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const updatePost = await post.update(id, body)
      res.json(updatePost)
    } catch (err) {
      next(err)
    }
  })

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deletePost = await post.delete(id)
    res.json(deletePost)
  } catch (err) {
    next(err)
  }
})

module.exports = router
