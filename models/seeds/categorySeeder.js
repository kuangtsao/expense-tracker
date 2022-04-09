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
// 1. 確保只會建立一筆資料
// 2. 密碼利用 bcrypt hash

db.once('open', () => {
  const createSeedUser = new Promise((resolve, reject) => {
    SEED_USER.forEach(userInfo => {
      User.create({
        id: userInfo.id,
        name: userInfo.name,
        email: userInfo.email,
        password: userInfo.password
      })
    })
    resolve()
  })

  const createSeedCategory = new Promise((resolve, reject) => {
    SEED_CATEGORY.forEach(categoryInfo => {
      Category.create({
        id: categoryInfo.id,
        name: categoryInfo.name,
        icon: categoryInfo.icon
      })
    })
    resolve()
  })

  Promise.all([createSeedUser, createSeedCategory])
    .then(() => {
      console.log('user & category created!')
      process.exit()
    })
    .catch(error => console.log(error))
})
