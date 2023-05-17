const mongoose = require('mongoose')
mongoose.Promise = global.Promise

// const URI = `mongodb://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:27017/${process.env.DB_NAME}`
const URI = `mongodb://${process.env.DB_HOST}:27017/${process.env.DB_NAME}`
const _connect = () => {
  mongoose
    .connect(URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(
      () => {
        console.log('Connection db ready to use.')
      },
      (err) => {
        console.log('Connection error - ', err)
      }
    )
}

module.exports = _connect
