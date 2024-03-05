const express = require('express')
const app = express()
const indexRouter = require('./errorR');

app.all('/', (req, res) => {
    console.log("Just got a request!")
    res.send('Yo!')
})

// Function to get error message based on error code

app.use('/', indexRouter);
app.listen(process.env.PORT || 3000)