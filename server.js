const express = require('express')
const mustacheExpress = require('mustache-express')
const bodyParser = require('body-parser')


const app = express()

app.use(express.static('public'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.engine('mustache', mustacheExpress())
app.set('views', './views')
app.set('view engine', 'mustache')

app.get ('/', (request, response) => {
  console.log('Hello everyone!');
  response.render('index')
})

app.listen(9999, ()=> {
    console.log('One digit away from Dark Territory')
})
