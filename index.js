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
    //res.send('SORRY YOU NEED A PASSWORD')
    throw new Error("Password required!!!")
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

// Route that causes an error
app.get('/error', (req,res) => {
    chicken.fly()
})

app.get('/dogs', (req,res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!!')
})

// Add a 404 page
app.use((req,res) =>{
    res.status(404).send("404 - NOT FOUND")
})

// Error Handling middleware
app.use((err, req, res, next) => {
    console.log("****************************************")
    console.log("******************ERROR*****************")
    console.log("****************************************")
    //res.status(500).send("OH BOY, WE GOT AN ERROR!!!")
    console.log(err)
    next(err);
})



//listen at port 3000
app.listen(3000, () => {
    console.log("App is running on localhost: 3000")
})