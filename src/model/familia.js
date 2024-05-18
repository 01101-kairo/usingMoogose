const mongoose = require('mongoose')
const conn = require('./../config/mongo')

conn()
const familiaSchema = mongoose.Schema({
  nome:String,
  idade: Number,
  profissao: String,
})
const familiaModel = mongoose.model('familia', familiaSchema)

module.exports = familiaModel
