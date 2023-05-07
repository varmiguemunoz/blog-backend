const { Model, DataTypes } = require('sequelize')

const USER_TABLE = 'users'

const userSchema = {
  id: {
    allownull: false,
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    allownull: false,
    type: DataTypes.STRING
  },
  email: {
    allownull: false,
    type: DataTypes.STRING
  },
  password: {
    allownull: false,
    type: DataTypes.STRING
  }

}

class Users extends Model {
  static associate (models) {
    this.hasMany(models.comments, {
      foreignKey: 'user_ID',
      as: 'comments'
    })

    this.hasMany(models.posts, {
      foreignKey: 'User_ID',
      as: 'posts'
    })
  }

  static config (sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'users',
      timestamps: false
    }
  }
}

module.exports = { Users, USER_TABLE, userSchema }
