const express = require('express')
const app = express()

app.use(express.static(__dirname + '/public')) //allows us to serve CSS


app.get('/', (req, res) => {
    res.render('index.ejs')
})

app.listen(3000, () => console.log('Server Started'))