// require express
const express = require('express');

//execute express
const app = express();

// require morgan
const morgan = require('morgan')

app.use((req,res,next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path)
    next();
})


//app.use(morgan('tiny'))

//add a basic route
app.get('/', (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

app.get('/dogs', (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!!')
})



//listen at port 3000
app.listen(3000, () => {
    console.log("App is running on localhost: 3000")
})