const boom = require('@hapi/boom')
const { models } = require('./../libs/sequelize')

class UserServices {
  constructor () {}

  async find () {
    const response = await models.users.findAll()
    return response
  }

  async findOne (id) {
    const userId = await models.users.findByPk(id)
    if (!userId) {
      throw boom.notFound('User Not Found!')
    }
    return userId
  }

  async create (data) {
    const newUser = await models.users.create(data)
    return newUser
  }

  async update (id, changes) {
    const userId = await models.users.findByPk(id)
    const updateUser = await userId.update(changes)
    return updateUser
  }

  async delete (id) {
    const userId = await models.users.findByPk(id)
    await userId.destroy()
    return { id }
  }
}

module.exports = UserServices
