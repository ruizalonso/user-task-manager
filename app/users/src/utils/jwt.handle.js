const { sign, verify } = require('jsonwebtoken')
const { expressjwt } = require('express-jwt')
const JWT_SECRET = process.env.JWT_SECRET || 'token.01010101'

const generateToken = (id) => {
  const jwt = sign({ id }, JWT_SECRET, {
    expiresIn: '8h',
  })
  return jwt
}

const verifyToken = (jwt) => {
  const isOk = verify(jwt, JWT_SECRET)
  return isOk
}

const jwt = () => {
  return expressjwt({ algorithms: ['HS256'], secret: JWT_SECRET }).unless({
    path: [
      '/api/user/register',
      '/api/user/login',
    ],
  })
}

module.exports = { generateToken, verifyToken, jwt }
