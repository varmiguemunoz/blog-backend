const boom = require('@hapi/boom')
const { models } = require('../libs/sequelize')

class PostServices {
  constructor () {}

  async find () {
    const response = await models.posts.findAll()
    return response
  }

  async findOne (id) {
    const postsId = await models.posts.findByPk(id)
    if (!postsId) {
      throw boom.notFound('Post Not found!')
    }
    return postsId
  }

  async create (data) {
    const newPost = await models.posts.create(data)
    return newPost
  }

  async update (id, changes) {
    const postsId = await models.posts.findByPk(id)
    const updatePosts = await postsId.update(changes)
    return updatePosts
  }

  async delete (id) {
    const postsId = await models.posts.findByPk(id)
    await postsId.destroy()
    return { id }
  }
}

module.exports = PostServices
