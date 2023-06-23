//require express in order to use it
const express = require('express');
//execute express
const app = express();

// app.use((req,res, next) => {
//     console.log("WE GOT A NEW REQUEST. THIS IS A RESPONSE")
//     res.send({color: "red"})
//     next();
// })

app.get('/r/:subreddit', (req,res) => {
    const {subreddit} = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`)
})

app.get('/r/:subreddit/:postId', (req,res) => {
    console.log(req.params)
    const {subreddit, postId} = req.params;
    res.send(`<h1>Viewing Post Id ${postId} on the ${subreddit} subreddit</h1>`)
})

app.get('/search', (req,res) => {
    const { q } = req.query;
    console.log(req.query)
    res.send(`<h1>Search results for: ${q}</h1>`)
})




//listen for requests
app.listen(3000, () => {
    console.log("LISTENING ON PORT 3000")
})
