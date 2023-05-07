const Express = require('express')

const Comments = require('./comments.router')
const Posts = require('./posts.router')
const Users = require('./users.router')

const routerApi = (app) => {
  const router = Express.Router()
  app.use('/api/v1', router)
  router.use('/comments', Comments)
  router.use('/posts', Posts)
  router.use('/users', Users)
}

module.exports = routerApi
