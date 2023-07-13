const express = require('express')
const app = express()

app.use(express.static(__dirname + '/scripts')) //allows us to serve CSS

const router = require('./routes/translit')
app.use('/translit', router)

app.get('/', (req, res) => {
    res.render('index.ejs', { final: null})
})

app.listen(3000, () => console.log('Server Started'))