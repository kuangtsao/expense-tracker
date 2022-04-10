const express = require('express')
const category = require('../../models/category')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/new', async (req, res) => {
  const category = await Category.find().lean()
  res.render('new', { category })
})

router.post('/new', (req, res) => {
  const userId = req.user._id
  console.log(req.body)
  const { name, categoryId, date, amount } = req.body
  console.log(`${name},${date},${amount},${userId},${categoryId}`)

  return Record.create({ name, date, amount, userId, categoryId})
               .then(() => res.redirect('/'))
               .catch(error => console.error(error))
 
})

module.exports = router
