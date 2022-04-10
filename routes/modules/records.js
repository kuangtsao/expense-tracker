const express = require('express')
const category = require('../../models/category')
const router = express.Router()

const Category = require('../../models/category')

router.get('/new', async (req, res) => {
  const category = await Category.find().lean()

  res.render('new', { category })
})

module.exports = router
