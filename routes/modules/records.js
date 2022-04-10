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
  const { name, categoryId, date, amount } = req.body

  return Record.create({ name, date, amount, userId, categoryId})
               .then(() => res.redirect('/'))
               .catch(error => console.error(error))
 
})

router.get('/:id/edit', async (req, res) => {
  const _id = req.params.id
  const record = await Record.findOne({ _id }).populate('categoryId').lean()
  const category = await Category.find({ _id: { $ne: record.categoryId }}).lean()
  res.render('edit', { record, category })
})

module.exports = router
