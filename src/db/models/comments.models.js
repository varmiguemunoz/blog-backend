const { Model, DataTypes } = require('sequelize')
const { USER_TABLE } = require('./user.models')
const { POST_TABLE } = require('./post.models')

const COMMENT_TABLE = 'comments'

const commentSchema = {
  id: {
    allownull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },

  comment: {
    type: DataTypes.STRING,
    allownull: false
  },
  user_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    }
  },
  post_ID: {
    type: DataTypes.INTEGER,
    references: {
      model: POST_TABLE,
      key: 'id'
    }
  }
}

class Comments extends Model {
  static associate (models) {
    this.belongsTo(models.users, {
      foreignKey: 'user_ID',
      as: 'users'
    })

    this.belongsTo(models.posts, {
      foreignKey: 'post_ID',
      as: 'posts'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: COMMENT_TABLE,
      modelName: 'comments',
      timestamps: false
    }
  }
}

module.exports = { commentSchema, COMMENT_TABLE, Comments }
