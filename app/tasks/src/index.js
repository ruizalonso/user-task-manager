const express = require('express')
require('dotenv').config()
const cors = require('cors')
const { checkJwt } = require('../../middlewares/checkJwt.middleware')
const PORT = process.env.API_PORT

const app = express()
const bodyParser = require('body-parser')
const router = require('./routes')
const _connect = require('./config/_connect')
_connect()
app.use(cors('*'))
app.use(bodyParser.json())
app.use('/api/tasks', checkJwt, router)
app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})
