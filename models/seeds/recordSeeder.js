const db = require('../../config/mongoose')
const User = require('../user')
const Category = require('../category')
const Record = require('../record')

let seedRecord = [
  {
    name: '午餐',
    date: '2019-04-23',
    amount: 60,
    userId: 1,
    categoryId: 4
  },
  {
    name: '晚餐',
    date: '2019-04-23',
    amount: 60,
    userId: 1,
    categoryId: 4
  },
  {
    name: '捷運',
    date: '2019-04-23',
    amount: 120,
    userId: 1,
    categoryId: 2
  },
  {
    name: '電影：驚奇隊長',
    date: '2019-04-23',
    amount: 220,
    userId: 2,
    categoryId: 3
  },
  {
    name: '租金',
    date: '2019-04-23',
    amount: 25000,
    userId: 1,
    categoryId: 1
  }
]

db.on('open', async () => {
  const users = await User.find().lean()
  const categories = await Category.find().lean()

  seedRecord.forEach((record) => {
    if (record.userId === 1) return record.userId = users[0]._id
    return record.userId = users[1]._id
  })

  seedRecord.forEach((record) => {
    if (record.categoryId === 1) return record.categoryId = categories[0]._id
    else if (record.categoryId === 2) return record.categoryId = categories[1]._id
    else if (record.categoryId === 3) return record.categoryId = categories[2]._id
    else if (record.categoryId === 4) return record.categoryId = categories[3]._id
    return record.categoryId = categories[3]._id
  })
  
  try {
    await Record.insertMany(seedRecord,{ ordered: true })
    console.log('records created!')
  } catch (error) {
    console.log('an error occured!')
    console.log(error)
  }  
  
  process.exit()

})
