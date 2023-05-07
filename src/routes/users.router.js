const Express = require('express')
const validatorHandler = require('../middlewares/validatorHandler')
const UserServices = require('../services/users.services')
const { createUserSchema, updateUserSchema, findUserSchema } = require('../schemas/user.schemas')

const router = Express.Router()
const user = new UserServices()

router.get('/', async (req, res, next) => {
  try {
    const response = await user.find()
    res.json(response)
  } catch (err) {
    next(err)
  }
})

router.get('/:id',
  validatorHandler(findUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const userID = await user.findOne(id)
      res.json(userID)
    } catch (err) {
      next(err)
    }
  })

router.post('/',
  validatorHandler(createUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body
      const createUser = await user.create(body)
      res.status(201).json(createUser)
    } catch (err) {
      next(err)
    }
  })

router.put('/:id',
  validatorHandler(updateUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params
      const body = req.body
      const updateUser = await user.update(id, body)
      res.json(updateUser)
    } catch (err) {
      next(err)
    }
  })

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const deleteUser = await user.delete(id)
    res.json(deleteUser)
  } catch (err) {
    next(err)
  }
})

module.exports = router
