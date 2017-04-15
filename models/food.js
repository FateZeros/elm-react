const mongoose = require('mongoose')

const foodSchema = mongoose.Schema({
  name : String,
  total : Number,
  price : Number
})

const Food = module.exports = mongoose.model('Food',foodSchema)