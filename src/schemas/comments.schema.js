const Joi = require('joi')

const id = Joi.number()
const comment = Joi.string()
const userID = Joi.number()
const postID = Joi.number()

const createCommentSchema = Joi.object({
  comment: comment.required(),
  user_ID: userID.required(),
  post_ID: postID.required()
})

const updateCommentSchema = Joi.object({
  comment
})

const findCommentSchema = Joi.object({
  id: id.required()
})

module.exports = { createCommentSchema, updateCommentSchema, findCommentSchema }
