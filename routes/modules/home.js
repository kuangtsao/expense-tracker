const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

router.get('/', async (req, res) => {
  const userId = req.user._id
  const records = await Record.find({ userId }).populate('categoryId').lean()
  const category = await Category.find().lean()
  let totalAmount = 0 
  records.forEach(item => totalAmount += item.amount)
  res.render('index', { category, records, totalAmount })
})

// 選擇類別以顯示部分清單
router.post('/', async (req, res) => {
  const userId = req.user._id
  const categoryOption = req.body.categoryOption
  console.log(categoryOption)
  const selectedCategory = await Category.findById(categoryOption).lean()
  const otherCategory = await Category.find({ _id: {$ne: categoryOption} }).lean()
  const records = await Record.find({ userId, categoryId: categoryOption })
                              .populate('categoryId')
                              .lean()
  let totalAmount = 0
  records.forEach(item => totalAmount += item.amount)
  console.log(selectedCategory)
  console.log(otherCategory)
  res.render('index', { selectedCategory, otherCategory, records, totalAmount })
})

module.exports = router
