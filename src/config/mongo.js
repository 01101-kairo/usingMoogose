const mongose = require('mongoose')

let conn
const connection = () => {
  if (conn) {
    return conn
  }
  conn = mongose.connect('mongodb://127.0.0.1:27017/local')
}
module.exports = connection
