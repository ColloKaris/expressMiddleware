// require express
const express = require('express');
const AppError = require('./AppError')

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
    throw new AppError('Password required!', 401);
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

app.get('/admin', (req,res) => {
    throw new AppError('You are not an Admin', 403)
})

// Add a 404 page
app.use((req,res) =>{
    res.status(404).send("404 - NOT FOUND")
})

// Error Handling middleware
// app.use((err, req, res, next) => {
//     console.log("****************************************")
//     console.log("******************ERROR*****************")
//     console.log("****************************************")
//     res.status(500).send("OH BOY, WE GOT AN ERROR!!!")
//     console.log(err);
//     next(err);
// })

app.use((err, req, res, next) => {
    const { status = 500, message = 'Something went wrong' } = err;
    res.status(status).send(message);
})

//listen at port 3000
app.listen(3000, () => {
    console.log("App is running on localhost: 3000")
})