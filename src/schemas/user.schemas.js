const Joi = require('joi')

const id = Joi.number()
const name = Joi.string().min(5).max(50)
const email = Joi.string().min(5).max(100)
const password = Joi.string()

const createUserSchema = Joi.object({
  name: name.required(),
  email: email.required(),
  password: password.required()
})

const updateUserSchema = Joi.object({
  name,
  email,
  password
})

const findUserSchema = Joi.object({
  id: id.required()
})

module.exports = { createUserSchema, updateUserSchema, findUserSchema }
