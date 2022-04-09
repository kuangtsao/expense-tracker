// 載入環境變數
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// express setting
const express = require('express')
const app = express()
const port = 3000

// express-handlebars setting
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')

app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

// routes
app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`express is running on http://localhost:${port}`)
})
