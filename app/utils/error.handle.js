const { ReasonPhrases, StatusCodes } = require('http-status-codes')

const handleHttp = (res, error, errorRaw) => {
  res.status(500)
  res.send({ error })
}

const httpErrors = (res, status, message) => {
  switch (status) {
    case 400:
      res.status(StatusCodes.BAD_REQUEST).json({
        status: StatusCodes.BAD_REQUEST,
        error: ReasonPhrases.BAD_REQUEST,
        message,
      })
      break
    case 401:
      res.status(StatusCodes.UNAUTHORIZED).json({
        status: StatusCodes.UNAUTHORIZED,
        error: ReasonPhrases.UNAUTHORIZED,
        message,
      })
      break
    case 403:
      res.status(StatusCodes.FORBIDDEN).json({
        status: StatusCodes.FORBIDDEN,
        error: ReasonPhrases.FORBIDDEN,
        message,
      })
      break
    case 404:
      res.status(StatusCodes.NOT_FOUND).json({
        status: StatusCodes.NOT_FOUND,
        error: ReasonPhrases.NOT_FOUND,
        message,
      })
      break
    case 422:
      res.status(StatusCodes.UNPROCESSABLE_ENTITY).json({
        status: StatusCodes.UNPROCESSABLE_ENTITY,
        error: ReasonPhrases.UNPROCESSABLE_ENTITY,
        message,
      })
      break

    default:
      res.status(StatusCodes.BAD_REQUEST).json({
        status: StatusCodes.BAD_REQUEST,
        error: ReasonPhrases.BAD_REQUEST,
        message,
      })
      break
  }
}

module.exports = { handleHttp, httpErrors }
