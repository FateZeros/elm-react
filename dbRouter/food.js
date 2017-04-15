const express = require('express')
const router = express.Router()
const Food = require('../models/food')

router.get('/food', (req, res) => {
	Food.find({})
			.then(foods => {
				res.json(foods)
			})
			.catch(err => {
				res.json(err)
			})
})

module.exports = router