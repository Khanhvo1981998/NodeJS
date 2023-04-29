const express = require('express')
const morgan = require('morgan')
const path = require('path')
const handlebars = require('express-handlebars').create({
    extname: '.hbs'
})

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')))

// HTTP log
app.use(morgan('combined'))
// Template engine
app.engine('hbs', handlebars.engine)
app.set('view engine', 'hbs')
app.set('views', path.join(__dirname, 'resource/views'))


app.get('/', (req, res) => {
    res.render('home')
})

app.get('/news', (req, res) => {
    res.render('news')
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})