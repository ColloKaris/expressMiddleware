// require express
const express = require('express');

//execute express
const app = express();

// require morgan
const morgan = require('morgan')

app.use(morgan('dev'))

//add a basic route
app.get('/', (req,res) => {
    res.send('HOME PAGE!')
})

app.get('/dogs', (req,res) => {
    res.send('WOOF WOOF!!')
})

//listen at port 3000
app.listen(3000, () => {
    console.log("App is running on localhost: 3000")
})