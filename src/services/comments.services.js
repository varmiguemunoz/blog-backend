const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class CommentServices {
  constructor () {}

  async find () {
    const response = await models.comments.findAll()
    return response
  }

  async findOne (id) {
    const commentId = await models.comments.findByPk(id)
    if (!commentId) {
      throw boom.notFound('Comment Not found')
    }
    return commentId
  }

  async create (data) {
    const createComment = await models.comments.create(data)
    return createComment
  }

  async update (id, changes) {
    const commentId = await models.comments.findByPk(id)
    const updateComment = await commentId.update(changes)
    return updateComment
  }

  async delete (id) {
    const commentId = await models.comments.findByPk(id)
    await commentId.destroy()
    return { id }
  }
}

module.exports = CommentServices
