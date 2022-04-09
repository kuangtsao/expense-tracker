const db = require('../../config/mongoose')
const User = require('../user')
const Category = require('../category')

const SEED_USER = [
  {
    id: 1,
    name: '廣志',
    email: 'hirosi@kasukabe.saitama',
    password: '12345678'
  },
  {
    id: 2,
    name: '小新',
    email: 'shinnosuke@kasukabe.saitama',
    password: '12345678'
  }
]

const SEED_CATEGORY = [
  {
    id: 1,
    name: '家居物業',
    icon: 'fa-house'
  },
  {
    id: 2,
    name: '交通出行',
    icon: 'fa-van-shuttle'
  },
  {
    id: 3,
    name: '休閒娛樂',
    icon: 'fa-face-grin-beam'
  },
  {
    id: 4,
    name: '餐飲',
    icon: 'fa-utensils'
  },
  {
    id: 5,
    name: '其他',
    icon: 'fa-pen'
  }
]

// TODO:
// 1. 密碼利用 bcrypt hash

db.once('open', () => {
  const createSeedUser = User.insertMany(SEED_USER, { ordered: true })

  const createSeedCategory = Category.insertMany(SEED_CATEGORY, { ordered: true })
  
  Promise.all([createSeedUser, createSeedCategory])
    .then(() => {
      console.log('user & category created!')
      process.exit()
    })
    .catch(error => console.log(error))
})
