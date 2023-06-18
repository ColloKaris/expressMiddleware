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

app.use('/dogs', (req, res, next) =>{
    console.log("I LOVE DOGS!!");
    next()
})

const verifyPassword = (req,res,next) => {
    //get the query string
    const { password } = req.query
    if (password === 'chickennugget') {
        next();
    }
    res.send('SORRY YOU NEED A PASSWORD')
}

app.get('/secret', verifyPassword ,(req,res) => {
    res.send("I WEAR HEADPHONES")
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

// Add a 404 page
app.use((req,res) =>{
    res.status(404).send("404 - NOT FOUND")
})





//listen at port 3000
app.listen(3000, () => {
    console.log("App is running on localhost: 3000")
})