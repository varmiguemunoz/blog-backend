const Express = require('express')
const routerApi = require('./src/routes/index.router')
const { errorHandler, boomErrorHandler, OrmErrorHandler } = require('./src/middlewares/errorHandler')

const app = Express()
const PORT = process.env.PORT || 5001

app.use(Express.json())

routerApi(app)
app.use(OrmErrorHandler)
app.use(boomErrorHandler)
app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`server running on port: http://localHost:${PORT}`)
})
