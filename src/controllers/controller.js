const express = require('express')
const mongoose = require('mongoose')
const familiaModel = require('./src/model/familia')

const app = express()

//Create
app.post('/familias', async (req, res) => {
  const response = await familiaModel.create({
    nome: req.body.nome,
    idade: req.body.idade,
    profissao: req.body.profissao,
  })
  return res.status(200).json({
    data: response
  })
})

//Read
app.get('/familias', async (req, res) => {
  if (req.query.idade) {
    const membros = await familiaModel.find({}).gt('idade',req.query.idade)
    // const membros = await familiaModel.find({}).where('idade').gt(req.query.idade)

    return res.status(200).json({
      data: membros
    })
  }
  const membros = await familiaModel.find({})

  return res.status(200).json({
    data: membros
  })
})

//Read
app.get('/familias/:id', async (req, res) => {
  try {
    const membro = await familiaModel.findById(req.params.id)

    return res.status(200).json({
      data: membro
    })
  } catch (error) {
    return res.status(404).json({
      data: {},
      message: 'id não encontrado'
    })
  }
})

//Update
app.put('/familias/:id', async (req, res ) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: {},
      message: 'ObjectId invalido'
    })
  }
  const membro = await familiaModel.updateOne({_id:req.params.id}, req.body)

  return res.status(200).json({
    data: membro
  })
})

//Delete
app.delete('/familias/:id', async (req, res ) => {
  if (!mongoose.isValidObjectId(req.params.id)) {
    return res.status(400).json({
      data: {},
      message: 'ObjectId invalido'
    })
  }
  const membro = await familiaModel.deleteOne({_id:req.params.id})

  return res.status(200).json({
    data: membro
  })
})
