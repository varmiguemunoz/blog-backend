const { commentSchema, Comments } = require('./comments.models')
const { Users, userSchema } = require('./user.models')
const { postSchema, Posts } = require('./post.models')

const setUpModels = (sequelize) => {
  Comments.init(commentSchema, Comments.config(sequelize))
  Users.init(userSchema, Users.config(sequelize))
  Posts.init(postSchema, Posts.config(sequelize))

  Users.associate(sequelize.models)
  Posts.associate(sequelize.models)
  Comments.associate(sequelize.models)
}

module.exports = setUpModels
