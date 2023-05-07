const { ValidationError } = require('sequelize')

const errorHandler = (error, req, res, next) => {
  res.status(500).json({
    message: error.message,
    stack: error.stack
  })
}

const boomErrorHandler = (error, req, res, next) => {
  if (error.isBoom) {
    const { output } = error
    res.status(output.statusCode).json(output.payload)
  } else {
    next(error)
  }
}

const OrmErrorHandler = (error, req, res, next) => {
  if (error instanceof ValidationError) {
    res.status(409).json({
      statusCode: 409,
      message: error.message,
      errors: error.errors
    })
  } else {
    next(error)
  }
}

module.exports = { errorHandler, boomErrorHandler, OrmErrorHandler }
