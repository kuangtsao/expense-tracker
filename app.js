// 載入環境變數
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// express setting
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// express-handlebars setting
const session = require('express-session')
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const routes = require('./routes')
require('./config/mongoose')
const usePassport = require('./config/passport')

// moogoose query 用
const Record = require('./models/record')
const Category = require('./models/category')


app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

usePassport(app)
app.use(flash())
app.use((req, res, next) => {
  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')
  res.locals.loginError = req.flash('loginError')
  next()
})
// routes
app.use(routes)

app.listen(port, () => {
  console.log(`expense-tracker is running on http://localhost:${port}`)
})
