const { Model, DataTypes } = require('sequelize')
const { USER_TABLE } = require('./user.models')

const POST_TABLE = 'posts'

const postSchema = {
  id: {
    allownull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  title: {
    allownull: false,
    type: DataTypes.STRING
  },
  content: {
    allownull: false,
    type: DataTypes.STRING
  },
  User_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    }
  }
}

class Posts extends Model {
  static associate (models) {
    this.belongsTo(models.users, {
      foreignKey: 'User_ID',
      as: 'users'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: POST_TABLE,
      modelName: 'posts',
      timestamps: false
    }
  }
}

module.exports = { postSchema, POST_TABLE, Posts }
