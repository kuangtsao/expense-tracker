const db = require('../../config/mongoose')
const Record = require('../record')

const SEED_RECORD = [
  {
    id: 1,
    name: '午餐',
    date: 2019-04-23,
    amount: 60,
    userId: 1,
    categoryId: 4
  },
  {
    id: 2,
    name: '晚餐',
    date: '2019-04-23',
    amount: 60,
    userId: 1,
    categoryId: 4
  },
  {
    id: 3,
    name: '捷運',
    date: '2019-04-23',
    amount: 120,
    userId: 1,
    categoryId: 2
  },
  {
    id: 4,
    name: '電影：驚奇隊長',
    date: '2019-04-23',
    amount: 220,
    userId: 2,
    categoryId: 3
  },
  {
    id: 5,
    name: '租金',
    date: '2019-04-23',
    amount: 25000,
    userId: 1,
    categoryId: 1
  }
]

db.on('open',() => {
  Record.insertMany(SEED_RECORD,{ ordered: true })
    .then(() => console.log('record created!'))
    .catch(error => console.error(error))
    .finally(() => process.exit())
})
