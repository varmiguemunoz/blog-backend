const Joi = require('joi')

const id = Joi.number()
const title = Joi.string()
const content = Joi.string().min(50)
const userID = Joi.number()

const createPostSchema = Joi.object({
  title: title.required(),
  content: content.required(),
  User_ID: userID.required()
})

const updatePostSchema = Joi.object({
  title,
  content
})

const findPostSchema = Joi.object({
  id: id.required()
})

module.exports = { createPostSchema, updatePostSchema, findPostSchema }
