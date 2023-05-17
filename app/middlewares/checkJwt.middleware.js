const { httpErrors } = require('../utils/error.handle')
const { verifyToken } = require('../users/src/utils/jwt.handle')

const checkJwt = (req, res, next) => {
  try {
    const jwtByUser = req.headers.authorization
    if (jwtByUser) {
      const jwt = jwtByUser.split(' ').pop()
      const isUser = verifyToken(`${jwt}`)
      if (!isUser) {
        httpErrors(res, 401, 'Invalid token provided')
      } else {
        req.user = isUser
        next()
      }
    } else {
      httpErrors(res, 401, 'Token was not found')
    }
  } catch (e) {
    httpErrors(res, 401, e.message)
  }
}

module.exports = { checkJwt }
